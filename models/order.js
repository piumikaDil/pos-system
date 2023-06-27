export class Order {

    constructor(orderId, custId, orderDetailArray) {
        this._orderId = orderId;
        this._custId = custId
        this._orderDetailArray = orderDetailArray;

    }

    get orderId() {
        return this._orderId;
    }

    set orderId(value) {
        this._orderId = value;
    }

    get custId() {
        return this._custId;
    }

    set custId(value) {
        this._custId = value;
    }

    get orderDetailArray() {
        return this._orderDetailArray;
    }

    set orderDetailArray(value) {
        this._orderDetailArray = value;
    }



}