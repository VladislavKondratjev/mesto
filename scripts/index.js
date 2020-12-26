import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import {
    initialCards,
    validationConfig,
    popupEdit,
    popupAddCard,
    popupOpenImage,
    popupForm,
    popupInputTypeName,
    popupInputTypeDescription,
    popupEditCloseButton,
    popupAddCloseButton,
    popupOpenImageCloseButton,
    editButton,
    addButton,
    name,
    description,
    elements,
    addForm,
    elementAddPhoto,
    elementAddPlace
} from '../utils/constants.js';

const editFormValidator = new FormValidator(validationConfig, popupForm);
const addFormValidator = new FormValidator(validationConfig, addForm);
const editForm = new PopupWithForm(popupEdit, submitAddCardForm);
const addCardForm = new PopupWithForm(popupAddCard, () => createCard);
const popupClassOpenImage = new PopupWithImage(popupOpenImage);
editForm.setEventListeners();
addCardForm.setEventListeners();
popupClassOpenImage.setEventListeners();

//перенос имени и описания при открытии попапа профиля
function openProfilePopup() {
    popupInputTypeName.value = name.textContent;
    popupInputTypeDescription.value = description.textContent;
    editForm.open(popupEdit);
    editFormValidator.resetValidation();
}

//ф-я редактирования данных профиля
function submitAddCardForm() {
    name.textContent = popupInputTypeName.value;
    description.textContent = popupInputTypeDescription.value;
    editForm.close(popupEdit);
}

//ф-я просмотра фото
function showPopupOpenImage(data) {
    popupClassOpenImage.open(data.link, data.place);
}

function createCard(data) {
    const card = new Card(data, () => popupClassOpenImage.open(data.link, data.place), '.element-template');
    const elementCard = card.generateCard();
    elements.prepend(elementCard);
    console.log(data)
}

//Функия добавления карточки
addForm.addEventListener('submit', () => {
    const data = {
        link: elementAddPhoto.value,
        place: elementAddPlace.value
    };
    addForm.reset();
    addCardForm.close(popupAddCard)
    createCard(data);

});
//отрисовка карточек
function render() {
    initialCards.forEach((item) => {
        createCard(item, showPopupOpenImage, '.element-template');
    });
}
render();

function resetAddForm() {
    addFormValidator.resetValidation();
    addForm.reset();
    addCardForm.open(popupAddCard);
}
//вызов валидаоров форм
editFormValidator.enableValidation();
addFormValidator.enableValidation();

//слушатели
popupForm.addEventListener('submit', submitAddCardForm);
editButton.addEventListener('click', openProfilePopup);
addButton.addEventListener('click', () => resetAddForm());
popupAddCloseButton.addEventListener('click', () => addCardForm.close(popupAddCard));
popupEditCloseButton.addEventListener('click', () => editForm.close(popupEdit));
popupOpenImageCloseButton.addEventListener('click', () => popupClassOpenImage.close(popupOpenImage));