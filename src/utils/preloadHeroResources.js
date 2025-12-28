/**
 * 预加载 hero 组件的资源（图片、视频等）并返回进度
 * @param {Function} onProgress - 进度回调函数，参数为进度百分比 (0-100)
 * @returns {Promise} 当所有资源加载完成时 resolve
 */
export function preloadHeroResources(onProgress) {
  return new Promise((resolve) => {
    const imageUrls = new Set();
    const videoUrls = new Set();

    // 等待 hero 组件挂载完成，最多等待 2 秒
    let retryCount = 0;
    const maxRetries = 20;
    
    const tryLoad = () => {
      const heroElement = document.querySelector('.hero');
      if (!heroElement && retryCount < maxRetries) {
        retryCount++;
        setTimeout(tryLoad, 100);
        return;
      }
      
      if (!heroElement) {
        // 如果 hero 组件一直不存在，直接 resolve
        onProgress?.(100);
        resolve();
        return;
      }

      // 1. 获取 hero 组件内的所有 <img> 标签
      heroElement.querySelectorAll("img").forEach(img => {
        if (img.src && !img.src.startsWith('data:') && !img.src.startsWith('blob:')) {
          imageUrls.add(img.src);
        }
      });

      // 2. 获取 hero 组件内的所有 CSS 背景图
      heroElement.querySelectorAll("*").forEach(el => {
        const bg = window.getComputedStyle(el).backgroundImage;
        if (bg && bg !== "none") {
          const match = bg.match(/url\(["']?(.*?)["']?\)/);
          if (match && match[1]) {
            let url = match[1];
            // 过滤掉 data: 和 blob: URL，以及空字符串
            if (url && !url.startsWith('data:') && !url.startsWith('blob:') && url.trim() !== '') {
              imageUrls.add(url);
            }
          }
        }
      });

      // 3. 获取 hero 组件内的所有 <video> 标签
      heroElement.querySelectorAll("video").forEach(video => {
        if (video.src && !video.src.startsWith('data:') && !video.src.startsWith('blob:')) {
          videoUrls.add(video.src);
        }
      });

      const totalResources = imageUrls.size + videoUrls.size;
      
      if (totalResources === 0) {
        onProgress?.(100);
        resolve();
        return;
      }

      let loaded = 0;

      // 更新进度
      const updateProgress = () => {
        loaded++;
        const progress = Math.min(100, Math.round((loaded / totalResources) * 100));
        onProgress?.(progress);
        
        if (loaded === totalResources) {
          onProgress?.(100);
          resolve();
        }
      };

      // 加载图片
      imageUrls.forEach(url => {
        const img = new Image();
        img.onload = updateProgress;
        img.onerror = updateProgress; // 即使加载失败也计入进度
        img.src = url;
      });

      // 加载视频
      videoUrls.forEach(url => {
        const video = document.createElement('video');
        video.preload = 'auto';
        video.onloadeddata = updateProgress;
        video.onerror = updateProgress; // 即使加载失败也计入进度
        video.src = url;
      });
    };
    
    tryLoad();
  });
}

