

// ===================================================================================================================
// Two support functions that connect a table with its order table. This makes it possible to
// use a dynamic number of tables, rather than a fixed number. Is not used for this purpose currently.
//

$(function () {

    $(".supp").hide();
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
    // window.confirm("The Client pays his order "+x);
    if (window.confirm("The Client pays his order " )) {
        // the price is set to 0 for a new order
        $("#t" + tempid + " .tsum").text("0 kr.");
        $("#o" + tempid).text("Order :");
        //x.remove(x.selectedIndex);
    }
}

function supp(id){
    //order = $("#o"+tempid).html();

       /* elementCliquer = Event.element(evt);
        var myID = elementCliquer.id;*/
       // var idElt = this.getAttribute('id');
        window.confirm("Supp " +id);
       // var name=idElt.slice(4, idElt.length);
        var supp = $("#o"+tempid+ " #newId"+id).html();
        var all = $("#o"+tempid).html();
        if( window.confirm("Supp elt " +supp)){
            var dataSupp= getPrices(supp);
            var data= getPrices(all);
            var sum=sumTotal(data);
            var test=parseInt(dataSupp[0].innerText);
            if (window.confirm("Supp elt price " +test)){
                var newSum= sum-test;
                $("#t" + tempid + " .tsum").text(newSum + " kr.");
                 $("#o"+tempid+" #newId"+name).remove();
            }
        }
}
    /*var x = document.getElementById(this);
        if(){
            x.
        }*/
   // $("#o"+tempid+" .supp").hide();
    /*for ( int i=0; i<x.size; i++){
        out+=x[i];
    }*/
   // ;


/*
    var name=
        // remove the object
        o = $("#o"+tempid +" .div").html();
    // if( window.confirm("Supp " +o)) {
    $("#o"+tempid+" .div").remove();
//}*/

/*function supp(id){
    o = $("#menuitem"+id).html();
    if( window.confirm("Supp " +o)){
        $("#menuitem"+id).remove();
    }


}*/




