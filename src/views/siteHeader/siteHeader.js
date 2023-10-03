// imports
import { loadedData } from '../../dataLoader';
const { getCartAmount, setCartAmount, onChange } = require('../../cartAmount.js');

// Data variables 
const data = loadedData;
const phrases = data.headerBanner.phrases;
const phraseChangeInterval = data.headerBanner.changeIntervalSeconds * 1000;
const cartChangeInterval = data.cart.changeIntervalSeconds * 1000;
const changeIntervalRange = data.cart.randomIncrementAmount;

// Banner Phrase : Set first random phase
let indexAleatoire = Math.floor(Math.random() * phrases.length);
export let currentPhrase = phrases[indexAleatoire];

// Banner Phrase : Change phrase every X seconds 
// Set phrases and time inverval in data.json
function changePhrase() {
  const newIndex = Math.floor(Math.random() * phrases.length);
  currentPhrase = phrases[newIndex];
  const phraseElement = document.getElementById('headerBannerPhrase');
  phraseElement.textContent = currentPhrase;
}
setInterval(changePhrase, phraseChangeInterval);

// Cart : Change cart Amount every X seconds 
function changeAmountOnTimeInterval() {
  const min = changeIntervalRange.min;
  const max = changeIntervalRange.max;
  const randomDecimalNumber = Math.random() * (max - min) + min;
  const newAmount = Math.round((randomDecimalNumber + getCartAmount()) * 100) / 100;
  setCartAmount(newAmount);
}
setInterval(changeAmountOnTimeInterval, cartChangeInterval);

// Cart : get, set, format and show the Cart Amount value
const { format: formatCurrency } = new Intl.NumberFormat('fr-CA', {
  minimumFractionDigits: 2
});
function updateCartAmountDisplay(newAmount) {
  const currentCartAmount = getCartAmount();
  if (currentCartAmount || currentCartAmount < 100000) {
    const cartElement = document.getElementById('cart__amount');
    const formattedCurrency = formatCurrency(currentCartAmount);
    const renderedCartAmount = `(${formattedCurrency}\u00A0$)`;
    cartElement.textContent = renderedCartAmount;
  }
}
onChange(updateCartAmountDisplay);