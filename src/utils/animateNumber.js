import { ref, watchEffect } from 'vue'
import { gsap } from 'gsap'

/**
 * 数字动画工具函数
 * 当元素进入视口时，数字从起始值动画到目标值
 * 
 * @param {Object} options - 配置选项
 * @param {Ref} options.elementRef - Vue ref，指向要观察的元素
 * @param {Number} options.targetValue - 目标数字值
 * @param {Number} options.startValue - 起始数字值（可选，默认为 targetValue * 2 或 1000）
 * @param {Number} options.duration - 动画持续时间（秒，默认 1）
 * @param {String} options.ease - GSAP 缓动函数（默认 'power2.out'）
 * @param {Number} options.threshold - IntersectionObserver 阈值（默认 0.1）
 * @param {Function} options.onComplete - 动画完成回调（可选）
 * @param {Boolean} options.once - 是否只执行一次（默认 false，可重复执行）
 * 
 * @returns {Object} 返回 { displayValue, cleanup } 
 *   - displayValue: 响应式的数字值，用于在模板中显示
 *   - cleanup: 清理函数，用于在组件卸载时调用
 * 
 * @example
 * // 在组件中使用
 * const numberRef = ref(null)
 * const { displayValue, cleanup } = useAnimateNumber({
 *   elementRef: numberRef,
 *   targetValue: 1949,
 *   startValue: 1000,
 *   duration: 1,
 *   ease: 'power2.out'
 * })
 * 
 * onUnmounted(() => {
 *   cleanup()
 * })
 */
export function useAnimateNumber(options = {}) {
  const {
    elementRef,
    targetValue,
    startValue = null,
    duration = 1,
    ease = 'power2.out',
    threshold = 0.1,
    onComplete = null,
    once = false,
    keyframes = null,
  } = options

  // 计算起始值
  const calculatedStartValue = startValue !== null 
    ? startValue 
    : (targetValue > 1000 ? 1000 : targetValue * 2)

  // 响应式的显示值
  const displayValue = ref(calculatedStartValue)

  let observer = null
  let animationTween = null
  let isObserverInitialized = false

  // 动画函数
  const animateNumber = () => {
    // 如果已经有动画在运行，先停止它
    if (animationTween) {
      animationTween.kill()
      animationTween = null
    }

    // 重置为起始值
    displayValue.value = calculatedStartValue
    const animateParams =  {
      duration,
      ease,
      onUpdate: () => {
        displayValue.value = Math.floor(obj.value)
      },
      onComplete: () => {
        displayValue.value = targetValue
        animationTween = null
        if (onComplete) {
          onComplete()
        }
      }
    }
    // keyframes可实现多阶段动画
    if(keyframes){
      animateParams.keyframes = keyframes
    }else{
      animateParams.value = targetValue
    }

    const obj = { value: calculatedStartValue }
    animationTween = gsap.to(obj, animateParams)
  }

  // 重置函数（当元素离开视口时调用）
  const resetAnimation = () => {
    // 停止当前动画
    if (animationTween) {
      animationTween.kill()
      animationTween = null
    }
    // 重置为起始值
    displayValue.value = calculatedStartValue
  }

  // 初始化 IntersectionObserver
  const initObserver = () => {
    if (!elementRef?.value || isObserverInitialized) return
    isObserverInitialized = true

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 元素进入视口，执行动画
            animateNumber()
          } else {
            // 元素离开视口，重置动画状态
            if (!once) {
              resetAnimation()
            }
          }
        })
      },
      { threshold }
    )

    observer.observe(elementRef.value)
  }

  // 清理函数
  const cleanup = () => {
    // 停止动画
    if (animationTween) {
      animationTween.kill()
      animationTween = null
    }
    // 断开观察器
    if (observer) {
      observer.disconnect()
      observer = null
      isObserverInitialized = false
    }
  }

  // 自动检测元素挂载并初始化
  watchEffect(() => {
    if (elementRef?.value && !isObserverInitialized) {
      initObserver()
    }
  })

  return {
    displayValue,
    cleanup,
    // 手动触发动画（如果需要）
    animate: animateNumber
  }
}

