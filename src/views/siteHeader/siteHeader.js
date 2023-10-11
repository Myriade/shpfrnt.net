// imports
import { data } from '../../globals/data.js';
import { onCartAmountChange, showCartAmount } from '../../globals/cartAmount.js';

// Data variables 
const phrases = data.headerBanner.phrases;
const phraseChangeInterval = data.headerBanner.changeIntervalSeconds * 1000;

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

// Show and update cart Amount
function displayCartAmount () {
  const cartAmountElements = document.getElementById('cart-preview__amount');
  const currentCartAmount = showCartAmount();
  const displayedCartAmount = `(${currentCartAmount})`;
  cartAmountElements.textContent = displayedCartAmount;
}

onCartAmountChange(displayCartAmount);