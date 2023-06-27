import { Order } from "../models/order.js";
import { Cart } from "../models/cart.js";
import { getAllItems, getCustomerDB, placeOrder } from "../database/db.js";
var cartArray = [];




export class OrderController {
    constructor() {
        $(".cmb-item-code").on('change', (event) => {
            console.log(event.target.value);
            this.handleItemDetail(event.target.value);
        });

        $(".cmb-customer-id").on('change', (event) => {
            this.handleCustomerDetail(event.target.value);
        });

        $("#addToCart").click(this.handleAddToCart.bind(this));
        $(".delete-order").click(this.handlePlaceOrder.bind(this));
        this.handleLoadIds();
        // this.handleTotal();
        this.deleteField();



    }



    handleLoadIds() {
        getCustomerDB().map(value => {
            $('.cmb-customer-id').append("<option>" + value._cus_id + "</option>")
        });

        getAllItems().map(value => {
            $('.cmb-item-code').append("<option>" + value._item_code + "</option>")
        });
    }

    handleItemDetail(id) {
        console.log("work");
        getAllItems().map(value => {
            if (value._item_code === id) {
                $("#item_name").val(value._item_name);
                $("#item_price").val(value._item_price);
                $("#qty-qty").val(value._item_qty);
            }
        });
    }

    handleCustomerDetail(id) {
        console.log("work2");
        getCustomerDB().map(value => {
            if (value._cus_id === id) {
                $("#cus_name").val(value._cus_name);
                $("#cus_address").val(value._cus_address);
            }
        });
    }

    // handleTotal() {
    //     $("#qty").on('keyup', (e) => {
    //         let price = parseInt($("#unitPrice").val());
    //         let qty = parseInt($("#qty").val());

    //         let total = price * qty;
    //         console.log(e.keyCode);

    //         if (e.key === "Backspace") {
    //             e.preventDefault();
    //             $("#total").val("");
    //         } else {
    //             $("#total").val(total);
    //         }
    //     });

    // }

    handleAddToCart() {
        console.log("ok");
        let itemId = $(".cmb-item-code").val();
        let qty = $("#current-qty").val();
        let total = $("#item_price").val();

        let cost = qty * total
        let ct = new Cart(itemId, qty, cost);


        $("#table-cart").append(`
         <tr>
            <td>${ct.itemID}</td>> 
            <td>${ct.qty}</td>> 
            <td>${ct.total}</td>> 
            <td>${cost}</td>
            <td><button type="button" style="margin: 0; padding: 3px 10px; color: #edeff1;background-color: #ff253a; border: none" class="raw">Delete</button></td>
        </tr>`);

        cartArray.push(ct);
        console.log(cartArray);
        this.clearTextField();
        // this.findTotalCost();

    }

    deleteField() {
        $("#table-order").on('click', (e) => {
            console.log(e);
            if (!e.target.classList.contains("raw")) {
                return;
            }
            const btn = e.target;
            btn.closest("tr").remove();

            this.findTotalCost();

        });


    }

    findTotalCost() {
        var table = document.getElementById("table-order");
        var totalCost = 0;

        for (var i = 1; i < table.rows.length; i++) {
            totalCost = totalCost + parseInt(table.rows[i].cells[2].innerHTML);
            console.log(totalCost);
            document.getElementById("total").innerText(totalCost);

        }

    }

    handlePlaceOrder() {

        let orderId = $("#order-id").val();
        let custId = $(".cmb-customer-id").val();

        let order = new Order(orderId, custId, cartArray);

        placeOrder(order);
        $("#table-cart tr").remove();
        alert("Order Placed!")

    }

    clearTextField() {
        $(".cmb-item-code").val("");
        $(".cmb-customer-id").val("");
        $("#cus_name").val("");
        $("#cus_address").val("");
        $("#item_name").val("");
        $("#item_price").val("");
        $("#qty-qty").val("");
        $("#current-qty").val("");


    }

}

new OrderController();