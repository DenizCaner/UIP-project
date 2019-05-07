
// Save an instant of the translation database

db = trans.translations;

// When the document is loaded the following function is initiated.

$(document).ready(function(){

	// If the local storage value is null or "en" then the language is set to english.
	// Otherwise the language is set to Swedish. The corresponding button is also selected.

	if ((localStorage.getItem("lang") == null) || (localStorage.getItem("lang") == "en")) {
		localStorage.setItem("lang", "en");
		$(".eng").addClass("chosen");
	}
	else {
		$(".swe").addClass("chosen");
	}

	// When the language buttons are clicked the following functions change the language.

	$(".eng").click(function(){
		localStorage.setItem("lang", "en");
		location.reload();
	});

	$(".swe").click(function(){
		localStorage.setItem("lang", "se");
		location.reload();
	});

	var language = localStorage.getItem("lang");

	// The following loop iterates through the translation file. If the key cannot be found as an ID for an element
	// on the page nothing happens and the loop continues. When a key is found that is used as an ID for an element
	// on the page we first see if the element has a placeholder text. If the element does then the translation is inserted
	// to the placeholder attribute. Otherwise we find all the elements with the key as ID and insert the translation as
	// inner HTMl-text.

	for (var i = 0; i < db.length; i++) {
		if (document.getElementById(db[i].key) == undefined) {
		}
		else {
			if (document.getElementById(db[i].key).hasAttribute("placeholder")) {
				document.getElementById(db[i].key).setAttribute("placeholder", db[i][language])
			}
			else {
				const queryAll = document.querySelectorAll('#'+db[i].key);
				console.log(queryAll);
				queryAll.forEach(query => {
					query.innerHTML = db[i][language];
				});
			}
		}
	}
});