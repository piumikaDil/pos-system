import { saveItem, getAllItems, updateItem, deleteItem } from "../database/db.js";
import Item from "../models/item.js";



export class ItemController {
    constructor() {
        $(".itm-btn-save").click(this.handleSaveItem.bind(this));
        $(".itm-btn-update").click(this.handleUpdateItem.bind(this));
        $(".itm-btn-delete").click(this.handleDeleteItem.bind(this));
        this.handleLoadItem();
        this.itemTableSelectedRaw();

    }

    handleLoadItem() {
        let item_data = getAllItems();
        $('#item-table-body').empty();

        item_data.map((result, index) => {
            const row = "<tr>" + "<td>" +
                result._item_code +
                "</td>" + "<td>" +
                result._item_name +
                "</td>" + "<td>" +
                result._item_price +
                "</td>" + "<td>" +
                result._item_qty +
                "</td>" + "</tr>";
            $("#item-table-body").append(row);
        });
    }

    handleSaveItemValidation() {

    }

    handleSaveItem() {
        let code = $("#code").val();
        let name = $("#item-name").val();
        let price = $("#price").val();
        let qty = $("#qty").val();

        let item = new Item(code, name, price, qty);
        saveItem(item);
        this.handleLoadItem();
        this.clearFields();


    }

    handleUpdateItem() {
        let code = $("#code").val();
        let name = $("#item_name").val();
        let price = $("#price").val();
        let qty = $("#qty").val();

        let item = new Item(code, name, price, qty);
        updateItem(item);
        this.handleLoadItem();
        this.clearFields();
    }

    handleDeleteItem() {
        console.log("working");
        let code = $("#code").val();
        let name = $("#item_name").val();
        let price = $("#price").val();
        let qty = $("#qty").val();

        let item = new Item(code, name, price, qty);
        deleteItem(item);
        this.handleLoadItem();
        this.clearFields();
    }

    itemTableSelectedRaw() {
        $("#item-table").on("click", "tr", function (event) {
            let code = $(this).children().eq(0).text();
            let name = $(this).children().eq(1).text();
            let price = $(this).children().eq(2).text();
            let qty = $(this).children().eq(3).text();

            $("#code").val(code);
            $("#item-name").val(name);
            $("#price").val(qty);
            $("#qty").val(price);
        });
    }

    clearFields() {
        $("#code").val("");
        $("#item-name").val("");
        $("#qty").val("");
        $("#price").val("");
    }

}

new ItemController();