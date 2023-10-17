import { getCartAmount, onCartAmountChange, formatCurrency, showCartAmount } from '../../globals/cartAmount.js';
import { data } from '../../globals/data.js';
let cartSummaryAmounts = ``;

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

function randomCaptcha () {
  const fichiers = data.captcha;
  const indexAleatoire = Math.floor(Math.random() * fichiers.length);
  const nomFichierAleatoire = fichiers[indexAleatoire];
  const imgElement = document.createElement('img');
  imgElement.src = '../../media/captcha/' + nomFichierAleatoire;
  document.body.appendChild(imgElement);
}
randomCaptcha();