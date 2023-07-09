/* ------ МОДАЛЬНОЕ ОКНО ------ */

const modalOpenButtons = document.querySelectorAll('.modal-open-button');
const modalCloseButton = document.querySelector('.modal__close-button');
const modalWindow = document.querySelector('.modal');

// Открыть модальное окно

modalOpenButtons.forEach(e => e.addEventListener('click', () => {
    modalWindow.classList.add('modal--active');
  }))

// Кнопка "закрыть"

modalCloseButton.addEventListener('click', () => {
  modalWindow.classList.remove('modal--active');
})

// Клавиатура "ESC"

document.addEventListener('keydown', e => {
	if( e.key === "Escape" ) {
    modalWindow.classList.remove('modal--active');
  }
})

// Клик за пределами модального окна

modalWindow.addEventListener('click', e => {
  if (e.target == modalWindow) {
    modalWindow.classList.remove('modal--active');
  }
})


/* ------ COUNTER ------ */

const kidsMinus = document.getElementById("kidsMinus");
const adultMinus = document.getElementById("adultsMinus");
const kidsPlus = document.getElementById("kidsPlus");
const adultPlus = document.getElementById("adultsPlus");
const counters = document.querySelectorAll('.field-counter__input');

adultMinus.addEventListener('click', () => {
  if (counters[0].value > 1) counters[0].value--;
})

adultPlus.addEventListener('click', () => {
  if (counters[0].value < 10) counters[0].value++;
})

kidsMinus.addEventListener('click', () => {
  if (counters[1].value > 0) counters[1].value--;
})

kidsPlus.addEventListener('click', () => {
  if (counters[1].value < 10) counters[1].value++;
})
