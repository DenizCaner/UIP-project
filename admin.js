/**
 * Created by LOe on 01/12/15.
 */

// This function is used to add the functionality of  hiding or showing the orders for the respective table.
// The tables are named tn, where n is the table number. The same number is used to relate the corresponding order.
//
$(function() {

    // Initially we make sure that all orders are hidden!
    //
    $("#o1").hide();
    $("#o2").hide();
    $("#o3").hide();
    $("#o4").hide();
    $("#o5").hide();
	$("#o6").hide();
	$("#supp").hide();

    // Then we define the toggle function for clicking on the table. Each table is made to react differently on a click.
    //
    //
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
    });
});

// ===================================================================================================================
// Two support functions that connect a table with its order table. This makes it possible to
// use a dynamic number of tables, rather than a fixed number. Is not used for this purpose currently.
//
function orderTable (orderId) { // Returns the table number for the order with the same number.
    temp = orderId.split("");
    return "#t"+ temp[2];
}

function tableOrder (tableId) { // Returns the order number for the table with the same number.
    temp = tableId.split("");
    return "#o"+ temp[2];
}

function pay() {
  var txt;
  int sum = sumTotal(
  if (confirm("The client pay" + sum) {
    txt = "";
	$(orderTable(tempid) + " .tsum").text(0 + " kr.");
  } else {
    txt = "You pressed Cancel!";
  }
  document.getElementById("demo").innerHTML = txt;
}

function edit(){
    $("#supp").toggle("slow");
}


// ===================================================================================================================
// END OF FILE
// ===================================================================================================================
