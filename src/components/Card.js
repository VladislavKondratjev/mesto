export default class Card {
    constructor(data, cardSelector, _id, { showPopupOpenImage, handleLikeClick, handleDeleteClick }) {
        this._photo = data.link;
        this._name = data.name;
        this._cardId = data._id;
        this._likesArray = data.likes;
        this._ownerId = data.owner._id;
        this._cardSelector = cardSelector;
        this._userId = _id;
        this._showPopupOpenImage = showPopupOpenImage;
        this._handleLikeClick = handleLikeClick;
        this._handleDeleteClick = handleDeleteClick;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);

        return cardElement;
    }

    _isLiked() {
        return this._like.classList.contains('element__like-button_type_active')
    }

    _isOwner() {
        if (this._ownerId === this._userId) {
            return true
        }
        this._delete.classList.remove('element__delete-button');
    }

    _setEventListeners() {
        this._like.addEventListener('click', () => {
            this._handleLikeClick(this._cardId, this._isLiked());
        });

        this._delete.addEventListener('click', () => {
            this._handleDeleteClick(this._cardId)
        });

        this._picture.addEventListener('click', () => this._showPopupOpenImage(this._photo, this._name));

    }

    _cardIsLikedByCurrentUser() {
        for (let i = 0; i < this._likesArray.length; i++) {
            if (this._likesArray[i]._id === this._userId) {
                return true
            }
        }
        return false;
    }

    _likesCounter() {
        if (this._likesArray.length !== 0) {
            this._likes.textContent = this._likesArray.length;
        } else {
            this._likes.textContent = '';
        }
    }

    setLikes(likesArray) {
        this._likes.textContent = likesArray.length;
        this._likesArray = likesArray;

        if (this._cardIsLikedByCurrentUser(this._userId)) {
            this._like.classList.add('element__like-button_type_active');
        } else {
            this._like.classList.remove('element__like-button_type_active');
        }
    }

    remove() {
        this._element.remove();
        this._element = null;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._like = this._element.querySelector('.element__like-button');
        this._likes = this._element.querySelector('.element__likes');
        this._delete = this._element.querySelector('.element__delete-button');
        this._picture = this._element.querySelector('.element__photo');
        this._picture.src = this._photo;
        this._picture.alt = this._name;
        this._element.querySelector('.element__place').textContent = this._name;
        this._setEventListeners();
        this._likesCounter();
        this._isOwner()
        this.setLikes(this._likesArray);
        return this._element;
    }
}

