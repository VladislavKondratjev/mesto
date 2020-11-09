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
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function showPopupAddCard() {
    popupAddCard.classList.add('popup_opened');
}

function closePopupAddCard() {
    popupAddCard.classList.remove('popup_opened');
}


//function closePopupAddCard() {
  //  popupAddCard.classList.remove('popup_opened')
//}

function submitForm(event) {
    event.preventDefault();
    name.textContent = popupInputTypeName.value;
    description.textContent = popupInputTypeDescription.value;
    closePopup();
}

form.addEventListener('submit', submitForm);
editButton.addEventListener('click', showPopup);
popupCloseButton.addEventListener('click', closePopup);
popupCloseButton.addEventListener('click', closePopupAddCard);

addButton.addEventListener('click', showPopupAddCard);

//спринт 5
//добавляем элементы в темплейт
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const elements = document.querySelector('.elements');

function createCard(data) {
    const elementTemplate = document.querySelector('.element-template').content;
    const elementCard = elementTemplate.cloneNode(true);

    elementCard.querySelector('.element__photo').src = data.link;
    elementCard.querySelector('.element__place').textContent = data.name;
    //elementCard.querySelector('.element__delete').addEventListener('click', event => {
    //    const element = event.target.closest('.element')
    //    if (element) {
    //        element.remove()
    //    }
  //  })

    elements.append(elementCard);

//debugger
//deleteButton.querySelector('element__delete-button').addEventListener('click', event => {
 //   const element = event.target.closest('.element')
 //       if (element) {
 //           element.remove()
//       }
//})
}
initialCards.forEach(createCard);

  