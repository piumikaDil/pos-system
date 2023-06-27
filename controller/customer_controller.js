import { saveCustomerDB, getCustomerDB, updateCustomer, deleteCustomer } from "../database/db.js";
import Customer from "../models/customer.js";


export class CustomerController {
    constructor() {

        $(".cus-btn-save").click(this.handleSaveCustomerValidation.bind(this));
        $(".cus-btn-update").click(this.handleUpdateCustomer.bind(this));
        $(".cus-btn-delete").click(this.handleDeleteCustomer.bind(this));
        $(".cus-btn-search").click(this.search.bind(this))
            
        
        this.handleLoadCustomer();
        this.tableSelectedRaw();

        $("#id").on("keydown", function (event) {
            if (event.key === "Enter") {
                $("#name").focus();
            }
        });

        $("#name").on("keydown", function (event) {
            if (event.key === "Enter") {
                $("#address").focus();
            }
        });

        $("#address").on("keydown", function (event) {
            if (event.key === "Enter") {
                $("#salary").focus();
            }
        });

        $("#salary").on("keydown", function (event) {
            if (event.key === "Enter") {
                $(".cus-btn-save").focus();
            }
        });


    }

    search(){
        let cusId = $("#search").val();
        let response = this.customerSearch(cusId);
        console.log(response);
        if (response) {
            $("#txtId").val(response.id);
            $("#txtName").val(response.name);
            $("#txtAddress").val(response.address);
        } else {
            alert("This customer not exists yet!");
        }
    }

    customerSearch(cId) {
        for (let i = 0; i < getCustomerDB.length; i++) {
            if (getCustomerDB[i].cus_id == cId) {
                return getCustomerDB[i];
            }
        }
    }

    handleLoadCustomer() {
        let customer_data_arr = getCustomerDB();
        $('#customer-table').empty();

        customer_data_arr.map((result, index) => {
            const row = "<tr>" + "<td>" +
                result._cus_id +
                "</td>" + "<td>" +
                result._cus_name +
                "</td>" + "<td>" +
                result._cus_address +
                "</td>" + "<td>" +
                result._cus_salary +
                "</td>" + "</tr>";
            $("#customer-table").append(row);
        });

    }

    handleSaveCustomerValidation() {

        var id = $("#id").val();
        var name = $("#name").val();
        var address = $("#address").val();
        var salary = $("#salary").val();

        const regexNo = /^(0|[1-9]\d*)$/
        const regexNumber = /^\d+$/;
        if (!regexNumber.test(id)) {
            alert("Invalid Id");
        } else if (!name) {
            alert("Invalid Name");
        } else if (!address) {
            alert("Invalid Address");
        } else if (!regexNo.test(salary)) {
            alert("Invalid Salary");
        } else {
            this.handleSaveCustomer();
        }

    }


    handleSaveCustomer() {
        console.log("Handel save");
        var customer_id = $("#id").val();
        var customer_first_name = $("#name").val();
        var customer_last_name = $("#address").val();
        var customer_address = $("#salary").val();

        let new_customer = new Customer(customer_id, customer_first_name, customer_last_name, customer_address);
        saveCustomerDB(new_customer);
        this.clearTextField();

        this.handleLoadCustomer();

    }



    handleUpdateCustomer() {
        let id = $("#id").val();
        let name = $("#name").val();
        let address = $("#address").val();
        let salary = $("#salary").val();

        let customer = new Customer(id, name, address, salary);
        updateCustomer(customer);
        this.handleLoadCustomer();
        this.clearTextField();

    }


    handleDeleteCustomer() {
        // console.log("Handel Delete");

        let id = $("#id").val();
        let name = $("#name").val();
        let address = $("#address").val();
        let salary = $("#salary").val();

        let customer = new Customer(id, name, address, salary);
        deleteCustomer(customer);
        this.handleLoadCustomer();
        this.clearTextField();

    }


    tableSelectedRaw() {
        $(".cus-table").on("click", "tr", function (event) {
            let id = $(this).children().eq(0).text();
            let name = $(this).children().eq(1).text();
            let address = $(this).children().eq(2).text();
            let salary = $(this).children().eq(3).text();

            $("#id").val(id);
            $("#name").val(name);
            $("#address").val(address);
            $("#salary").val(salary);
        });
    }

    clearTextField() {
        $("#id").val("");
        $("#name").val("");
        $("#address").val("");
        $("#salary").val("");
    }
}
new CustomerController();






