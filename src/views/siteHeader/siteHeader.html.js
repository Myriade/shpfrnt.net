import { currentPhrase } from './siteHeader.js';

export default function () {
return `
  <h1>Shopfront</h1>
  <nav>
    <a href="#checkoutModal" class="button button--pill checkout open-modal">Checkout</a>
    <a href="#checkoutModal" class="cart-preview button button--pill button--modal open-modal"><span id="cart-preview__amount"></span></a>
  </nav>
  <aside>
    <p id="headerBannerPhrase">${currentPhrase}</p>
  </aside>
  `;
}