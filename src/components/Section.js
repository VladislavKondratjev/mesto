export default class Section {
    constructor(renderer, container) {
        this._renderer = renderer;
        this._container = container;
    }

    renderItems(cards) {
        cards.forEach((items) => {
            this._renderer(items);
        });
    }

    addItem(element) {
        this._container.append(element)
    }

    newItem(element) {
        this._container.prepend(element)
    }

}