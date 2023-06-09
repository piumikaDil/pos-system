export default class Customer{
    constructor(cus_id,cus_name,cus_address,cus_salary){
        this._cus_id = cus_id
        this._cus_name = cus_name
        this._cus_address = cus_address
        this._cus_salary = cus_salary
    }

    get cus_id(){
        return _cus_id;
    }

    get cus_name() {
        return _cus_name;
    }

    get cus_address() {
        return _cus_address;
    }

    get cus_salary() {
        return _cus_salary;
    }

    set cus_id(value){
        this._cus_id = value
    }

    set cus_name(value) {
        this._cus_name = value
    }

    set cus_address(value) {
        this._cus_address = value
    }

    set cus_salary(value) {
        this._cus_salary = value
    }
}