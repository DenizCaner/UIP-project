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
    // 存储 userName
    window.localStorage.setItem('username',userName);
    var password = document.getElementById('password').value;
    var i;

    for (i=0; i < DB.users.length; i++) {
        if ((userName == DB.users[i].username) && (password == DB.users[i].password)) {
            window.open("./VIP_Menu.html");
            window.close();
            return;
        }
    }

    alert("Wrong username or password.");
}