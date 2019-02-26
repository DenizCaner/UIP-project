function validateAdminFormOnSubmit(theForm){

    var userName = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var i;

    for (i=0; i < DB.users.length; i++) {
        if ((userName == DB.users[i].username) && (password == DB.users[i].password)) {
        	if (DB.users[i].credentials == 0) {
                window.open("./admin.html");
                window.close();

                return;
        	}
        	alert("You are not an admin.");
        	return;
        }
    }

    alert("Wrong username or password.");
}

function validateFormOnSubmit(theForm){

    var userName = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var i;

    for (i=0; i < DB.users.length; i++) {
        if ((userName == DB.users[i].username) && (password == DB.users[i].password)) {
            window.open("C:/Projects/User%20Interface%20Programming/UIP-project/admin.html");
            return;
        }
    }

    alert("Wrong username or password.");
}