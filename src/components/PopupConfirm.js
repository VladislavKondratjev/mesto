import Popup from './Popup.js';

export default class PopupConfirm extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._confirmButton = document.querySelector('.delete-card')
    }

    setEventListeners() {
        super.setEventListeners();
        this._confirmButton.addEventListener('click', () => this._handleSubmitCallback())
    }

    setSubmitAction(submitAction) {
        this._handleSubmitCallback = submitAction;
    }

}