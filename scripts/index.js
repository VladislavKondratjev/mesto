import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import { initialCards, validationConfig, ESC_KEY } from '../utils/constants.js';

//выбираем попапы
const popupEdit = document.querySelector('.popup_type_edit');
const popupAddCard = document.querySelector('.popup_type_add-card');
const popupOpenImage = document.querySelector('.popup_type_image');
//выбираем форму редактирования профиля и поля формы
const popupform = document.querySelector('.popup__form');
const popupInputTypeName = document.querySelector('.popup__input_type_name');
const popupInputTypeDescription = document.querySelector('.popup__input_type_description');
//выбираем кнопки
const popupEditCloseButton = popupEdit.querySelector('.popup__close-button');
const popupAddCloseButton = popupAddCard.querySelector('.popup__close-button');
const popupOpenImageCloseButton = popupOpenImage.querySelector('.popup__close-button');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const submitAddCardButton = popupAddCard.querySelector('.popup__submit-button')
//выбираем имя и описание профиля
const name = document.querySelector('.profile__name');
const description = document.querySelector('.profile__description');
//выбираем грид и форму 
const elements = document.querySelector('.elements');
const addForm = document.querySelector('.add-element-form');
// const elementTemplate = document.querySelector('.element-template').content;
//выбираем элементы карточки для открытия на весь экран
const photo = document.querySelector('.popup__image');
const place = document.querySelector('.popup__caption');
//выбираем инпуты попапа добавления карточки
const elementAddPhoto = addForm.querySelector('.popup__input_type_photo');
const elementAddPlace = addForm.querySelector('.popup__input_type_place');


//ф-я откртия попапов
function showPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', keyHandler);
    popup.addEventListener('mousedown', closePopupOverlay);
}

//ф-я закрытия попапов
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', keyHandler);
    popup.removeEventListener('mousedown', closePopupOverlay);
}

//перенос имени и описания при открытии попапа профиля
function openProfilePopup() {
    popupInputTypeName.value = name.textContent;
    popupInputTypeDescription.value = description.textContent;
    showPopup(popupEdit);
}

//ф-я редактирования данных профиля
function submitAddCardForm() {
    name.textContent = popupInputTypeName.value;
    description.textContent = popupInputTypeDescription.value;
    closePopup(popupEdit);
}

//ф-я просмотра фото
function showPopupOpenImage(src, alt) {
    photo.src = src;
    photo.alt = alt;
    place.textContent = alt;
    showPopup(popupOpenImage);
}


function createCard(data, cardSelector, popupOpenImage) {
    const card = new Card(data, cardSelector, popupOpenImage);
    const elementCard = card.generateCard();
    elements.prepend(elementCard);
}

//Функия добавления карточки
addForm.addEventListener('submit', () => {
    const data = {
        link: elementAddPhoto.value,
        place: elementAddPlace.value
    }
    addForm.reset();        
    closePopup(popupAddCard);
    createCard(data, '.element-template', showPopupOpenImage);
});



//отрисовка карточек
function render() {
    initialCards.forEach((item) => {
        createCard(item, '.element-template', showPopupOpenImage);
    });
}
render();


//закрытие попапа по нажтию на ESC
function keyHandler(evt) {
    if (evt.key === ESC_KEY) {
        closePopup(document.querySelector('.popup_opened'));
    }
}

//зыкрытие по клику на оверлей
function closePopupOverlay(evt) {
    if (evt.target.classList.contains('popup')) {
        closePopup(evt.target);
    }
}

const editFormValidator = new FormValidator(validationConfig, popupform);
editFormValidator.enableValidation();
const addFormValidator = new FormValidator(validationConfig, addForm);
addFormValidator.enableValidation();

//слушатели
popupform.addEventListener('submit', submitAddCardForm);
editButton.addEventListener('click', openProfilePopup);
addButton.addEventListener('click', () => showPopup(popupAddCard));
popupAddCloseButton.addEventListener('click', () => closePopup(popupAddCard));
popupEditCloseButton.addEventListener('click', () =>  closePopup(popupEdit));
popupOpenImageCloseButton.addEventListener('click', () => closePopup(popupOpenImage));