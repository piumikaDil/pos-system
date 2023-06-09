export default class Item {
    constructor(item_code, item_name, item_price, item_qty) {
        this._item_code = item_code
        this._item_name = item_name
        this._item_price = item_price
        this._item_qty = item_qty
    }

    get item_code() {
        return _item_code;
    }

    get item_name() {
        return _item_name;
    }

    get item_price() {
        return _item_price;
    }

    get item_qty() {
        return _item_qty;
    }

    set item_code(item_code) {
        this._item_code = item_code
    }

    set item_name(item_name) {
        this._item_name = item_name
    }

    set item_price(item_price) {
        this._item_price = item_price
    }

    set item_qty(item_qty) {
        this._item_qty = item_qty
    }
}