//Katie Greenwood, 12.11.25, WEB114 Final
const quote = document.querySelector("#quote-btn");
const quoteBox = document.querySelector("#quote");
//establishing the div ids in the js
const quotes = ["Deep, slow breaths.", "Touch some grass for awhile.", "You can get through this!", "Take a break, drink some water, get some air.", "This (finals week) too shall pass.", "Cs get degrees!"];
//typing out the quotes to be selected
function choose(quotes) {
    let randomQuote = Math.floor(Math.random() * quotes.length);
    return quotes[randomQuote];
};
//function to pick a random quote from the array
quote.addEventListener("click", function(){
    quoteBox.textContent = choose(quotes)
});
//apply the picked quote to the text box, and do it as many times as the button is clicked!