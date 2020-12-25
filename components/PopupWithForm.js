import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, inputList, formValues) {
        super(popupSelector);
        this._inputList = inputList;
        this._formValues = formValues;
    }

    setEventListeners() {
        super.setEventListeners()
    }

    _getInputValues() {
        // достаём все элементы полей
        this._inputList = this._element.querySelectorAll('.form__input');

        // создаём пустой объект
        this._formValues = {};

        // добавляем в этот объект значения всех полей
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });

        // возвращаем объект значений
        return this._formValues;
    }
}