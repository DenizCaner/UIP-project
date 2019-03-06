
 // this function help to transfer JSON data to html frame and loop it 

window.onload=function() {


    


    for (var i = 0; i < beverages.length; i++) {

        var liStr = " <li class=\"list_collection\"><div class=\"beverage_card\"><div class=\"beverage_img\"></div><div class=\"beverage_name\"><span class=\"name_data\" id=\"beer_name\">" +
            beverages[i].name + "</span><span \n" +
            "class=\"type\">" +
            " " + beverages[i].catgegory +
            "</span></div><div class=\"year\"><p>" +
            "Year:" + " " + beverages[i].introduced +
            "</p></div><div class=\"price\"><p>" + beverages[i].priceinclvat + " " + "Kr" +
            "</p></div><div class=\"volume\"><p>" + beverages[i].alcoholstrength + " " + "alcohol" +
            "</p></div><div class=\"toolBar\"><button class=\"normalbutton add-to-cart\" data-id='" + beverages[i].name + "'>Add to shopping cart</button></div></div></li>";
        $('#beverage_list').append(liStr);
        console.log(liStr);


    }

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
    var cartEl =     document.querySelector(".shopping-cart-list"),
        productQuantityEl = document.querySelector(".product-quantity"),
        emptyCartEl = document.querySelector(".empty-cart-btn"),
        cartCheckoutEl = document.querySelector(".cart-checkout"),
        totalPriceEl = document.querySelector(".total-price");
    var beverageInCart = [];
    var calculateTotalPrice = function() {
        return beverageInCart.reduce(function(total, item) {
            return total + (item.beverage.priceinclvat *  item.quantity);
        }, 0);
    }
    var generateCartList = function() {

        cartEl.innerHTML = "";

        beverageInCart.forEach(function(item) {
            var li = document.createElement("li");
            li.innerHTML = `${item.quantity} ${item.beverage.name} - ${item.beverage.priceinclvat * item.quantity} Kr `;
            cartEl.appendChild(li);
        });

        productQuantityEl.innerHTML = beverageInCart.length;

        generateCartButtons();
    }
    var generateCartButtons = function() {
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
    //增加事件监听，如果酒卡被点击，则判断是不是add-to-cart的按钮，如果是，调用addToCart方法以更新beverageInCart数组，并调用生成购物车方法
    var setupListeners = function() {

        var blist = document.querySelector('#beverage_list');
        blist.addEventListener("click", function(event) {

            var el = event.target;
            if(el.classList.contains("add-to-cart")) {
                var elId = el.dataset.id;
                addToCart(elId);

            }
        });
        emptyCartEl.addEventListener("click", function(event) {
            if(confirm("Are you sure to empty the shopping cart?")) {
                beverageInCart = [];
            }
            generateCartList();
        });


    }

    var addToCart = function(name){
        if (beverageInCart.length === 0){
            //The length of shopping cart is o, and a beverage will be added
            console.log(findBeverage(name));
            beverageInCart.push({'beverage':findBeverage(name), "quantity":1});
        }else{
            //遍历购物车，如果找到这件酒，增加数量1，找不到，增加1件酒
            var found = false;
            beverageInCart.forEach(function (item){
                console.log(item);
               if (item.beverage.name==name){
                   found = true;
                   item.quantity++;
               }
            });
            if (!found){
                beverageInCart.push({'beverage':findBeverage(name), "quantity":1});
            }
        }
        generateCartList();
    }
    var findBeverage = function(name){
        var ret;
        beverages.forEach(function (item,index){
           if (item.name === name){
               console.log(item);
               ret = item;

           }
        });
        return ret;
    }

    setupListeners();

}










