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


/**
 * 辅助函数：将设计图 px 值转换为当前视口宽度的实际像素值
 * @param {number} px - 设计图上的 px 值
 * @returns {number} 对应的实际像素值
 */
export const pxToVwPx = (px) => {
    return (px / 1920) * window.innerWidth;
};

/**
 * 辅助函数：将设计图 px 值转换为当前视口高度的实际像素值
 * @param {number} px - 设计图上的 px 值
 * @returns {number} 对应的实际像素值
 */
export const pxToVhPx = (px) => {
    return (px / 1080) * window.innerHeight;
};

/**
 * 将 computedStyle 返回的宽度像素值转换为 vw（仅用于宽度）
 * @param {string} widthValue - CSS 宽度值，如 "100px", "auto", "0px" 等
 * @returns {string} 转换后的值，如 "5.208vw", "auto", "0" 等
 */
export const convertWidthPxToVw = (widthValue) => {
    if (!widthValue || widthValue === 'auto' || widthValue === 'none' || widthValue === '0' || widthValue === '0px') {
        return widthValue === '0px' ? '0' : widthValue;
    }
    
    // 匹配数字和单位（如 "100px", "10.5px"）
    const match = widthValue.match(/^([\d.]+)px$/);
    if (match) {
        const pxValue = parseFloat(match[1]);
        // 将当前视口的像素值转换为 vw
        // 公式：px / viewportWidth * 100 = vw
        const vwValue = ((pxValue / window.innerWidth) * 100).toFixed(3);
        return `${vwValue}vw`;
    }
    
    // 如果不是 px 单位，直接返回原值（可能是 vw, vh, %, auto 等）
    return widthValue;
};

/**
 * 将 computedStyle 返回的高度像素值转换为 vh（仅用于高度）
 * @param {string} heightValue - CSS 高度值，如 "100px", "auto", "0px" 等
 * @returns {string} 转换后的值，如 "9.259vh", "auto", "0" 等
 */
export const convertHeightPxToVh = (heightValue) => {
    if (!heightValue || heightValue === 'auto' || heightValue === 'none' || heightValue === '0' || heightValue === '0px') {
        return heightValue === '0px' ? '0' : heightValue;
    }
    
    // 匹配数字和单位（如 "100px", "10.5px"）
    const match = heightValue.match(/^([\d.]+)px$/);
    if (match) {
        const pxValue = parseFloat(match[1]);
        // 将当前视口的像素值转换为 vh
        // 公式：px / viewportHeight * 100 = vh
        const vhValue = ((pxValue / window.innerHeight) * 100).toFixed(3);
        return `${vhValue}vh`;
    }
    
    // 如果不是 px 单位，直接返回原值（可能是 vw, vh, %, auto 等）
    return heightValue;
};

/**
 * 将 transformOrigin 中的 px 值转换为 vw
 * transformOrigin 格式：x y（如 "50% 50%", "100px 200px", "center center"）
 * x 和 y 方向都转 vw
 * @param {string} transformOrigin - transformOrigin 值，如 "50% 50%", "100px 200px" 等
 * @returns {string} 转换后的值
 */
export const convertTransformOriginPxToVwVh = (transformOrigin) => {
    if (!transformOrigin) {
        return transformOrigin;
    }
    
    // 分割 x 和 y 值
    const parts = transformOrigin.trim().split(/\s+/);
    
    if (parts.length === 1) {
        // 只有一个值，通常是 x，y 默认为 center 或 50%
        const x = parts[0];
        // 如果是 px，转换为 vw
        if (x.match(/^[\d.]+px$/)) {
            return convertWidthPxToVw(x) + ' center';
        }
        return transformOrigin;
    } else if (parts.length === 2) {
        // 两个值：x 和 y
        const x = parts[0];
        const y = parts[1];
        
        let convertedX = x;
        let convertedY = y;
        
        // 转换 x（水平方向）为 vw
        if (x.match(/^[\d.]+px$/)) {
            convertedX = convertWidthPxToVw(x);
        }
        
        // 转换 y（垂直方向）也为 vw
        if (y.match(/^[\d.]+px$/)) {
            convertedY = convertWidthPxToVw(y);
        }
        
        return `${convertedX} ${convertedY}`;
    }
    
    // 如果格式不符合预期，直接返回原值
    return transformOrigin;
};