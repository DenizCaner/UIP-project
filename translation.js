
db = trans.translations;

$(document).ready(function(){
	if ((localStorage.getItem("lang") == null) || (localStorage.getItem("lang") == "en")) {
		localStorage.setItem("lang", "en");
		$(".eng").addClass("chosen");
	}
	else {
		$(".swe").addClass("chosen");
	}

	$(".eng").click(function(){
		localStorage.setItem("lang", "en");
		location.reload();
	});

	$(".swe").click(function(){
		localStorage.setItem("lang", "se");
		location.reload();
	});

	var language = localStorage.getItem("lang");

	for (var i = 0; i < db.length; i++) {
		if (document.getElementById(db[i].key) == undefined) {
		}
		else {
			document.getElementById(db[i].key).innerHTML = db[i][language];
		}
	}
});