
export class Cart {
    constructor(itemID, qty, total) {
        this._itemID = itemID;
        this._qty = qty;
        this._total = total;
    }

    get itemID() {
        return this._itemID;
    }

    set itemID(value) {
        this._itemID = value;
    }

    get qty() {
        return this._qty;
    }

    set qty(value) {
        this._qty = value;
    }

    get total() {
        return this._total;
    }

    set total(value) {
        this._total = value;
    }

}