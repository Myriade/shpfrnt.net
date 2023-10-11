import { currentPhrase } from './siteHeader.js';

export default function () {
return `
  <h1>Shopfront</h1>
  <nav>
    <a href="#checkoutModal" class="checkout open-modal">Checkout</a>
    <a href="#checkoutModal" class="cart-preview open-modal"><span id="cart-preview__amount"></span></a>
  </nav>
  <aside>
    <p id="headerBannerPhrase">${currentPhrase}</p>
  </aside>
  `;
}