// 设计图基准宽度（与 postcss 配置的 viewportWidth 一致）
const DESIGN_WIDTH = 1920;

/**
 * px 转 vw 数值（返回纯数字，GSAP 可直接使用）
 * @param {number} px - 设计图上的 px 值
 * @returns {number} 对应的 vw 数值（如 192px → 10）
 */
export const pxToVw = (px) => {
    return ((px / DESIGN_WIDTH) * 100)+'vw';
};

/**
 * px 转 vh 数值（可选，对应设计图高度 1080px）
 * @param {number} px - 设计图上的 px 值
 * @returns {number} 对应的 vh 数值
 */
export const pxToVh = (px) => {
    return ((px / 1080) * 100)+'vh';
};