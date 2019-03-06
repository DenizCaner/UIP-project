$(function () {


    $("#beer").show();
    $("#whisky").hide();
    $("#sprit").hide();

    $("#starter").show();
    $("#maincourse").hide();
    $("#dessert").hide();

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

    $("#starters").click(function () { /* Here we show and hide the field. */
        $("#starter").show();
        $("#maincourse").hide();
        $("#dessert").hide();
    });

    $("#maincourses").click(function () { /* Here we show and hide the field. */
        $("#starter").hide();
        $("#maincourse").show();
        $("#dessert").hide();
    });

    $("#desserts").click(function () { /* Here we show and hide the field. */
        $("#starter").hide();
        $("#maincourse").hide();
        $("#dessert").show();
    });

    var array = [{"name": "Heineken Green", "price": "50", "catgegory": "drink"}, {"name": "Guinness III", "price":"60", "type": "drink"}];

    //var beverages = [];
    // Here we put the different kinds of food into the respective menus.
    //
    $(categorizeBeverages("\u00c3\u2013l, Ale", beverages)).appendTo("#beer");
    $(categorizeBeverages("\u00c3\u2013l, Porter och Stout", beverages)).appendTo("#beer");
    $(categorizeBeverages("\u00c3\u2013l, M\u00c3\u00b6rk lager", beverages)).appendTo("#beer");
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
    


    //$(categorizeBeverages("drink", beverages)).appendTo("#beer");    

    $(categorizeFoods("starter", food)).appendTo("#starter");
    $(categorizeFoods("main", food)).appendTo("#maincourse");
    $(categorizeFoods("dessert", food)).appendTo("#dessert");

    $("#vipLogin").click(function () { /* Here we show and hide the field. */
        window.open("./ Vip-login.html");
        window.close();
        return;
    });
    
    
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
            out += '<div id="' + "menuitem" + i + '" draggable="true" ondragstart="drag(event)">' + arr[i].name+ ' <span class="price">' + arr[i].priceinclvat + '</span></div>';
        }
    }
    // Once we are finished we return the resulting HTML string containing all the menu items for the desired menu.
    //
    return out;
};

function categorizeFoods(type, arr) {

    // The collection variable
    //
    var out = "";

    // Go through the array and collect all the items of the desired type.
    //
    for (var i = 0; i < arr.length; i++) {

        // if the item is of the desired type, then we add the HTML string to the collection variable.
        // Otherwise we skip to the next item.
        //
        if (arr[i].type == type) {
            out += '<div id="' + "menuitem" + i + '" draggable="true" ondragstart="drag(event)">' + arr[i].name + ' <span class="price">' + arr[i].price + '</span></div>';
        }
    }
    // Once we are finished we return the resulting HTML string containing all the menu items for the desired menu.
    //
    return out;
}
