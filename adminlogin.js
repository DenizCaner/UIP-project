function validateAdminFormOnSubmit(theForm){

    var userName = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var i;

    for (i=0; i < DB.users.length; i++) {
        if ((userName == DB.users[i].username) && (password == DB.users[i].password)) {
        	if (DB.users[i].credentials == 0) {
                window.location.assign("./admin.html");
                return false;
        	}
        	alert("You are not an admin.");
        	return;
        }
    }

    alert("Wrong username or password.");
    return;
}

function validateFormOnSubmit(theForm){

    var userName = document.getElementById('username').value;
    // 存储 userName
    window.localStorage.setItem('username',userName);
    var password = document.getElementById('password').value;
    var i;

    for (i=0; i < DB.users.length; i++) {
        if ((userName == DB.users[i].username) && (password == DB.users[i].password)) {
            window.location.assign("./VIP_menu.html");
            return false;
        }
    }

    alert("Wrong username or password.");
    return;
}