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
    var names = ["Vinspirit","Whisky,Malt","Calvados", "Grappa", "Brandy","Cognac","Okryddad sprit","Kryddad sprit","\u00c3\u2013l, Ale","Rom","Whisky, Grain"];

    $("#allfood").show();
    $("#Vinspirit").hide();
    $("#WhiskyMalt").hide();
    $("#Grappa").hide();
    $("#Brandy").hide();
    $("#Calvados").hide();
    $("#Cognac").hide();
    $("#Okryddadsprit").hide();
    $("#Kryddadsprit").hide();
    $("#Ale").hide();
    $("#WhiskyGrain").hide();


   $(".allmenu").click(function () {
        $("#allfood").show("slow");
		$("#Vinspirit").hide("slow");
		$("#WhiskyMalt").hide("slow");
		$("#Grappa").hide("slow");
		$("#Brandy").hide("slow");
		$("#Calvados").hide("slow");
		$("#Cognac").hide("slow");
		$("#Okryddadsprit").hide("slow");
		$("#Kryddadsprit").hide("slow");
		$("#Ale").hide("slow");
		$("#WhiskyGrain").hide("slow");
    });
	
	$(".Vinspirits").click(function () {
        $("#allfood").hide("slow");
		$("#Vinspirit").show("slow");
		$("#WhiskyMalt").hide("slow");
		$("#Grappa").hide("slow");
		$("#Brandy").hide("slow");
		$("#Calvados").hide("slow");
		$("#Cognac").hide("slow");
		$("#Okryddadsprit").hide("slow");
		$("#Kryddadsprit").hide("slow");
		$("#Ale").hide("slow");
		$("#WhiskyGrain").hide("slow");
    });

	   $(".WhiskyMalts").click(function () {
        $("#allfood").hide("slow");
        $("#Vinspirit").hide("slow");
        $("#WhiskyMalt").show("slow");
        $("#Grappa").hide("slow");
        $("#Brandy").hide("slow");
	    $("#Calvados").hide("slow");
	    $("#Cognac").hide("slow");
	    $("#Okryddadsprit").hide("slow");
	    $("#Kryddadsprit").hide("slow");
        $("#Ale").hide("slow");
        $("#WhiskyGrain").hide("slow");
    });
	
	$(".Grappas").click(function () {
		$("#allfood").hide("slow");
		$("#Vinspirit").hide("slow");
		$("#WhiskyMalt").hide("slow");
		$("#Grappa").show("slow");
		$("#Brandy").hide("slow");
		$("#Calvados").hide("slow");
		$("#Cognac").hide("slow");
		$("#Okryddadsprit").hide("slow");
		$("#Kryddadsprit").hide("slow");
		$("#Ale").hide("slow");
		$("#WhiskyGrain").hide("slow");
    });
	
	$(".Brandys").click(function () {
		$("#allfood").hide("slow");
		$("#Vinspirit").hide("slow");
		$("#WhiskyMalt").hide("slow");
		$("#Grappa").hide("slow");
		$("#Brandy").show("slow");
		$("#Calvados").hide("slow");
		$("#Cognac").hide("slow");
		$("#Okryddadsprit").hide("slow");
		$("#Kryddadsprit").hide("slow");
		$("#Ale").hide("slow");
		$("#WhiskyGrain").hide("slow");
    });
	
	$(".Calvados").click(function () {
		$("#allfood").hide("slow");
		$("#Vinspirit").hide("slow");
		$("#WhiskyMalt").hide("slow");
		$("#Grappa").hide("slow");
		$("#Brandy").hide("slow");
		$("#Calvados").show("slow");
		$("#Cognac").hide("slow");
		$("#Okryddadsprit").hide("slow");
		$("#Kryddadsprit").hide("slow");
		$("#Ale").hide("slow");
		$("#WhiskyGrain").hide("slow");
    });
	
	$(".Cognacs").click(function () {
		$("#allfood").hide("slow");
		$("#Vinspirit").hide("slow");
		$("#WhiskyMalt").hide("slow");
		$("#Grappa").hide("slow");
		$("#Brandy").hide("slow");
		$("#Calvados").hide("slow");
		$("#Cognac").show("slow");
		$("#Okryddadsprit").hide("slow");
		$("#Kryddadsprit").hide("slow");
		$("#Ale").hide("slow");
		$("#WhiskyGrain").hide("slow");
    });
	
	$(".Okryddadsprits").click(function () {
		$("#allfood").hide("slow");
		$("#Vinspirit").hide("slow");
		$("#WhiskyMalt").hide("slow");
		$("#Grappa").hide("slow");
		$("#Brandy").hide("slow");
		$("#Calvados").hide("slow");
		$("#Cognac").hide("slow");
		$("#Okryddadsprit").show("slow");
		$("#Kryddadsprit").hide("slow");
		$("#Ale").hide("slow");
		$("#WhiskyGrain").hide("slow");
    });
	
	$(".Kryddadsprits").click(function () {
		$("#allfood").hide("slow");
		$("#Vinspirit").hide("slow");
		$("#WhiskyMalt").hide("slow");
		$("#Grappa").hide("slow");
		$("#Brandy").hide("slow");
		$("#Calvados").hide("slow");
		$("#Cognac").hide("slow");
		$("#Okryddadsprit").hide("slow");
		$("#Kryddadsprit").show("slow");
		$("#Ale").hide("slow");
		$("#WhiskyGrain").hide("slow");
    });
	
	$(".Ales").click(function () {
		$("#allfood").hide("slow");
		$("#Vinspirit").hide("slow");
		$("#WhiskyMalt").hide("slow");
		$("#Grappa").hide("slow");
		$("#Brandy").hide("slow");
		$("#Calvados").hide("slow");
		$("#Cognac").hide("slow");
		$("#Okryddadsprit").hide("slow");
		$("#Kryddadsprit").hide("slow");
		$("#Ale").show("slow");
		$("#WhiskyGrain").hide("slow");
    });
	
	$(".WhiskyGrains").click(function () {
		$("#allfood").hide("slow");
		$("#Vinspirit").hide("slow");
		$("#WhiskyMalt").hide("slow");
		$("#Grappa").hide("slow");
		$("#Brandy").hide("slow");
		$("#Calvados").hide("slow");
		$("#Cognac").hide("slow");
		$("#Okryddadsprit").hide("slow");
		$("#Kryddadsprit").hide("slow");
		$("#Ale").hide("slow");
		$("#WhiskyGrain").show("slow");
    });
	
    // Here we put the different kinds of food into the respective menus.
    //
   var types = ["Brandy och Vinsprit, Vinsprit", "Calvados", "Whisky , Malt", "Grappa och Marc, Grappa","Brandy och Vinsprit, Brandy","Cognac","Okryddad sprit","Kryddad sprit","\u00c3\u2013l, Ale","Rom, M\u00c3\u00b6rk","Whisky, Grain"];
	var names = ["#Vinspirit","#Calvados","#WhiskyMalt", "#Grappa", "#Brandy","#Cognac","#Okryddadsprit","#Kryddadsprit","#Ale","#Rom","#WhiskyGrain"]; 
	$(getAll()).appendTo("#allfood");

   for (var i = 0; i < types.length; i++) {

        $(getBeverage(types[i], allBeverages())).appendTo(names[i]);

    }
	/*$(getBeverage("Brandy och Vinsprit, Vinsprit", allBeverages())).appendTo("#Vinspirit");
	$(getBeverage("#Whisky , Malt", allBeverages())).appendTo("#Whisky, Malt");
	$(getBeverage("#Grappa och Marc, Grappa"),allBeverages()).appendTo("#Grappa");
	$(getBeverage("#Brandy och Vinsprit, Brandy"),allBeverages()).appendTo("#Brandy");
	$(getBeverage("#Calvados"),allBeverages()).appendTo("#Calva");
	$(getBeverage("#Cognac"),allBeverages()).appendTo("#Cognac");
	$(getBeverage("#Okryddad sprit"),allBeverages()).appendTo("#Okryddadsprit");
	$(getBeverage("#Kryddad sprit"),allBeverages()).appendTo("#Kryddadsprit");
	$(getBeverage("#\u00c3\u2013l, Ale"),allBeverages()).appendTo("#Ale");
	$(getBeverage("#Whisky, Grain"),allBeverages()).appendTo("#Whisky, Grain");*/
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
   //s temp += '<div> <strong>' + names[i] + '</strong><br><hr></div>';

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
    ////
	out += '<div> <strong>' + type + '</strong><br><hr></div>';
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
