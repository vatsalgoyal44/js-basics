const cowsay = require("cowsay");
const Quote = require("inspirational-quotes");

// console.log(Quote.getQuote().text);
console.log(
  cowsay.say({
    text: Quote.getQuote().text,
    e: "xx",
    T: "U ",
  })
);
