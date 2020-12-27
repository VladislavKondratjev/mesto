export default class Section {
    constructor({ items, renderer }, container) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._container = container;
    }

    renderItems() {
        this._renderedItems.forEach((items) => {
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