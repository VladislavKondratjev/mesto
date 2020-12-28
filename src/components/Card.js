export default class Card {
    constructor(data, showPopupOpenImage, cardSelector) {
        this._photo = data.link;
        this._place = data.place;
        this._cardSelector = cardSelector;
        this._showPopupOpenImage = showPopupOpenImage;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);

        return cardElement;
    }

    _setEventListeners() {
        this._like.addEventListener('click', () => {
            this._handleLikeClick();
        });

        this._delete.addEventListener('click', () => {
            this._element.remove();
            this._element = null;
        });

        this._picture.addEventListener('click', () => this._showPopupOpenImage(this._photo, this._place));

    }

    _handleLikeClick() {
        this._like.classList.toggle('element__like-button_type_active');
    }

    generateCard() {
        this._element = this._getTemplate();
        this._like = this._element.querySelector('.element__like-button');
        this._delete = this._element.querySelector('.element__delete-button')
        this._picture = this._element.querySelector('.element__photo');
        this._picture.src = this._photo;
        this._picture.alt = this._place;
        this._element.querySelector('.element__place').textContent = this._place;
        this._setEventListeners();

        return this._element;
    }

}

