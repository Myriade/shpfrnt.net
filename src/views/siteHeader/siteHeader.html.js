import { currentPhrase } from './siteHeader.js';

export default function () {
return `
  <h1>Shopfront</h1>
  <nav>
    <a href="#checkoutModal" class="checkout open-modal">Checkout</a>
    <a href="#checkoutModal" class="cart open-modal"><span class="cart__amount"></span></a>
  </nav>
  <aside>
    <p id="headerBannerPhrase">${currentPhrase}</p>
  </aside>
  `;
}