import { nextTick, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { pxToVw, pxToVh } from '@/utils/viewportUtils'

gsap.registerPlugin(ScrollTrigger)

/**
* 每种滚动模式的标准化规则
*/
const PARALLAX_PRESETS = {
horizontal: {
scroller: '.horizontal-scroll-container',
horizontal: true,
start: 'left right',
end: 'right left'
},
vertical: {
scroller: window,
horizontal: false,
start: 'top bottom',
end: 'bottom top'
}
}

/**
* 查找当前元素所在的滚动模式
*/
const getScrollMode = (el: HTMLElement): 'horizontal' | 'vertical' => {
const section = el.closest('[data-scroll-mode]')
return (section?.getAttribute('data-scroll-mode') as any) || 'vertical'
}

export function useAdaptiveParallax() {
let triggers: ScrollTrigger[] = []

const init = async () => {
await nextTick()

document.querySelectorAll<HTMLElement>('[data-parallax]').forEach(el => {
const mode = getScrollMode(el)
const preset = PARALLAX_PRESETS[mode]

const axis = el.dataset.parallaxAxis || 'x'
const from = Number(el.dataset.parallaxFrom || 0)
const to = Number(el.dataset.parallaxTo || 0)
const speed = Number(el.dataset.parallaxSpeed || 1)
const ease = el.dataset.parallaxEase || 'none'
const centerLock = el.dataset.parallaxCenterLock !== 'false'

const convert = axis === 'x' ? pxToVw : pxToVh

// ====== 处理 center lock ======
let fromProps: any = {}
let toProps: any = {}

if (centerLock) {
const distance = Math.abs(to - from) / 2
fromProps[axis] = convert(-distance)
toProps[axis] = convert(distance)
} else {
fromProps[axis] = convert(from)
toProps[axis] = convert(to)
}

// ====== wrapper（解决 CSS animation 冲突） ======
let target: HTMLElement = el
if (!el.dataset.parallaxWrapped) {
const wrapper = document.createElement('div')
wrapper.className = 'parallax-wrapper'
wrapper.style.display = 'inline-block'
wrapper.style.willChange = 'transform'

el.parentNode?.insertBefore(wrapper, el)
wrapper.appendChild(el)
el.dataset.parallaxWrapped = 'true'
target = wrapper
}

const tween = gsap.fromTo(
target,
fromProps,
{
...toProps,
ease,
scrollTrigger: {
trigger: target,
scroller: preset.scroller,
horizontal: preset.horizontal,
start: preset.start,
end: preset.end,
scrub: speed,
invalidateOnRefresh: true
}
}
)

triggers.push(tween.scrollTrigger!)
})

ScrollTrigger.refresh()
}

onUnmounted(() => {
triggers.forEach(t => t.kill())
triggers = []
})

return { init }
}
