// //выбираем попапы
const popupEdit = document.querySelector('.popup_type_edit');
const popupAddCard = document.querySelector('.popup_type_add-card');
const popupOpenImage = document.querySelector('.popup_type_image');
//выбираем форму редактирования профиля и поля формы
const form = document.querySelector('.popup__form');
const popupInputTypeName = document.querySelector('.popup__input_type_name');
const popupInputTypeDescription = document.querySelector('.popup__input_type_description');
//выбираем кнопки
const popupEditCloseButton = popupEdit.querySelector('.popup__close-button');
const popupAddCloseButton = popupAddCard.querySelector('.popup__close-button');
const popupOpenImageCloseButton = popupOpenImage.querySelector('.popup__close-button');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
//выбираем имя и описание
const name = document.querySelector('.profile__name');
const description = document.querySelector('.profile__description');
//выбираем грид и форму 
const elements = document.querySelector('.elements');
const addForm = document.querySelector('.add-element-form');
const elementTemplate = document.querySelector('.element-template').content;
//массив исходных данных
const initialCards = [
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
//выбираем элементы карточки для открытия на весь экран
const photo = document.querySelector('.popup__image');
const place = document.querySelector('.popup__caption');
//выбираем инпуты попапа добавления карточки
const elementAddPhoto = addForm.querySelector('.popup__input_type_photo');
const elementAddPlace = addForm.querySelector('.popup__input_type_place');
//ф-я откртия попапов
function showPopup(popup) {
    popup.classList.add('popup_opened');
    popupInputTypeName.value = name.textContent;
    popupInputTypeDescription.value = description.textContent;
    document.addEventListener('keydown', keyHandler);
    popup.addEventListener('mousedown', closePopupOverlay);
    resetValidation(validationConfig);
}
//ф-я закрытия попапов
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', keyHandler);
    popup.addEventListener('mousedown', closePopupOverlay);
}

//ф-я редактирования данных профиля
function submitForm(event) {
    event.preventDefault();
    name.textContent = popupInputTypeName.value;
    description.textContent = popupInputTypeDescription.value;
    closePopup(popupEdit);
}
//ф-я добавления карточек из массива
function createCard(data) {
    const elementCard = elementTemplate.cloneNode(true);
    const elementPhoto = elementCard.querySelector('.element__photo');
    const elementPlace = elementCard.querySelector('.element__place');
    const elementDeleteButton = elementCard.querySelector('.element__delete-button');
    const elementLikeButton = elementCard.querySelector('.element__like-button');
    
    elementPhoto.src = data.link;
    elementPlace.textContent = data.place;

    elementDeleteButton.addEventListener('click', event => {
        const element = event.target.closest('.element')
        
        if (element) {
            element.remove()
        }
    })
    
    elementLikeButton.addEventListener('click', event => {
        event.target.classList.toggle('element__like-button_type_active');    
    })
    
    elementPhoto.addEventListener('click', () => showPopupOpenImage(data.link, data.place));

    return elementCard;
}
//ф-я просмотра фото
function showPopupOpenImage(src, alt) {
    photo.src = src;
    photo.alt = alt;
    place.textContent = alt;
    showPopup(popupOpenImage);
}
//Функия добавления карточки
addForm.addEventListener('submit', event => {
    event.preventDefault();
    const data = {
        link: elementAddPhoto.value,
        place: elementAddPlace.value
    }
    
    addForm.reset();        
    closePopup(popupAddCard);
    elements.prepend(createCard(data));
});
//отрисовка карточек
function render() {
    initialCards.forEach(data => {
        const elementCard = createCard(data);
        elements.append(elementCard);
    });
}
render();
//закрытие попапа по нажтию на ESC
function keyHandler(evt) {
    if (evt.key === 'Escape') {
        closePopup(document.querySelector('.popup_opened'));
    }
}
//зыкрытие по клику на оверлей
function closePopupOverlay(evt) {
    if (evt.target.classList.contains('popup')) {
    closePopup(document.querySelector('.popup_opened'))
  }
}
//слушатели
form.addEventListener('submit', submitForm);
editButton.addEventListener('click', () => showPopup(popupEdit));
addButton.addEventListener('click', () => showPopup(popupAddCard));
popupAddCloseButton.addEventListener('click', () => closePopup(popupAddCard));
popupEditCloseButton.addEventListener('click', () =>  closePopup(popupEdit));
popupOpenImageCloseButton.addEventListener('click', () => closePopup(popupOpenImage));