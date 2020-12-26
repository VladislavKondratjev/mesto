import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';

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
const popupClassOpenImage = new PopupWithImage(popupOpenImage);
const editForm = new PopupWithForm(popupEdit);
editForm.setEventListeners();

//перенос имени и описания при открытии попапа профиля
function openProfilePopup() {
    const userInfo = new UserInfo(name.value, description.value);
    //userInfo.getUserInfo()
    // popupInputTypeName.value = name.textContent;
    // popupInputTypeDescription.value = description.textContent;
    editForm.open();
    userInfo.getUserInfo();
    editFormValidator.resetValidation();
}
//ф-я редактирования данных профиля
function submitAddCardForm() {
    // name.textContent = popupInputTypeName.value;
    // description.textContent = popupInputTypeDescription.value;
    const userInfo = new UserInfo(name, description);
    userInfo.setUserInfo()
    editForm.close(popupEdit);
}
editButton.addEventListener('click', openProfilePopup);
popupForm.addEventListener('submit', submitAddCardForm);

function createCard(item) {
    const card = new Card(item, () => popupClassOpenImage.open(item.link, item.place), '.element-template');
    return card.generateCard();
}

const addCardForm = new PopupWithForm(popupAddCard, (data) => {
    const cardElement = createCard(data)
    newCardSection.newItem(cardElement);
})

const newCardSection = new Section({
    items: [{
        name: elementAddPlace.value,
        link: elementAddPhoto.value
    }],
    renderer: (item) => {
        const cardElement = createCard(item);
        newCardSection.newItem(cardElement);
    }
}, elements);

//отрисовка карточек
const cardList = new Section({
    items: initialCards,
    renderer: (data) => {
        const card = new Card(data, () => popupClassOpenImage.open(data.link, data.place), '.element-template');
        const elementCard = card.generateCard();
        cardList.addItem(elementCard);
    }
}, elements
);
cardList.renderItems();

function resetAddForm() {
    addFormValidator.resetValidation();
    addForm.reset();
    addCardForm.open(popupAddCard);
}
//вызов валидаоров форм
editFormValidator.enableValidation();
addFormValidator.enableValidation();

//слушатели
addCardForm.setEventListeners();
popupClassOpenImage.setEventListeners();
addButton.addEventListener('click', () => resetAddForm());
popupAddCloseButton.addEventListener('click', () => addCardForm.close(popupAddCard));
popupEditCloseButton.addEventListener('click', () => editForm.close(popupEdit));
popupOpenImageCloseButton.addEventListener('click', () => popupClassOpenImage.close(popupOpenImage));