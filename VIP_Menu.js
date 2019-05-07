
 var dragItem = {};
 var undoStack = [];
 var redoStack = [];

// this function help to transfer JSON data to html frame and append it, var beverages

window.onload=function() {


	// show Credit in the account of this VIP user, "userSEK" is defined in sessionStorage.js line 297
    
    document.getElementById("credit").innerText = userSEK + "Kr";
    var language = localStorage.getItem("lang");

    for (var i = 0; i < beverages.length; i++) {

        // The following if-statement is set in order to change the translation for the beverage list.
        // The ID did not register in the translation-method (translation.js). Ugly but functional solution.

        if (language == "en") {
            var liStr = " <li class=\"list_collection\" draggable=\"true\" ondragstart=\"drag(this)\"><div class=\"beverage_card\"><div class=\"beverage_img\"></div><div class=\"beverage_name\"><span class=\"name_data\" id=\"beer_name\">" +
            beverages[i].name + "</span><span \n" +
            "class=\"type\">" +
            " " + beverages[i].catgegory +
            "</span></div><div class=\"year\"><p>" +
            "Year:" + " " + beverages[i].introduced +
            "</p></div><div class=\"price\"><p>" + beverages[i].priceinclvat + " " + "Kr" +
            "</p></div><div class=\"volume\"><p>" + beverages[i].alcoholstrength +
            "</p></div><div class=\"toolBar\"><button class=\"normalbutton add-to-cart\" data-id='" + beverages[i].name + "'>Add to shopping cart</button></div></div></li>";
        }
        else {
            var liStr = " <li class=\"list_collection\" draggable=\"true\" ondragstart=\"drag(this)\"><div class=\"beverage_card\"><div class=\"beverage_img\"></div><div class=\"beverage_name\"><span class=\"name_data\" id=\"beer_name\">" +
            beverages[i].name + "</span><span \n" +
            "class=\"type\">" +
            " " + beverages[i].catgegory +
            "</span></div><div class=\"year\"><p>" +
            "År:" + " " + beverages[i].introduced +
            "</p></div><div class=\"price\"><p>" + beverages[i].priceinclvat + " " + "Kr" +
            "</p></div><div class=\"volume\"><p>" + beverages[i].alcoholstrength +
            "</p></div><div class=\"toolBar\"><button class=\"normalbutton add-to-cart\" data-id='" + beverages[i].name + "'>Lägg till i varukorg</button></div></div></li>";
        }

        $('#beverage_list').append(liStr);
        //console.log(liStr);


    }

    // here is the filter and search function

    let filterInput = document.getElementById("myInput");
    filterInput.addEventListener('keyup', filterBeers);

    function filterBeers() {
        // Get value of Input
        let filterValue = document.getElementById("myInput").value.toLowerCase();
        // Get names ul #beverage_list
        let ul = document.getElementById("beverage_list");
        // Get lists from ul
        let li = ul.querySelectorAll("li.list_collection");
        // Loop through list_collection List
        for (let i = 0; i < li.length; i++) {
            //console.log(li[i].getElementsByTagName('span')[0].innerHTML);
            let beer_name = li[i].getElementsByTagName('span')[0]
            // if matched
            if (beer_name.innerHTML.toLowerCase().indexOf(filterValue) > -1) {
                li[i].style.display = '';
            } else {
                li[i].style.display = 'none';
            }
        }
    }

// this is the Jquery and DOM of "go to top" button     

    $("#topArrow").click(function () {
        $(document).scrollTop(0);
    })


    var topArrow = document.getElementById('topArrow');
    topArrow.onclick = function () {
        document.scrollTop = document.body.scrollTop = 0;
    }


    /* this is the search bar with filter function; the following codes shown in VIP_Menu.html file

    <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for beverage.." title="Type in a name">
    </div>
    */
    

    // here define the different variables by using querySelector() method, to get the first element in the document with class "" in () 
    var cartEl =     document.querySelector(".shopping-cart-list"),
        productQuantityEl = document.querySelector(".product-quantity"),
        emptyCartEl = document.querySelector(".empty-cart-btn"),
        cartCheckoutEl = document.querySelector(".cart-checkout"),
        totalPriceEl = document.querySelector(".total-price");

    var beverageInCart = []; //defin beverageInCart as an array

    var calculateTotalPrice = function() {
        return beverageInCart.reduce(function(total, item) { //get the sum of the numbers in the array by using Array reduce() method
            return total + (item.beverage.priceinclvat *  item.quantity); // numbers are in()
        }, 0);
    } // here calculate the total price of the beverage in shopping cart, by getting "priceinclvat" from beverage. JSON file

    var generateCartList = function() {

        cartEl.innerHTML = ""; //write the shopping cart list in html

        beverageInCart.forEach(function(item) {  // list each item in array by using forEach() method
            // var li = document.createElement("li"); // create a <li> element in html
            // li.innerHTML = `${item.quantity} ${item.beverage.name} - ${item.beverage.priceinclvat * item.quantity} Kr`;
            var liHTML = '<li style="position:relative" data-id="'+item.beverage.name+'">'+`${item.quantity} ${item.beverage.name} - ${item.beverage.priceinclvat * item.quantity} Kr`+'<div class="del">×</div></li>'
            //li.innerHTML = '<div><span>' + item.beverage.name + ' ' + item.beverage.priceinclvat + ' Kr'  + '<button class=\"supp\"  > X</button>' + '</span></div>'
            //console.log(li);
            $(cartEl).append(liHTML)


        }); // use `string text ${expression} string text` as template literals, to show the quantity, the name and the price (price*quantity)

        productQuantityEl.innerHTML = beverageInCart.length; // the quantity of product equals to the number of beverages in cart 

        generateCartButtons(); //generate the checkout button
    }



    var generateCartButtons = function() { //make the button hidden if there's nothing in shopping cart
        if(beverageInCart.length > 0) {
            emptyCartEl.style.display = "block";
            cartCheckoutEl.style.display = "block"
            totalPriceEl.innerHTML =  calculateTotalPrice() + " Kr";
        } else {
            emptyCartEl.style.display = "none";
            cartCheckoutEl.style.display = "none";
        }
    }
    // Setting up listeners for click event on all products and Empty Cart button as well
    var setupListeners = function() {
        
        var blist = document.querySelector('#beverage_list'); // define
        blist.addEventListener("click", function(event) { // when clicking, an event is triggered

            var el = event.target; // define the click button/target as class "add-to-cart" in html
            if(el.classList.contains("add-to-cart")) { //if click
                var elId = el.dataset.id; //find the id in the database
                addToCart(elId); // see line137

            }
        });
        emptyCartEl.addEventListener("click", function(event) { // when clicking the "empty" button, an popup is triggered
            $('#pop3').simplePopup(); // use popup jquery here
        });

        // if purchase box clicked yes, userSEK = userSEK - calculateTotalPrice()
        var moneyPay = document.querySelector('#payYes');
        moneyPay.addEventListener("click",function(event){
        userSEK = userSEK - calculateTotalPrice();
  		document.getElementById("credit").innerText = userSEK + "Kr";
        beverageInCart = [];
        generateCartList(); 
        })
        // if empty confirm box clicked yes, clear beverageInCart and generateCartList()
        var emptyCartYes = document.querySelector('#emptyYes');
        emptyCartYes.addEventListener("click",function(event){
        	beverageInCart = [];
        	generateCartList(); 
        });


    }

    window.addToCart = function(name){ //define the addToCart
        // debugger
        if (beverageInCart.length === 0){
            //The length of shopping cart is o at the beginning, and then a beverage will be added
            //console.log(findBeverage(name));
            beverageInCart.push({'beverage':findBeverage(name), "quantity":1}); // find the beverage through the "name" in database (JSON file), use push() method to add new items to the end of an array and return the new length
        }else{
            //If find the beverage, add one in quantity
            var found = false;
            beverageInCart.forEach(function (item){ //list each item in the array "beverageInCart"
                //console.log(item);
               if (item.beverage.name==name){ //if find the name
                   found = true;
                   item.quantity++;
               }
            });
            if (!found){
                beverageInCart.push({'beverage':findBeverage(name), "quantity":1});
            }
        }
        var temp = $.extend(true, [], beverageInCart);
        undoStack.push(temp);
        console.log(undoStack);
        redoStack=[];
        generateCartList();
    }
    window.findBeverage = function(name){
        var ret;
        beverages.forEach(function (item,index){
           if (item.name === name){
               //console.log(item);
               ret = item;

           }
        });
        return ret;
    }

    setupListeners();


    var generatePayButton = function() { //make the button hidden if checkout button is not clicked
        if(beverageInCart.length > 0) {
            emptyCartEl.style.display = "block";
            cartCheckoutEl.style.display = "block"
            totalPriceEl.innerHTML =  calculateTotalPrice() + " Kr";
        } else {
            emptyCartEl.style.display = "none";
            cartCheckoutEl.style.display = "none";
        }
    }
    //console.log(calculateTotalPrice());
    //console.log(userSEK);
// Here we add the alter when "checkout" button is clicked
	$("#Checkout").click(function() {
        // if price in cart is lower than or equal to userSEK
        payTotal = calculateTotalPrice();
        if (payTotal <= userSEK){
 			$('#pop1').simplePopup();  // pop up "are you sure to pay now?"
		} else {
			$('#pop2').simplePopup();  // pop up "you have to top up."
		}
    })
    $("#undo").click(function(){
        if(undoStack.length>0){
            var top = undoStack.pop();
            redoStack.push(top);
            beverageInCart = undoStack[undoStack.length-1] ||[];
            generateCartList();
        }
        
    })
    $("#redo").click(function(){
        if(redoStack.length>0){
            var top = redoStack.pop();
            undoStack.push(top);
            beverageInCart = top;
            generateCartList();
        }
        
    })
    $(".shopping-cart-list").on("click",".del",function(){
        $(this).closest('li').remove();
        var temp = $(this).closest('li').attr("data-id");
        console.log(beverageInCart)
        for(var i=0;i<beverageInCart.length;i++){
            if(beverageInCart[i].beverage.name==temp){
                beverageInCart.splice(i, 1);
            }
        }
        var temp = $.extend(true, [], beverageInCart);
        undoStack.push(temp);
        redoStack=[];
        generateCartList();
    })
}


function allowDrop(e){
    e.preventDefault();
}
function drag(t){
    dragItem = $(t).find('.add-to-cart').attr("data-id");
}
function drop(){
    addToCart(dragItem);
}

		






