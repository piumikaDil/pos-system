$("#customerContent").css("display", "block")
$("#itemsContent").css("display", "none")
$("#orderContent").css("display", "none")

$("#customer-btn").click(function () {
    $("#customerContent").css("display", "block")
    $("#itemsContent").css("display", "none")
    $("#orderContent").css("display", "none")
})

$("#item-btn").click(function () {
    $("#customerContent").css("display", "none")
    $("#itemsContent").css("display", "block")
    $("#orderContent").css("display", "none")
})

$("#order-btn").click(function () {
    $("#customerContent").css("display", "none")
    $("#itemsContent").css("display", "none")
    $("#orderContent").css("display", "block")
})

   


