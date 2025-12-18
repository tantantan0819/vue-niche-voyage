// postcss.config.js
module.exports = {
    plugins: {
        // 其他 PostCSS 插件（如 autoprefixer）可保留，放在前面
        autoprefixer: {}, // 可选，用于自动加浏览器前缀
        'postcss-px-to-viewport': {
            // 1. 设计图基准尺寸（关键）
            viewportWidth: 1920, // 设计图宽度（你的项目是1920px）
            viewportHeight: 1080, // 设计图高度（可选，用于转vh）
            unitPrecision: 3, // 转换后保留3位小数（如 100px → 5.208vw）

            // 2. 转换后的单位（优先vw，宽度适配）
            viewportUnit: 'vw',

            // 3. 忽略转换的选择器（关键：保护交互元素/固定尺寸元素）
            selectorBlackList: [
                'ignore-', // 带 ignore- 前缀的类不转换（如 .ignore-btn）
                '.fixed-size', // 固定尺寸的元素（如logo、按钮最小尺寸）
                '.el-', // 若用ElementUI等UI库，忽略组件样式（避免UI错乱）
            ],

            // 4. 需要转换的CSS属性（*表示所有属性）
            // propList: ['*', '!height'], // 所有属性转vw，除了height（height可手动转vh或固定px）

            // 5. 小于1px的数值不转换（避免极小单位）
            minPixelValue: 1,

            // 6. 是否处理媒体查询中的px（建议关闭，避免媒体查询错乱）
            mediaQuery: false,

            // 7. 自定义转换规则（可选：让高度转vh）
            customFun: (prop, value) => {
                // 若属性是height且值不是100%，转成vh（基于设计图1080px高度）
                if (prop === 'height' && value !== '100%') {
                    return `${(value / 1080) * 100}vh`;
                }
            }
        }
    }
};