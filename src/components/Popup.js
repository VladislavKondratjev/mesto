import { ESC_KEY } from '../utils/constants.js';

export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._closePopupEsc = this._closePopupEsc.bind(this);
        this._closePopupOverlay = this._closePopupOverlay.bind(this);
        this.closeButton = document.querySelector('.popup__close-button');
    }

    setEventListeners() {
        this.closeButton.addEventListener('click', () => this.close());
    }

    open() {
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown', this._closePopupEsc);
        this._popupSelector.addEventListener('mousedown', this._closePopupOverlay);
    }

    close() {
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._closePopupEsc);
        this._popupSelector.removeEventListener('mousedown', this._closePopupOverlay);
    }

    _closePopupEsc(evt) {
        if (evt.key === ESC_KEY) {
            this.close();
        }
    }

    _closePopupOverlay(evt) {
        if (evt.target.classList.contains('popup')) {
            this.close();
        }
    }
}