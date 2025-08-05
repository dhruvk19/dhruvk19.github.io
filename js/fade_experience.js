document.addEventListener("DOMContentLoaded", function() {
    const grid = document.querySelector('.experiences');
    const gridItems = Array.from(grid.children);
    const columns = window.innerWidth < 800 ? 1 : 2; 
    gridItems.forEach((item, index) => {
        const row = Math.floor(index / columns);
        const delay = row * 200; 
        // console.log(`Item ${index + 1}: Row ${row + 1}, Delay ${delay}ms`);
        item.style.animation = `fade-down 1s ${delay / 1000}s backwards`;
    });
});
