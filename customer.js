$(function () {



    // First we hide all menus, but the one with all courses.
    //
    $("#beer").show();
    $("#whiskey").hide();
    $("#sprit").hide();
    $("#alcoholFree").hide();

    // Here we define the action when switching between menus. We add the activity as a click-function,
    // which is connected to the respective "tabs". The actual switching is done by
    // showing and hiding the fields.
    //
    // The keyword "slow", in combination with the menu z-order gives a
    // nice effect of physically switching between the different menus.
    //

    // Here we show the beer menu and hide all other menus.
    //
    $("#beers").click(function () { /* Here we show and hide the field. */
        $("#beer").show();
        $("#whisky").hide();
        $("#sprit").hide();
        $("#alcoholFree").hide();
    });

    // Here we show the desserts menu and hide all other menus.
    //
    $("#whiskys").click(function () { /* Here we show and hide the field. */
        $("#beer").hide();
        $("#whisky").show();
        $("#sprit").hide();
        $("#alcoholFree").hide();
    });

    // Here we show the main course menu and hide all other menus.
    //
    $("#sprits").click(function () { /* Here we show and hide the field. */
        $("#beer").hide();
        $("#whisky").hide();
        $("#sprit").show();
        $("#alcoholFree").hide();
    });

    // Here we show the starters menu and hide all other menus.
    //
    $("#alcoholFrees").click(function () { /* Here we show and hide the field. */
        $("#beer").hide();
        $("#whisky").hide();
        $("#sprit").hide();
        $("#alcoholFree").show();
    });

    //var array = [{"name": "Heineken Green", "price": "50", "type": "drink"}, {"name": "Guinness III", "price":"60", "type": "drink"}];
    var array = new Array();
    //here we read the json file into an array
    $.getJSON('beer_eng.json',function (data) {
       array = data;
    });

    


    // Here we put the different kinds of food into the respective menus.
    //
    $(getBeverages("\u00c3\u2013l, Ale", array)).appendTo("#beer");
    $(getBeverages("Whisky", array)).appendTo("#whisky");
    $(getBeverages("Okryddad sprit", array)).appendTo("#sprit");
    $(getBeverages("drink", array)).appendTo("#beer");    


$("#vipLogin").click(function () { /* Here we show and hide the field. */
    window.open("./ Vip-login.html");
    window.close();
    return;
});
    
    
});



// ===================================================================================================================
    // The function returns all food strings (created as divs) of a certain type (given as argument).
    //
function getBeverages(type, arr) {
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
} 
