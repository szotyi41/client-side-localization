/* *@beta *@release */

var lang = {};

$(document).ready(function() {
	localize();
});

function translate(id) {
	if(typeof id != "undefined") {
		var key = id.toLowerCase();
		if(typeof lang[key] != "undefined") {
			return lang[key];
		}
	}

	return id;
}

function localize() {
	var translated = 0;
	var elements = document.getElementsByClassName("content")[0].getElementsByTagName("*");
	for(var i = 0; i < elements.length; i++) {
		if(elements[i].hasAttribute("translate")) {
			if(typeof lang[elements[i].getAttribute("translate")] != "undefined") {
				elements[i].innerHTML = lang[elements[i].getAttribute("translate")];
				translated++;
			}
		}
	}

	console.log("Translated: " + translated);
}

function formatNumber(number = 0, currency = "")
{
	return (parseInt(number) || 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + currency;
}


function formatPercent(number) 
{
	if(number == Infinity) number = 0;
	return (parseFloat(number) || 0).toFixed(2) + "%";
}