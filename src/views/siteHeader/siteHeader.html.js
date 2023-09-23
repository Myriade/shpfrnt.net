import { currentPhrase } from './siteHeader.js';

export default function () {
return `
  <h1>Shopfront</h1>
  <nav>
    <a href="#" class="checkout">Checkout</a>
    <a href="#" class="cart"><span id="cart__amount"></span></a>
  </nav>
  <aside>
    <p id="headerBannerPhrase">${currentPhrase}</p>
  </aside>
  `;
}