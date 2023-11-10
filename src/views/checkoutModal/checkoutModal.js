import { getCartAmount, onCartAmountChange, formatCurrency, showCartAmount, addRandomAmountOnClick } from '../../globals/cartAmount.js';
import { data } from '../../globals/data.js';
let cartSummaryAmounts = ``;

// Display and uptade cart subtotal, taxes & total amounts
function displayCartAmounts () {
  const cartSummaryElement = document.getElementById('cart_summary');
  const subtotal = showCartAmount();
  
  const cartAmount = getCartAmount();
  const taxes = cartAmount * 0.14975;
  const shipping = (Math.ceil(cartAmount * 0.05)) ;
  const total = formatCurrency(cartAmount + taxes + shipping);
  
  cartSummaryAmounts = `
    <tr class='subtotal'><td>Subtotal</td><td>${subtotal}</td></tr>
    <tr class='shipping'><td>Shipping</td><td>${formatCurrency(shipping)}</td></tr>
    <tr class='taxes'><td>Taxes</td><td>${formatCurrency(taxes)}</td></tr>
    <tr class='total'><td>Total</td><td>${total}</td></tr>
  `
  cartSummaryElement.innerHTML = cartSummaryAmounts;
}
onCartAmountChange(displayCartAmounts);

// Captcha images
const randomCaptcha = function () {
  const fichiers = data.captcha;
  const indexAleatoire = Math.floor(Math.random() * fichiers.length);
  const nomFichierAleatoire = fichiers[indexAleatoire];
  const imgElem = document.querySelector('#captcha img');
  imgElem.src = '/assets/captcha/' + nomFichierAleatoire;
}

// Apply Discount Click Handler
function discountClickHandler (elem) {
  const discountButton = elem.querySelector('.button.discount');
  discountButton.addEventListener('click', addRandomAmountOnClick);
}

// Enable Checkout btn when Captcha input has an value
function enableCheckoutBtn (elem) {
  const checkoutBtn = elem.querySelector('.button.checkout');
  const captchaInput = elem.querySelector('#captcha-input');
  captchaInput.addEventListener( 'input', 
  e => { 
    e.target.value ? checkoutBtn.classList.remove('button--disabled') : checkoutBtn.classList.add('button--disabled')
  });
}

// Reset cart amount on Checkout btn Click


// functions bundle to execute after modal markup is initialized
function checkoutModalModifiers() {
  const chekoutModal = document.getElementById('checkout-modal');
  discountClickHandler(chekoutModal);
  enableCheckoutBtn(chekoutModal);
}

export { randomCaptcha, checkoutModalModifiers };