let emote = document.getElementById("emote");
let quote = document.getElementById("quote");
let btn = document.getElementById("btn");
console.log();
let url = `https://api.chucknorris.io/jokes/random`;

function getQuotes() {
  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      quote.textContent = response.value;
    });
}
getQuotes();
btn.addEventListener("click", getQuotes);
