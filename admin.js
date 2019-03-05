/**
 * Created by LOe on 01/12/15.
 */

// This function is used to add the functionality of  hiding or showing the orders for the respective table.
// The tables are named tn, where n is the table number. The same number is used to relate the corresponding order.
//

//This part is going to be used for undo/redo purposes
var eventStack = new Stack(); 

function event(eventType, tableID, item) {
    this.eventType = eventType;
    this.tableID = tableID;
    this.item = item;
}

$(function() {

    // Initially we make sure that all orders are hidden!
    //
    $("#o1").hide();
    $("#o2").hide();
    $("#o3").hide();
    $("#o4").hide();
    $("#o5").hide();
    $("#o6").hide();


    $("#beer").show();
    $("#whiskey").hide();
    $("#sprit").hide();

     // Here we show the beer menu and hide all other menus.
    //
    $("#beers").click(function () { /* Here we show and hide the field. */
        $("#beer").show();
        $("#whisky").hide();
        $("#sprit").hide();
    });

    $("#whiskys").click(function () { /* Here we show and hide the field. */
        $("#beer").hide();
        $("#whisky").show();
        $("#sprit").hide();
    });

    $("#sprits").click(function () { /* Here we show and hide the field. */
        $("#beer").hide();
        $("#whisky").hide();
        $("#sprit").show();
    });

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


    // Here we put the different kinds of beverage into the respective menus.
    //
    $(categorizeBeverages("\u00c3\u2013l, Ale", beverages)).appendTo("#beer");
    $(categorizeBeverages("Whisky, Malt", beverages)).appendTo("#whisky");
    $(categorizeBeverages("Whisky, Grain", beverages)).appendTo("#whisky");
    $(categorizeBeverages("Whisky , Blended", beverages)).appendTo("#whisky");
    $(categorizeBeverages("Whisky, \u00c3\u2013vrig", beverages)).appendTo("#whisky");
    $(categorizeBeverages("Cognac", beverages)).appendTo("#sprit");
    $(categorizeBeverages("Okryddad sprit", beverages)).appendTo("#sprit");
    $(categorizeBeverages("Kryddad sprit", beverages)).appendTo("#sprit");
    $(categorizeBeverages("Rom, M\u00c3\u00b6rk", beverages)).appendTo("#sprit");
    $(categorizeBeverages("Grappa och Marc, Grappa", beverages)).appendTo("#sprit");
    $(categorizeBeverages("Grappa och Marc, Marc", beverages)).appendTo("#sprit");
    $(categorizeBeverages("\u00c3\u2013vrig sprit", beverages)).appendTo("#sprit");
    $(categorizeBeverages("Brandy och Vinsprit, Vinsprit", beverages)).appendTo("#sprit");
    $(categorizeBeverages("Brandy och Vinsprit, Brandy", beverages)).appendTo("#sprit");
    $(categorizeBeverages("Calvados", beverages)).appendTo("#sprit");
    $(categorizeBeverages("Sprit av frukt", beverages)).appendTo("#sprit");
    $(categorizeBeverages("Smaksatt sprit", beverages)).appendTo("#sprit");
    $(categorizeBeverages("Gin", beverages)).appendTo("#sprit");
    $(categorizeBeverages("Smaksatt sprit", beverages)).appendTo("#sprit");
    

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

function pay(tempid){

function categorizeBeverages(type, arr) {
    var out = "";
    // Go through the array and collect all the items of the desired type.
    //
    for (var i = 0; i < arr.length; i++) {

        // if the item is of the desired type, then we add the HTML string to the collection variable.
        // Otherwise we skip to the next item.
        //
        if (arr[i].catgegory == type) {
            out += '<div id="' + "menuitem" + i + '" draggable="true" ondragstart="drag(event)">' + arr[i].name + ' <span class="price">' + arr[i].price + '</span></div>';
        }
    }
    // Once we are finished we return the resulting HTML string containing all the menu items for the desired menu.
    //
    return out;
};

    var x = document.getElementById("o"+tempid);
   // window.confirm("The Client pays his order "+x);
    if (window.confirm("The Client pays his order "+x)) {
        // the price is set to 0 for a new order
        $("#t" +tempid+ " .tsum").text("0 kr.");
        $("#o" +tempid).text("Order :");
        //x.remove(x.selectedIndex);
    }
}
// ===================================================================================================================
// END OF FILE
// ===================================================================================================================
