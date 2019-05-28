

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
function supp(elt) {
    //
	var  o= $("#"+elt.id).html();
	console.log("o ",o);
	var p=getPrices(o);
	console.log("id "+elt.id);
	var x = document.getElementById(elt.id).parentElement.id;
	console.log(" elt ", x); 
	var orderId=x.slice(1, x.length);
    console.log(orderId);

    order = $("#"+x).html();

    prices = getPrices(order);
    sum = sumTotal(prices);
    var price = parseInt(p[0].innerText);

    $("#t"+orderId+" .tsum").text(sum-price+" kr.");
    $("#"+elt.id).remove();
    //console.log("#newId"+id);
	var id= elt.id.slice(5,elt.id.length-1);
	//console.log(">>>>>>>>>>>>>>>>>>>>>>", id);
    undoStack.push(new eventItem(elt.id, orderId, "supp"));

}


///////////////////////////////////////////////////////////////////////////////////////////////////
// UNDO-REDO

function undo(){
	
    var top = undoStack.pop();
	console.log(" undo ", top);
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
	console.log(" redo ", top);
    if(top.type == "supp")
    {
        re_order(top.id, top.tableId);
        undoStack.push(new eventItem(top.id, top.tableId, "order"));
    }
    else if (top.type == "order")
    {
        supp(top);
    }   
}

function resupp(elt) { 
	var  o= $("#"+elt).html();
	var p=getPrices(o);
	console.log(" resupp ", elt);
	console.log(o);
	console.log(p);
	var x = document.getElementById(elt).parentElement.id;

	var orderId=x.slice(1, x.length);

	order = $("#"+x).html();

    prices = getPrices(order);
    sum = sumTotal(prices);
    var price = parseInt(p[0].innerText);

    $("#t"+orderId+" .tsum").text(sum-price+" kr.");
    $("#"+elt).remove(); 
    redoStack.push(new eventItem(elt, orderId, "supp"));

}

function re_order(elt, tableId)
{
	console.log("reorder ",elt);
	var id= elt.slice(5,elt.length-1);
    var nodeCopy = document.getElementById("menuitem"+id).cloneNode(true);
    var idElt = nodeCopy.id;
    console.log(idElt);
    var tempid = "#o" + tableId;
    var x= idElt.slice(8,idElt.length);
	var i;
	for( i=0; document.getElementById("newId"+x+i)!= null; i++){
	}
    // get the order where the item is drop
    nodeCopy.id = "newId"+x+i;

    nodeCopy.draggable = "false"; 

    $(nodeCopy).appendTo(tempid);
    console.log(nodeCopy);
	
	var div = document.getElementById("newId"+x+i);
	console.log("div", div);
	var parent = div.parentNode;
	var newDiv = document.createElement("Button");
	newDiv.innerHTML="X";
	newDiv.setAttribute('onclick',"supp(newId"+x+i+")");
	document.getElementById(nodeCopy.id).appendChild(newDiv);
    // Get the ID of the target (the order).
    //

    // Get the HTML content of the order.
    //

    order = $(tempid).html();
    $(tempid+" .supp").show();
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
	var test = document.getElementById("newId"+x);
	//console.log(test);
	var i;
	for( i=0; document.getElementById("newId"+x+i)!= null; i++){
	}
    nodeCopy.id = "newId"+x+i;
	elt =  "newId"+x+i;

    nodeCopy.draggable = "false"; // The new element is set as being not draggable.
    console.log("node copy " +nodeCopy.id);
    el.appendChild(nodeCopy);

    // Get the HTML content of the order.
    //
	// add delete button to the new item
	var div = document.getElementById(elt);
	console.log("div", div);
	var parent = div.parentNode;
	var newDiv = document.createElement("Button");
	newDiv.innerHTML="X";
	newDiv.setAttribute('onclick',"supp("+elt+")");
	document.getElementById(nodeCopy.id).appendChild(newDiv);
	console.log("new", newDiv);
	   
	order = $(tempid).html();
    console.log( nodeCopy.id);
    $(tempid+" .supp").show();
    undoStack.push(new eventItem("newId"+x+i, tempid[2], "order"));
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

