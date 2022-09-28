// modals
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
    showModal(modalContainer, modalOverlay);
  });
})

modalOverlay.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    enableScroll();
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

function showModal(container, overlay) {
  container.classList.add('modal--visible');
  overlay.classList.add('modal-overlay--visible');
  disableScroll();
}

function disableScroll() {
  document.body.style.overflow = "hidden";
  document.body.style.userSelect = "none";
}

function enableScroll() {
  document.body.style.overflow = "auto";
  document.body.style.userSelect = "auto";
}

// portfolio section
const portfolioBlock = document.querySelector('.portfolio');
const portfolioBtn = portfolioBlock.querySelector('.portfolio__btn');
const portfolioList = portfolioBlock.querySelector('.portfolio__list');
const porfolioItems = portfolioBlock.querySelectorAll('.portfolio__card:not(:nth-child(-n+3))');

portfolioBtn.addEventListener('click', () => {
  portfolioList.classList.toggle('portfolio__list_active');
  if (portfolioList.classList.contains('portfolio__list_active')) {
    portfolioBtn.innerText = 'Скрыть';
    porfolioItems.forEach(el => el.style.maxHeight = 285 + "px");
  } else {
    portfolioBtn.innerText = 'Смотреть ещё';
    porfolioItems.forEach(el => el.style.maxHeight = 0 + "px");
  }
});

// portfolio modal
const cardModal = document.getElementById('modal-card');
const cardModalOverlay = cardModal.querySelector('.modal-overlay');
const cardModalContainer = cardModal.querySelector('.modal__container');
const porfolioItemsAll = portfolioBlock.querySelectorAll('.portfolio__card');

porfolioItemsAll.forEach((el) => {
  el.addEventListener('click', (e) => {
    const id = e.currentTarget.dataset.cardId;
    showModal(cardModalContainer, cardModalOverlay);
  });
})

cardModalOverlay.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    enableScroll();
    cardModalOverlay.classList.remove('modal-overlay--visible');
    cardModalContainer.classList.remove('modal--visible');
  }
});
