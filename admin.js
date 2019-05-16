

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

});

// Returns the table number for the order with the same number.
function orderTable (orderId) { 
    temp = orderId.split("");
    return "#t"+ temp[2];
}

// Returns the order number for the table with the same number.
function tableOrder (tableId) { 
    temp = tableId.split("");
    return "#o"+ temp[2];
}

// reset order on the table after paying
function pay(tempid) { 
    var x = document.getElementById("o" + tempid);
    var order = $("#o"+tempid).html();
    $('#pop1').simplePopup();
    $('#payYes').on("click", function(event) {
        // the price is set to 0 for a new order
        $("#t" + tempid + " .tsum").text("0 kr.");
        $("#o" + tempid).text("Order :");
    });
}

// remove element from the order 
function supp(id) {
    console.log(id);
	var  o= $("#newId"+id).html();
	console.log(o);
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

// This makes the item accept drop actions.
function allowDrop(ev) {
    ev.preventDefault(); 
}


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
function drop(ev,el) {

    ev.preventDefault();

    // Copy menu items, rather than moving them.
    ev.dataTransfer.dropEffect = "copy";

    var data = ev.dataTransfer.getData("text"); // Get the data from the transfer...

	// create new node that will be happened to the target 
    var nodeCopy = document.getElementById(data).cloneNode(true);
    var idElt = nodeCopy.id;

    var tempid = "#" + ev.target.id;
    var x= idElt.slice(8,idElt.length);
    console.log(tempid);

    nodeCopy.id = "newId"+x;

    nodeCopy.draggable = "false"; // The new element is set as being not draggable.
    console.log(ev.target);
    el.appendChild(nodeCopy);

    // Get the HTML content of the order.
    //
	// add delete button to the new item
	var div = document.getElementById("newId"+x);
	console.log("div", div);
	var parent = div.parentNode;
	var newDiv = document.createElement("Button");
	newDiv.innerHTML="X";
	document.getElementById("newId"+x).appendChild(newDiv);
	console.log("new", newDiv);
	console.log(document.getElementById("newId"+x));
    
	order = $(tempid).html();
    console.log( nodeCopy.id);
    $(tempid+" .supp").show();
    undoStack.push(new eventItem(x, tempid[2], "order"));
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

// Get the list of prices from all the current elements.
//
function getPrices (htmlString) {

    var el = $( '<div></div>' );
    el.html(htmlString);
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

