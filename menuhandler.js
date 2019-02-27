
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


   $("#allmenu").click(function () {
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
	
	$("#Vinspirits").click(function () {
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

	   $("#WhiskyMalts").click(function () {
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
	
	$("#Grappas").click(function () {
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
	
	$("#Brandys").click(function () {
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
	
	$("#Calvados").click(function () {
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
	
	$("#Cognacs").click(function () {
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
	
	$("#Okryddadsprits").click(function () {
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
	
	$("#Kryddadsprits").click(function () {
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
	
	$("#Ales").click(function () {
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
	
	$("#WhiskyGrains").click(function () {
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

});

// get all the beverages from the database
function getAll() {

var temp = "";

var types = ["Brandy och Vinsprit, Vinsprit", "Calvados", "Whisky , Malt", "Grappa och Marc, Grappa","Brandy och Vinsprit, Brandy","Cognac","Okryddad sprit","Kryddad sprit","\u00c3\u2013l, Ale","Rom, M\u00c3\u00b6rk","Whisky, Grain"];
var names = ["Vinspirit","Whisky & Malt","Calvados", "Grappa", "Brandy","Cognac","Okryddad sprit","Kryddad sprit","\u00c3\u2013l, Ale","Rom","Whisky, Grain"];

len = types.length;

for (var i = 0; i < names.length; i++) {
        temp += getBeverage(types[i], allBeverages()) +"<br>";
}
return temp;
}

// ===================================================================================================================
// get the beverages from a certain type
//
function getBeverage(type, arr) {
    var out = "";
	out += '<div> <strong>' + type + '</strong><br><hr></div>';
    for (var i = 0; i < arr.length; i++) {

        if (arr[i][1] == type) {
            out += '<div id="' + "menuitem" + i + '" draggable="true" ondragstart="drag(event)">' + arr[i][0] + ' <span class="price">' + arr[i][2] + 'sek</span></div>';
        }

    }

    return out;
}
// ===================================================================================================================
// This function returns an array, which can be read as a JSON object.
function allBeverages() {

    // Using a local variable to collect the items.
    var collector = [];

    for (i = 0; i < DB2.spirits.length; i++) {
        collector.push([DB2.spirits[i].name, DB2.spirits[i].catgegory,DB2.spirits[i].priceinclvat]);
    };

    return collector;
}
// ===================================================================================================================
// END OF FILE
// ===================================================================================================================
