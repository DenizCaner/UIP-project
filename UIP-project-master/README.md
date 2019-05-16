UIP-project

##Website map

This web is designed for three kinds of users:

1. Staff in the pub (Admin)
2. VIP customer could order beverage and checkout (VIP_Menu.htm need login) 
3. ordinary customer could only browe the menu (customer.html)


##How does admin work?

* Open the customer.html;
* Click the "Admin" button, redirect to adminlogin.html;
* Select any account in DBLoaded.js, input the username and password on adminlogin.html;
* Redirect to "admin.html"; 
* Congratulations, you can order now!


##How does VIP work?

* Open the customer.html
* Click the "VIP" button, redirect to VIP-login.html;
* Select any account in DBLoaded.js, input the username and password on VIP-login.html;
* Redirect to "VIP_Menu.html" (you have to login rather than open it directly)
* Congratulations, you can order now!


##Instructions of files
* DBLoaded.js stores the VIP account
* menuhandler.js stores function of the right menu (drag source) in admin.html
* stack.js stores undo/redo stack class
* translations.js stores the bilingual database
* translation.js stores the translation function
* admin.js stores the undo/redo, drag/drop and other functions of admin.html
* drop.js stores function of the left order (drop target) in admin.html
* menu.js stores the beverage and food database
* sessionStorage.js stores the database of vip's credit


##Developers:
* Anderfelt, Victor
* Baret, Isaline
* Caner, Eda Deniz
* Zhu, Hui