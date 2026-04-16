function initMobileScrollEffect() {
  const breakpoint = 750;
  const cards = document.querySelectorAll('.recognize-card, .growth__card');
  let observer = null;

  function startObserver() {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 1 },
    );

    cards.forEach((card) => observer.observe(card));
  }

  function stopObserver() {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
    cards.forEach((card) => card.classList.remove('active'));
  }

  function handleResize() {
    if (window.innerWidth <= breakpoint) {
      if (!observer) startObserver();
    } else {
      stopObserver();
    }
  }

  handleResize();
  window.addEventListener('resize', handleResize);
}

document.addEventListener('DOMContentLoaded', initMobileScrollEffect);
