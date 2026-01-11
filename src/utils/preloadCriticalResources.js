/**
 * 预加载 grology 组件的关键资源（首屏可见的资源）
 * 只加载首屏必须的资源，其他资源在后台继续加载
 * @param {Function} onProgress - 进度回调函数，参数为进度百分比 (0-100)
 * @returns {Promise} 当关键资源加载完成时 resolve
 */
export function preloadCriticalResources(onProgress) {
  return new Promise((resolve) => {
    const imageUrls = new Set();
    const videoUrls = new Set();

    // 等待 grology 组件挂载完成
    let retryCount = 0;
    const maxRetries = 20;
    
    const tryLoad = () => {
      const grologyElement = document.querySelector('.grology');
      if (!grologyElement && retryCount < maxRetries) {
        retryCount++;
        setTimeout(tryLoad, 100);
        return;
      }
      
      if (!grologyElement) {
        // 如果 grology 组件一直不存在，直接 resolve
        onProgress?.(100);
        resolve();
        return;
      }

      // 只获取首屏可见区域的关键资源
      // 1. 获取 grology-origin 部分的资源（首屏，虽然视频被注释了，但可能有背景图）
      const originContainer = grologyElement.querySelector('.grology-origin');
      if (originContainer) {
        // 获取首屏的图片资源
        originContainer.querySelectorAll("img").forEach(img => {
          if (img.src && !img.src.startsWith('data:') && !img.src.startsWith('blob:')) {
            imageUrls.add(img.src);
          }
        });

        // 获取首屏的 CSS 背景图（只获取直接子元素和容器本身的背景图，避免获取太多）
        const bg = window.getComputedStyle(originContainer).backgroundImage;
        if (bg && bg !== "none") {
          const match = bg.match(/url\(["']?(.*?)["']?\)/);
          if (match && match[1]) {
            let url = match[1];
            if (url && !url.startsWith('data:') && !url.startsWith('blob:') && url.trim() !== '') {
              imageUrls.add(url);
            }
          }
        }
      }

      // 2. 获取 grology-water 部分的首屏资源（第一个可见的视频和背景）
      const waterContainer = grologyElement.querySelector('.grology-water');
      if (waterContainer) {
        // 只获取第一个可见的视频（climate video）- 这是首屏的关键视频
        const climateVideo = waterContainer.querySelector('.water-bg-video video');
        if (climateVideo && climateVideo.src && !climateVideo.src.startsWith('data:') && !climateVideo.src.startsWith('blob:')) {
          videoUrls.add(climateVideo.src);
        }

        // 获取 water-bg-video 的背景图
        const waterBgVideo = waterContainer.querySelector('.water-bg-video');
        if (waterBgVideo) {
          const bg = window.getComputedStyle(waterBgVideo).backgroundImage;
          if (bg && bg !== "none") {
            const match = bg.match(/url\(["']?(.*?)["']?\)/);
            if (match && match[1]) {
              let url = match[1];
              if (url && !url.startsWith('data:') && !url.startsWith('blob:') && url.trim() !== '') {
                imageUrls.add(url);
              }
            }
          }
        }

        // 获取 water-cloud-1 的背景图（首屏可见）
        const waterCloud1 = waterContainer.querySelector('.water-cloud-1');
        if (waterCloud1) {
          const bg = window.getComputedStyle(waterCloud1).backgroundImage;
          if (bg && bg !== "none") {
            const match = bg.match(/url\(["']?(.*?)["']?\)/);
            if (match && match[1]) {
              let url = match[1];
              if (url && !url.startsWith('data:') && !url.startsWith('blob:') && url.trim() !== '') {
                imageUrls.add(url);
              }
            }
          }
        }
      }

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

      // 加载视频（只加载关键帧，不需要完整加载）
      videoUrls.forEach(url => {
        const video = document.createElement('video');
        video.preload = 'metadata'; // 只加载元数据，不加载完整视频
        video.onloadedmetadata = updateProgress; // 使用 loadedmetadata 而不是 loadeddata
        video.onerror = updateProgress; // 即使加载失败也计入进度
        video.src = url;
      });
    };
    
    tryLoad();
  });
}

