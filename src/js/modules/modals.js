export const modals = () => {
  
  const popup = (block) => {
    let scrollWidth = window.innerWidth - document.body.clientWidth;
    document.querySelector(block).classList.toggle('active');
    document.body.classList.toggle('over-no');
    if (window.innerWidth > 1023) {
      document.body.style.paddingRight = `${scrollWidth}px`;
    }
  };

  document.addEventListener('click', e => {
    if (e.target.closest('.popup_close') || e.target.closest('.popup')) {
      popup('.popup');
    }
    if (e.target.closest('.header__btn-burger') || e.target.closest('.hidden-menu__close')) {
      popup('.hidden-menu');
    }
    if (e.target.closest('.header__btn-like')) {
      document.querySelector('.heart').classList.toggle('hid');   
      document.querySelector('.heart-like').classList.toggle('hid');
    }
  });
};
