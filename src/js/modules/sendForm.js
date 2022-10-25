import { validate } from './validateForm.js';

export const sendForm = () => {
  const form = document.querySelectorAll('form');

  const getForm = (form) => {
    const inputs = form.querySelectorAll('input');
    const btn = form.querySelector('button');

    const submitForm = (form, e) => {
      if (validate(inputs, form)) {
        let scrollWidth = window.innerWidth - document.body.clientWidth;
        document.body.classList.toggle('over-no');
        if (window.innerWidth > 1023) {
          document.body.style.paddingRight = `${scrollWidth}px`;
        }
        document.querySelector('.popup').classList.add('active');
        document.querySelector('.name').innerHTML = document.querySelector('.input-name').value;
        document.querySelector('.tel-phone').innerHTML = document.querySelector('.input-phone').value;
        inputs.forEach(item => item.value = "");
      }
    };

    try {
      if (!form) {
        throw new Error('Форма не найдена!');
      }

      form.addEventListener('click', e => {
        if (e.target == btn) {
          validate(inputs, form);
        }
      });

      form.addEventListener('submit', e => {
        e.preventDefault();

        submitForm(form, e);
      });
    } catch (error) {
      alert(error.message);
    }
  };

  form.forEach(item => {
    getForm(item);
  });
};