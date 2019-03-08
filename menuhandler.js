
// This function defines the functionality of the menus on the right side of the bar.
//
var id=0;
$(function () {

    // First we hide all menus, but the one with all courses.
    //
	$(".supp").hide();
    var names = ["Vinspirit","Whisky,Malt","Calvados", "Grappa", "Brandy","Cognac","Okryddad sprit","Kryddad sprit","\u00c3\u2013l, Ale","Rom","Whisky, Grain"];
	
	$("#beer").show();
    $("#whisky").hide();
    $("#sprit").hide();


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
	
	
    // Here we put the different kinds of food into the respective menus.
    //
	
   var types = ["Brandy och Vinsprit, Vinsprit", "Calvados", "Whisky , Malt", "Grappa och Marc, Grappa","Brandy och Vinsprit, Brandy","Cognac","Okryddad sprit","Kryddad sprit","\u00c3\u2013l, Ale","Rom, M\u00c3\u00b6rk","Whisky, Grain"];
	var names = ["#Vinspirit","#Calvados","#WhiskyMalt", "#Grappa", "#Brandy","#Cognac","#Okryddadsprit","#Kryddadsprit","#Ale","#Rom","#WhiskyGrain"]; 
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
    // The function returns all food strings (created as divs) of a certain type (given as argument).
    //
function categorizeBeverages(type, arr) {
    var out = "";
    // Go through the array and collect all the items of the desired type.
    //
    for (var i = 0; i < arr.length; i++) {

        // if the item is of the desired type, then we add the HTML string to the collection variable.
        // Otherwise we skip to the next item.
        //
        if (arr[i].catgegory == type) {
            out += '<div id="' + "menuitem" + i + '" draggable="true" ondragstart="drag(event)">' + arr[i].name+ ' <span class="price">' + arr[i].priceinclvat + '</span><button class="supp" id="supp'+id+'" onclick="supp('+id+')"> X</button></div>';
			id++;
		}
    }
    // Once we are finished we return the resulting HTML string containing all the menu items for the desired menu.
    //
    return out;
};
