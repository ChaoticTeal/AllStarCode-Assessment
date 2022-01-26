const monikers = ["The Wall-Crawling Wonder!", "The Amazing Acrobatic Arachnid!", "Friendly Neighborhood Hero!", "The Gravity-Defying Guardian!", "The Quip-Slinging Spider!"]
var moniker;

function Setup()
{
	moniker = document.getElementById("moniker");
	setInterval(UpdateMoniker, 10000);
}

function UpdateMoniker()
{
	var titleNumber = Math.floor(Math.random() * monikers.length);
	moniker.textContent = monikers[titleNumber];
}