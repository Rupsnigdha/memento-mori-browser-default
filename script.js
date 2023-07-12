const birth = new Date("April 18, 2003 00:00:00").getTime();
const death = new Date("April 18, 2073 00:00:00").getTime();
function timer() {
  let now = new Date().getTime();
  let timeLeft = death - now;
  let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  let percentageLeft = (timeLeft / (death - birth)) * 100;
  document.getElementById("countdown-days").innerHTML = days;
  document.getElementById("countdown-hours").innerHTML = hours;
  document.getElementById("countdown-minutes").innerHTML = minutes;
  document.getElementById("countdown-seconds").innerHTML = seconds;

  document.getElementById("header-progress-value").innerHTML =
    Math.ceil(100 - percentageLeft) + "%";
  document.getElementById("progress-fill").style.width = `${
    100 - percentageLeft
  }%`;
}

async function fetchQuote() {
  const url = "https://stoic-quotes.com/api/quote";
  const response = await fetch(url);
  const text = await response.json();
  console.log(text);
  document.getElementById("quote-text").innerHTML = text.text;
  document.getElementById("quote-author").innerHTML = "— " + text.author;
}

timer();
fetchQuote();
const tick = setInterval(timer, 1000);
