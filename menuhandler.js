/**
 * Created by LOe on 01/12/15.
 *
 * This is a primary example on how jQuery is used to set up the functionality of the menu part
 * of the interface. It is slightly difficult to read as it is, but the documentation should be
 * to at least some help. Make sure that you understand how the different parts work in this file.
 */

// This function defines the functionality of the menus on the right side of the bar.
//
$(function () {

    // First we hide all menus, but the one with all courses.
    //
    $("#allmenu").show();
	 $("#Vinspirit").hide();
    $("#Whisky").hide();
    $("#Grappa").hide();
    $("#Brandy").hide();
	$("#Calvados").hide();
	$("#Cognac").hide();
	$("#Okryddadsprit").hide();
	$("#Kryddadsprit").hide();
   $("#Ale").hide();
   $("#Whisky, Grain").hide();

    // Here we put the different kinds of food into the respective menus.
    //
     $(getAll()).appendTo("#allmenu");
});

// The menu listing all the available food at the restaurant is collected separately, by
// going through all the different kinds, and request the list for it. It also adds the separation
// between the lists, with its proper Headings.
//
function getAll() {
// The menu listing all the available food at the restaurant is collected separately, by
// going through all the different kinds, and request the list for it. It also adds the separation
// between the lists, with its proper Headings.
//

// Collection variable
//
var temp = "";

// One array contains the type descriptors, one the proper names to be entered in the menu listing.
//
var types = ["Brandy och Vinsprit, Vinsprit", "Calvados", "Whisky , Malt", "Grappa och Marc, Grappa","Brandy och Vinsprit, Brandy","Cognac","Okryddad sprit","Kryddad sprit","\u00c3\u2013l, Ale","Rom, M\u00c3\u00b6rk","Whisky, Grain"];
var names = ["Vinspirit","Whisky & Malt","Calvados", "Grappa", "Brandy","Cognac","Okryddad sprit","Kryddad sprit","\u00c3\u2013l, Ale","Rom","Whisky, Grain"];

len = types.length;

for (var i = 0; i < names.length; i++) {

    // For each type, the proper name and a horisontal ruler is added to the output.
    //
    temp += '<div> <strong>' + names[i] + '</strong><br><hr></div>';

    // and then the resulting list for the type.
    //
    temp += getBeverage(types[i], allBeverages()) +"<br>";

}
return temp;
}

// ===================================================================================================================
// The function returns all food strings (created as divs) of a certain type (given as argument).
//
function getBeverage(type, arr) {

    // The collection variable
    //
    var out = "";

    // Go through the array and collect all the items of the desired type.
    //
    for (var i = 0; i < arr.length; i++) {

        // if the item is of the desired type, then we add the HTML string to the collection variable.
        // Otherwise we skip to the next item.
        //
        if (arr[i][1] == type) {
            out += '<div id="' + "menuitem" + i + '" draggable="true" ondragstart="drag(event)">' + arr[i][0] + ' <span class="price">' + arr[i][2] + 'sek</span></div>';
        }

    }
    // Once we are finished we return the resulting HTML string containing all the menu items for the desired menu.
    //
    return out;
}
// ===================================================================================================================
// This function returns an array, which can be read as a JSON object. This means that it is easy to
// add new elements, and that the data is easy to access, and also update if needed.
//
function allBeverages() {

    // Using a local variable to collect the items.
    var collector = [];

    // The DB is stored in the variable DB2, with "spirits" as key element. If you need to select only certain
    // items, you may introduce filter functions in the loop... see the template within comments.
    //
    for (i = 0; i < DB2.spirits.length; i++) {
        collector.push([DB2.spirits[i].name, DB2.spirits[i].catgegory,DB2.spirits[i].priceinclvat]);
    };
    //
    return collector;
}
// ===================================================================================================================
// END OF FILE
// ===================================================================================================================
