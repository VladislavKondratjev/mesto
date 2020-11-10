const popup = document.querySelector('.popup_type_edit');
const popupAddCard = document.querySelector('.popup_type_add-card');
//const popup = document.querySelector('.popup_type_image');
const popupContent = document.querySelector('.popup__content');

//выбираем поля формы
const form = document.querySelector('.popup__form');
const popupInputTypeName = document.querySelector('.popup__input_type_name');
const popupInputTypeDescription = document.querySelector('.popup__input_type_description');

//выбираем кнопки
const popupCloseButton = document.querySelector('.popup__close-button');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const deleteButton = document.querySelector('.element__delete-button');

//выбираем имя и описание
const name = document.querySelector('.profile__name');
const description = document.querySelector('.profile__description');


function showPopup() {
    popup.classList.add('popup_opened');
    popupInputTypeName.value = name.textContent;
    popupInputTypeDescription.value = description.textContent;
  //  popupAddCard.classList.add('popup_opened');
}

function closePopup() {
    popup.classList.remove('popup_opened');
    popupAddCard.classList.remove('popup_opened');
}

function submitForm(event) {
    event.preventDefault();
    name.textContent = popupInputTypeName.value;
    description.textContent = popupInputTypeDescription.value;
    closePopup();
}

form.addEventListener('submit', submitForm);
editButton.addEventListener('click', showPopup);
popupCloseButton.addEventListener('click', closePopup);
addButton.addEventListener('click', showPopupAddCard);

//спринт 5
//добавляем элементы в темплейт
function showPopupAddCard() {
    popupAddCard.classList.add('popup_opened');
}

const initialCards = [
    {
        place: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        place: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        place: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        place: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        place: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        place: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const elements = document.querySelector('.elements');
const element = document.querySelector('.element');

const elementPlace = document.querySelector('.popup__input_type_place');
const elementPhoto = document.querySelector('.popup__input_type_photo');

function createCard() {
    const elementTemplate = document.querySelector('.element-template').content;
    const elementCard = elementTemplate.cloneNode(true);

    elementCard.querySelector('.element__photo').src = elementPhoto.value;
    elementCard.querySelector('.element__place').textContent = elementPlace.value;
    
    popupAddCard.addEventListener('submit', event => {
        event.preventDefault();
        createCard();
        closePopup(popupAddCard);
    });
    elements.prepend(elementCard);

}

function addCards(data) {
    const elementTemplate = document.querySelector('.element-template').content;
    const elementCard = elementTemplate.cloneNode(true);

    elementCard.querySelector('.element__photo').src = data.link;
    elementCard.querySelector('.element__place').textContent = data.place;
    
    popupAddCard.addEventListener('submit', event => {
        event.preventDefault();
        createCard(data);
        closePopup(popupAddCard);
    });

    elements.append(elementCard);

}
initialCards.forEach(addCards);

  