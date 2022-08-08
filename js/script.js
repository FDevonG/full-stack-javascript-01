/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [];
quotes = [
	{
		quote: "I'm going to make him an offer he can't refuse.",
		source: "Marlon Brando",
		citation: "The Godfather",
		year: "1972",
		tag: 'Movie',
	},
	{
		quote: "Frankly, my dear, I don't give a damn.",
		source: "Clark Gable",
		citation: "Gone With the Wind",
		year: "1939",
		tag: 'Movie',
	},
	{
		quote: "Here's looking at you, kid.",
		source: "Humphrey Bogart",
		citation: "Casablanca",
		year: "1942",
		tag: 'Movie',
	},
	{
		quote: "You can't handle the truth!",
		source: "Jack Nicholson",
		citation: "A Few Good Men",
		year: "1992",
		tag: 'Movie',
	},
	{
		quote: "Go ahead, make my day.",
		source: "Clint Eastwood",
		citation: "Sudden Impact",
		year: "1983",
		tag: 'Movie',
	},
];

setInterval(printQuote, 15000);

/**
 * Returns a random quote
 * @method
 * @returns {Quote} quote object
 */
function getRandomQuote(){
	return quotes[Math.floor(Math.random() * quotes.length)];
}

/**
 * Retrieves a random quote and builds the html to display on the page
 * @method
 */
function printQuote(){
	const quote = getRandomQuote();
	let html = `<p class='quote'>${quote.quote}</p>`;
	html += `<p class='source'>${quote.source}`;
	if(quote.citation){
		html += `<span class='citation'>${quote.citation}</span>`;
	}
	if(quote.year){
		html += `<span class='year'>${quote.year}</span>`;   
	}
	if(quote.tag){
		html += `<span>${quote.tag}</span>`;
	}
	html += `</p>`;
	document.querySelector('body').style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
	document.getElementById('quote-box').innerHTML = html;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);