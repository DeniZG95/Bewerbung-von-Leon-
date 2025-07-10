(() => {
    const hero = document.querySelector(".hero");
    if (!hero) return;
  
    window.addEventListener("scroll", () => {
      const y = window.scrollY;
      const scale = 100 + Math.min(y / 4, 20);
      hero.style.backgroundSize = `${scale}%`;
    });
  })();