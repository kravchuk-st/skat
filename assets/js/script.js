const btns = [...document.querySelectorAll('button.btn')].filter((el) => Object.keys(el.dataset).includes('modal'));
const modal = document.querySelector('#modal');
const modalOverlay = modal.querySelector('.modal-overlay');
const modalContainer = modal.querySelector('.modal__container');
const modalFormBody = modal.querySelector('.form__body');
const formSubject = modal.querySelector('input[name="form_subject"]');
const telSelector = document.querySelector('.contacts__form input[type="tel"]');
const telSelectorModal = document.querySelector('.modal__form input[type="tel"]');
const textSelectorModal = document.querySelector('.modal__form input[type="text"]');


btns.forEach((el) => {
  el.addEventListener('click', (e) => {
    formSubject.value = `${e.target.dataset.modal}`;
    if (e.target.dataset.modal === 'Задать вопрос') {
      textSelectorModal.style.display = 'block';
    } else {
      textSelectorModal.style.display = 'none';
    }
    showModal();
  });
})

modalOverlay.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    modalOverlay.classList.remove('modal-overlay--visible');
    modalContainer.classList.remove('modal--visible');
    telSelectorModal.value = '';
  }
});

const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector);
inputMask.mask(telSelectorModal);

let validateForm = function(selector, inputTel) {
  new JustValidate(selector, {
    rules: {
      tel: {
        required: true,
        function: () => {
          const number = inputTel.inputmask.unmaskedvalue();
          return number.length === 10;
        }
      }
    },
    messages: {
      tel: {
        required: " ",
        function: " ",
      }
    }
  })
}

validateForm('.contacts__form', telSelector);
validateForm('.modal__form', telSelectorModal);

function showModal() {
  modalContainer.classList.add('modal--visible');
  modalOverlay.classList.add('modal-overlay--visible');
}
