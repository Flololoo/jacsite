document.addEventListener('DOMContentLoaded', (event) => {
    const gridItems = document.querySelectorAll('.grid-item');
    const imageLoadPromises = [];
  
    gridItems.forEach(item => {
      const img = item.querySelector('img');
  
      // Create a Promise for each image load
      const imageLoadPromise = new Promise((resolve) => {
        img.onload = () => {
          const aspectRatio = img.naturalWidth / img.naturalHeight;
  
          if (aspectRatio > 1) {
            item.dataset.aspectRatio = '16:9';
          } else {
            item.dataset.aspectRatio = '9:16';
          }
  
          resolve(); // Resolve the Promise when the image is loaded
        };
      });
  
      imageLoadPromises.push(imageLoadPromise);
    });
  
    // Wait for all image load Promises to resolve
    Promise.all(imageLoadPromises).then(() => {
      // All images are loaded, now you can safely execute your code here
      console.log("All images loaded!"); 
      // ... any other code that depends on the images being loaded
    });
























    const tabs = document.querySelectorAll(".tab");
    console.log(tabs);

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetElement = document.querySelector(`[data-category-target="${tab.dataset.category}"]`);

            const grids = document.querySelectorAll(".grid");
            grids.forEach(grid => {
                grid.classList.add("hidden");
            })

            targetElement.classList.remove("hidden");
        })
    });
  });