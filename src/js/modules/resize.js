export const resize = () => {
  const body = document.body;
  const headerLogotype = document.querySelector('.header__logotype');
  const headerMenu = document.querySelector('.header__menu');
  const hiddenMenuNav = document.querySelector('.hidden-menu__nav');
  const hiddenMenuSoc = document.querySelector('.hidden-menu__soc');
  const headerSocial = document.querySelector('.header__social');
  const hiddenMenuCon = document.querySelector('.hidden-menu__con');
  const headerContacts = document.querySelector('.header__contacts');
  const consultationTitle = document.querySelector('.consultation__title');
  const formSubTitle = document.querySelector('.form__sub-title');
  const formBtn = document.querySelector('.form__btn');
  const ch2 = document.querySelector('.ch-2');
  
  
  const checkWidth = () => {
    if (body.clientWidth <= 1709) {
      hiddenMenuNav.append(headerMenu);
      
    } else {
      headerLogotype.append(headerMenu);
    }

    if (body.clientWidth <= 999.98) {
      hiddenMenuCon.append(headerContacts);
      hiddenMenuSoc.append(headerSocial);
    } else {
      headerLogotype.after(headerContacts);
      headerContacts.after(headerSocial);
    }
    if (body.clientWidth <= 768.98) {
      consultationTitle.innerHTML = 'необходима <span>консультация</span>';
      formSubTitle.innerText = 'И с Вами свяжутся в ближайшее время';
      formBtn.innerText = 'оставить заявку';
    } else {
      consultationTitle.innerText = 'необходима консультация?';
      formSubTitle.innerText = 'С Вами свяжутся в ближайшее время';
      formBtn.innerText = 'отправить';
    }
    if (body.clientWidth <= 425.98) {
      ch2.innerText = 'Каталог';
    } else {
      ch2.innerText = 'Монтаж дымоходов';
    }
  }

  checkWidth();

  window.addEventListener('resize', () => {
    checkWidth();
  });
}

