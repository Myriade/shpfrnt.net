import { currentPhrase } from './siteHeader.js';

export default function () {
return `
  <h1>Shopfront</h1>
  <nav>
    <a href="#" class="checkout open-modal">Checkout</a>
    <a href="#" class="cart open-modal"><span id="cart__amount"></span></a>
  </nav>
  <aside>
    <p id="headerBannerPhrase">${currentPhrase}</p>
  </aside>
  `;
}