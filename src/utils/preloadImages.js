export function preloadImages() {
    return new Promise((resolve) => {
        const imageUrls = new Set();

        // 1. 选取所有 <img> 标签
        document.querySelectorAll("img").forEach(img => {
            if (img.src) imageUrls.add(img.src);
        });

        // 2. 获取所有 CSS 背景图
        const elements = document.querySelectorAll("*");
        elements.forEach(el => {
            const bg = window.getComputedStyle(el).backgroundImage;

            if (bg && bg !== "none") {
                const match = bg.match(/url\(["']?(.*?)["']?\)/);
                if (match && match[1]) {
                    imageUrls.add(match[1]);
                }
            }
        });

        if (imageUrls.size === 0) {
            resolve();
            return;
        }

        let loaded = 0;

        imageUrls.forEach(url => {
            const img = new Image();
            img.onload = img.onerror = () => {
                loaded++;
                if (loaded === imageUrls.size) {
                    resolve();
                }
            };
            img.src = url;
        });
    });
}
