
db = trans.translations;

$(document).ready(function(){
	if (localStorage.getItem("lang") == null){
		localStorage.setItem("lang", "en");
	}

	$(".eng").click(function(){
		localStorage.setItem("lang", "en");
		location.reload();
	});

	$(".swe").click(function(){
		localStorage.setItem("lang", "se");
		location.reload();
	});
});

function translation (id) {
	var language = localStorage.getItem("lang");

	for (var i = 0; i < db.length; i++) {
		if (db[i].key == id) {
			document.getElementById(id).innerHTML = db[i][language];
		}
	}
}