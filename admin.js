

// ===================================================================================================================
// Two support functions that connect a table with its order table. This makes it possible to
// use a dynamic number of tables, rather than a fixed number. Is not used for this purpose currently.
//

$(function () {

    $(".supp").hide();
   /* $("#o1").hide();
    $("#o2").hide();
    $("#o3").hide();
    $("#o4").hide();
    $("#o5").hide();
    $("#o6").hide();

    $("#t1").click(function () {
        $("#o1").toggle("slow");
    });

    $("#t2").click(function () {
        $("#o2").toggle("slow");
    });

    $("#t3").click(function () {
        $("#o3").toggle("slow");
    });

    $("#t4").click(function () {
        $("#o4").toggle("slow");
    });

    $("#t5").click(function () {
        $("#o5").toggle("slow");
    });
    $("#t6").click(function () {
        $("#o6").toggle("slow");
    });*/

});

function orderTable (orderId) { // Returns the table number for the order with the same number.
    temp = orderId.split("");
    return "#t"+ temp[2];
}

function tableOrder (tableId) { // Returns the order number for the table with the same number.
    temp = tableId.split("");
    return "#o"+ temp[2];
}

function pay(tempid) {
    var x = document.getElementById("o" + tempid);
    var order = $("#o"+tempid).html();
    // window.confirm("The Client pays his order "+x);
    if (window.confirm("Are you sure you want to place order ?")) {
        // the price is set to 0 for a new order
        $("#t" + tempid + " .tsum").text("0 kr.");
        $("#o" + tempid).text("Order :");
        //x.remove(x.selectedIndex);
    }
}




function supp(id) {

   var  o= $("#newId"+id).html();
  //  if(window.confirm("supp " +o)){
        var p=getPrices(o);

        var x = document.getElementById("newId"+id).parentElement.id;

        var orderId=x.slice(1, x.length);

        order = $("#"+x).html();

        prices = getPrices(order);
        sum = sumTotal(prices);
        var price = parseInt(p[0].innerText);

        $("#t"+orderId+" .tsum").text(sum-price+" kr.");
        $("#newId"+id).remove();
  //  }


}


