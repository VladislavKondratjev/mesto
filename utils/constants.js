//массив исходных данных
export const initialCards = [
    {
        place: 'Я и JS',
        link: 'https://sun9-76.userapi.com/bdz_-dS1jkT59AA17nnzdnPcPjOF1JBAu6yjMg/RhBfCd6i0c4.jpg'
    },
    {
        place: 'Адаптив',
        link: 'https://i.forfun.com/j95a6ukr.jpeg'
    },
    {
        place: 'Сдал работу с первого раза',
        link: 'https://memepedia.ru/wp-content/uploads/2019/03/u-suka-10.jpg'
    },
    {
        place: 'Фронтендек',
        link: 'https://memepedia.ru/wp-content/uploads/2019/10/chipseki-mem.png'
    },
    {
        place: 'Как работает JavaScript',
        link: 'https://iknowyourmeme.files.wordpress.com/2016/12/2bb6dc0db7452e1.png'
    },
    {
        place: 'Байкал',
        link: 'https://sun9-75.userapi.com/Du8H7YDwDV3fRVRqrm47IONr9jJB0VPqE3Ejew/-okoCzFyrtA.jpg'
    }
];

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
export const popupInputTypeName = document.querySelector('.popup__input_type_name');
export const popupInputTypeDescription = document.querySelector('.popup__input_type_description');
//выбираем кнопки
export const popupEditCloseButton = popupEdit.querySelector('.popup__close-button');
export const popupAddCloseButton = popupAddCard.querySelector('.popup__close-button');
export const popupOpenImageCloseButton = popupOpenImage.querySelector('.popup__close-button');
export const editButton = document.querySelector('.profile__edit-button');
export const addButton = document.querySelector('.profile__add-button');
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
