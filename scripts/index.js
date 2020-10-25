const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup__content');

//выбираем поля формы
const form = document.querySelector('.popup__form');
const popupInputTypeName = document.querySelector('.popup__input_type_name');
const popupInputTypeDescription = document.querySelector('.popup__input_type_description');

//выбираем кнопки
const popupCloseButton = document.querySelector('.popup__close-button');
const editButton = document.querySelector('.profile__edit-button');
const submitButton = document.querySelector('.popup__submit-button');

//выбираем имя и описание
const name = document.querySelector('.profile__name');
const description = document.querySelector('.profile__description');

function showPopup() {
    popup.classList.add('popup_opened');
    popupInputTypeName.this.innerHTML`${name.value}`;
    popupInputTypeDescription.this.innerHTML`${description.value}`;
    popup.removeEventListener('click', showPopup)
}
editButton.addEventListener('click', showPopup);

function closePopup() {
    popup.classList.remove('popup_opened')
}
popupCloseButton.addEventListener('click', closePopup);

function submitForm(event) {
    event.preventDefault();
    name.textContent = popupInputTypeName.value;
    description.textContent = popupInputTypeDescription.value;
    closePopup();
}
form.addEventListener('submit', submitForm);


  