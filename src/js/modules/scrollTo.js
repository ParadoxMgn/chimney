import { animate } from './helpers.js';

export const scrollTo = () => {
  document.addEventListener('click', e => {
    let scrollTop = document.documentElement.scrollTop;

    if (e.target.closest('.header__link-call-me')) {
      e.preventDefault();

      const scrollSection = document.querySelector('.consultation');
      const duration = scrollSection.offsetTop < 2000 ? scrollSection.offsetTop / 2 : scrollSection.offsetTop / 4;

      animate({
        duration: duration,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          document.documentElement.scrollTop = scrollTop + (progress * (scrollSection.offsetTop - scrollTop));
        }
      });
    }
    if (e.target.closest('.button-footer')) {
      e.preventDefault();

      animate({
        duration: 1500,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          document.documentElement.scrollTop = (1 - progress) * scrollTop;
        }
      });
    }
  });
};