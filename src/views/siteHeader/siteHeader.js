// imports
import data from '../../../data.json';
const { getCartAmount, setCartAmount, onChange } = require('../../cartAmount.js');

// Internal variables 
const phrases = data.headerBanner.phrases;
const phraseChangeInterval = data.headerBanner.changeIntervalSeconds * 1000;
const cartChangeInterval = data.cart.changeIntervalSeconds * 1000;
const changeIntervalRange = data.cart.randomIncrementAmount;
let indexAleatoire = Math.floor(Math.random() * phrases.length);
let currentCartAmount = 0;

// Exported variables
export let currentPhrase = phrases[indexAleatoire];
export let renderedCartAmount = "";

// Change Banner phrase every X seconds 
// Set phrases and time inverval in data.json
function changePhrase() {
  const newIndex = Math.floor(Math.random() * phrases.length);
  currentPhrase = phrases[newIndex];
  const phraseElement = document.getElementById('headerBannerPhrase');
  phraseElement.textContent = currentPhrase;
}
setInterval(changePhrase, phraseChangeInterval);

// Change cart Amount every X seconds 
function changeAmountOnTimeInterval() {
  const min = changeIntervalRange.min;
  const max = changeIntervalRange.max;
  const randomDecimalNumber = Math.random() * (max - min) + min;
  const incrementAmount = Math.round(randomDecimalNumber * 100) / 100;
  setCartAmount(getCartAmount() + incrementAmount);
}
setInterval(changeAmountOnTimeInterval, cartChangeInterval);

// Get, set and show the Cart Amount value
function updateCartAmountDisplay(newAmount) {
  currentCartAmount = getCartAmount();
  const cartElement = document.getElementById('cart');
  if (currentCartAmount) {
    renderedCartAmount = `(${currentCartAmount}$)`;
    cartElement.textContent = renderedCartAmount;
  }
}
onChange(updateCartAmountDisplay);