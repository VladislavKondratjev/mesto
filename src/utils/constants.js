//выбираем элементы формы
export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_type_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'error'
}

export const ESC_KEY = 'Escape';
//выбираем попапы
export const popupEdit = document.querySelector('.popup_type_edit');
export const popupAddCard = document.querySelector('.popup_type_add-card');
export const popupOpenImage = document.querySelector('.popup_type_image');
export const popupForm = document.querySelector('.popup__form');
export const updateAvatarForm = document.querySelector('.update-avatar-form');
export const popupAvatar = document.querySelector('.popup_type_update-avavtar');
export const popupConfirmForm = document.querySelector('.popup_type_confirm');

//инпуты полей ввода
export const popupInputTypeName = document.querySelector('.popup__input_type_name');
export const popupInputTypeDescription = document.querySelector('.popup__input_type_description');
export const popupInputTypeAvatar = document.querySelector('.popup__input_type_avatar');

//выбираем кнопки
export const popupEditCloseButton = popupEdit.querySelector('.popup__close-button');
export const popupAddCloseButton = popupAddCard.querySelector('.popup__close-button');
export const popupOpenImageCloseButton = popupOpenImage.querySelector('.popup__close-button');
export const popupConfirmCloseButton = popupConfirmForm.querySelector('.popup__close-button');
export const popupAvatarCloseButton = document.querySelector('.popup__close-button');

export const editButton = document.querySelector('.profile__edit-button');
export const addButton = document.querySelector('.profile__add-button');
export const avatarPic = document.querySelector('.profile__avatar');
export const button = document.querySelector('.popup__submit-button');
export const deleteButton = document.querySelector('.element__delete-button')
//выбираем имя и описание профиля
export const name = document.querySelector('.profile__name');
export const description = document.querySelector('.profile__description');
//выбираем грид и форму 
export const elements = document.querySelector('.elements');
export const addForm = document.querySelector('.add-element-form');
//выбираем элементы карточки для открытия на весь экран
export const photo = document.querySelector('.popup__image');
export const place = document.querySelector('.popup__caption');
//выбираем инпуты попапа добавления карточки
export const elementAddPhoto = addForm.querySelector('.popup__input_type_photo');
export const elementAddPlace = addForm.querySelector('.popup__input_type_place');
export const template = '.element-template';