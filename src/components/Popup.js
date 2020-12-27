import { ESC_KEY } from '../../src/utils/constants.js';

export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._closePopupEsc = this._closePopupEsc.bind(this);
        this._closePopupOverlay = this._closePopupOverlay.bind(this);
    }

    setEventListeners() {
        document.querySelector('.popup__close-button').addEventListener('click', () => this.close());
        this._closePopupOverlay();
    }

    open() {
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown', this._closePopupEsc);
        this._popupSelector.addEventListener('mousedown', this._closePopupOverlay);
    }

    close() {
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._closePopupEsc);
    }

    _closePopupEsc(evt) {
        if (evt.key === ESC_KEY) {
            this.close(document.querySelector('.popup_opened'));
        }
    }

    _closePopupOverlay() {
        this._popupSelector.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('popup')) {
                this.close();
            }
        });
    }
}