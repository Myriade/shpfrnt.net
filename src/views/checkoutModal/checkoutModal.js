import { getCartAmount, setCartAmount, onCartAmountChange, formatCurrency, showCartAmount, addRandomAmountOnClick } from '../../globals/cartAmount.js';
import { toggleModal } from '../../globals/modals.js';
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

// Validation input alphanumeric
function validateAlphaNumerique(inputValue) {
  var regex = /^[a-zA-Z0-9]+$/;
  return regex.test(inputValue);
}

// Captcha input change Handler
function captchaInputChangeHandler (elem, event) {
  // Security validation : removes the last character if it's not alphanumeric
  if ( !validateAlphaNumerique(event.target.value) ) {
    event.target.value = event.target.value.slice(0, -1);
  }
  // Enable checkout button when input has a value
  const checkoutBtn = elem.querySelector('.button.checkout');
  if (event.target.value) { 
    checkoutBtn.classList.remove('button--disabled')
  } else { 
    checkoutBtn.classList.add('button--disabled')
  }
}

// Reset cart amount on Checkout btn Click
function checkoutClickHandler (elem) {
  const checkoutModal = document.getElementById('checkoutModal');
  const modalContent = checkoutModal.querySelector('.modal-content');
  const checkoutButton = elem.querySelector('.button.checkout');
  const captchaInput = elem.querySelector('#captcha-input');
  checkoutButton.addEventListener('click', e => {
    if ( !e.target.classList.contains('button--disabled') ) {
      setCartAmount(0); // reset cartAmount à zéro
      captchaInput.value = ''; // reset captcha input value
      checkoutButton.classList.add('button--disabled'); // disable Checkout btn
      modalContent.classList.add('animated'); // trigger shake animation
      // Close Modal after 2 seconds
      setTimeout( () => {
        checkoutModal.style.display = 'none'; // close modal
        modalContent.classList.remove('animated'); // reset animation for next time
      }, 1000 );
    }
  });
}

// functions bundle to execute after modal markup is initialized
function checkoutModalModifiers() {
  const checkoutModal = document.getElementById('checkout-modal');
  const captchaInput = checkoutModal.querySelector('#captcha-input');
  discountClickHandler(checkoutModal);
  captchaInput.addEventListener( 'input', event => { 
    captchaInputChangeHandler(checkoutModal, event) 
  });
  checkoutClickHandler(checkoutModal);
}

export { randomCaptcha, checkoutModalModifiers };