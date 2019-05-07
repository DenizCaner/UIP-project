

// ===================================================================================================================
// Two support functions that connect a table with its order table. This makes it possible to
// use a dynamic number of tables, rather than a fixed number. Is not used for this purpose currently.
//


var undoStack = new Stack();
var redoStack = new Stack();


function eventItem(id, tableId, type) {
    this.id = id;
    this.tableId = tableId;
    this.type = type;
}

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
    $('#pop1').simplePopup();
    $('#payYes').on("click", function(event) {
        // the price is set to 0 for a new order
        $("#t" + tempid + " .tsum").text("0 kr.");
        $("#o" + tempid).text("Order :");
        //x.remove(x.selectedIndex);
    });
}




function supp(id) {
   var  o= $("#newId"+id).html();
   console.log(o);
  //  if(window.confirm("supp " +o)){
        var p=getPrices(o);

        var x = document.getElementById("newId"+id).parentElement.id;

        var orderId=x.slice(1, x.length);
        console.log(orderId);

        order = $("#"+x).html();

        prices = getPrices(order);
        sum = sumTotal(prices);
        var price = parseInt(p[0].innerText);

        $("#t"+orderId+" .tsum").text(sum-price+" kr.");
        $("#newId"+id).remove();
        console.log("#newId"+id);
        undoStack.push(new eventItem(id, orderId, "supp"));
  //  }


}


///////////////////////////////////////////////////////////////////////////////////////////////////
// UNDO-REDO

function undo(){
    var top = undoStack.pop();
    if(top.type == "order")
    {
        resupp(top.id);
    }
    else if (top.type == "supp")
    {
        re_order(top.id, top.tableId);
        redoStack.push(new eventItem(top.id, top.tableId, "order"));
    }
}

function redo(){ 
    var top = redoStack.pop();
    if(top.type == "supp")
    {
        re_order(top.id, top.tableId);
        undoStack.push(new eventItem(top.id, top.tableId, "order"));
    }
    else if (top.type == "order")
    {
        supp(top.id);
    }   
}

function resupp(id) {
   var  o= $("#newId"+id).html();
  //  if(window.confirm("supp " +o)){
        var p=getPrices(o);

        var x = document.getElementById("newId"+id).parentElement.id;

        var orderId=x.slice(1, x.length);
        console.log(orderId);

        order = $("#"+x).html();

        prices = getPrices(order);
        sum = sumTotal(prices);
        var price = parseInt(p[0].innerText);

        $("#t"+orderId+" .tsum").text(sum-price+" kr.");
        $("#newId"+id).remove();
        console.log("#newId"+id);
        redoStack.push(new eventItem(id, orderId, "supp"));
  //  }


}

function re_order(id, tableId)
{
    var nodeCopy = document.getElementById("menuitem"+id).cloneNode(true);
    var idElt = nodeCopy.id;
    console.log(idElt);
    var tempid = "#o" + tableId;
    var x= idElt.slice(8,idElt.length);
    // get the order where the item is drop
    nodeCopy.id = "newId"+x;

    nodeCopy.draggable = "false"; // The new element is set as being not draggable.

    $(nodeCopy).appendTo(tempid);
    console.log("eda");
    // Get the ID of the target (the order).
    //

    //window.confirm("drop here "+ev.target.id);

    // Get the HTML content of the order.
    //

    order = $(tempid).html();
    $(tempid+" .supp").show();
    console.log("eda");
    console.log(undoStack);
    // Get the prices from the order.
    //
    prices = getPrices(order);

    // Make a total sum of all the prices.
    //
    sum = sumTotal(prices);

    // Replace the content of the order with the new sum
    //
    $(orderTable(tempid) + " .tsum").text(sum + " kr.");

}



//////////////////////////////////////////////////////////////////////////////////////////////////
// DRAG AND DROP STARTS HERE



/**
 * Created by LOe on 01/12/15.
 */
//
// A standard function. If you don't want any "extras", just use this
// as it is. It will prevent the default behaviour, which is not to accept
// any drops.
//
//var x= 0;
function allowDrop(ev) {
    ev.preventDefault(); // This makes the item accept drop actions.
}

// A standard function. It packages the ID of the source into the data
// transfer package. The type of the transferred data is pure text.
//
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

// The drop function determines what happens when you drop the source item
// on the target. You can define any kind of action that you want to
// incorporate.
//
// All information about the drop event is kept in an object that is received upon dropping.
// The ev argument is used throughout the drop function.
//
function drop(ev) {

    // The default action is to not accept drops, så
    ev.preventDefault();

    // This allows for copying menu items, rather than moving them.
    // Comment out this line to see the difference.
    //
    ev.dataTransfer.dropEffect = "copy";

    var data = ev.dataTransfer.getData("text"); // Get the data from the transfer...

    // If we use .cloneNode(true) the dragging results in a cloned copy, rather than
    // an actual move of the source. This is important when we use the dragged item as
    // an example, rather than as an individual object.
    //
    var nodeCopy = document.getElementById(data).cloneNode(true);
    var idElt = nodeCopy.id;

    var tempid = "#" + ev.target.id;
    var x= idElt.slice(8,idElt.length);
    console.log(tempid);
    // get the order where the item is drop
    nodeCopy.id = "newId"+x;

    nodeCopy.draggable = "false"; // The new element is set as being not draggable.
    console.log(ev.target);
    ev.target.appendChild(nodeCopy);

    // Get the ID of the target (the order).
    //

    //window.confirm("drop here "+ev.target.id);

    // Get the HTML content of the order.
    //
    order = $(tempid).html();
    $(tempid+" .supp").show();
    undoStack.push(new eventItem(nodeCopy.id[5], tempid[2], "order"));
    // Get the prices from the order.
    //
    prices = getPrices(order);

    // Make a total sum of all the prices.
    //
    sum = sumTotal(prices);

    // Replace the content of the order with the new sum
    //
    $(orderTable(tempid) + " .tsum").text(sum + " kr.");

}

// Get the list of prices from all the currentorders.
//
function getPrices (htmlString) {

    // We create a new jQuery object and put the HTML string into it.
    //
    var el = $( '<div></div>' );
    el.html(htmlString);

    // Then we can use jQuery to find all elements in this string.
    //
    return $('.price', el); // All the price elements
}

// Sum up all the prices in the order. Note that the data is still stored in an HTML string.
//
function sumTotal(data) {

    // reset the total sum;
    //
    var sum = 0;

    // Go through the elements and collect the internal texts.
    // Each string is parsed to an integer.
    //
    for (i = 0; i < data.length; i++) {
        sum += parseInt(data[i].innerText);
    }
    return sum;
}
// ===================================================================================================================
// END OF FILE
// ===================================================================================================================

