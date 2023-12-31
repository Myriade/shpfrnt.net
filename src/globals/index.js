// Import global styles
import '../styles/normalize.css';
import '../styles/global.scss';

// Place siteHeader and its syles
import siteHeader from '../views/siteHeader/siteHeader.html.js';
import '../views/siteHeader/siteHeader.js';
import '../views/siteHeader/siteHeader.scss';
document.getElementById('siteHeader').innerHTML = siteHeader();

// Place siteMain, its styles and its Event Handler
import siteMainHtml from '../views/siteMain/siteMain.html.js';
import '../views/siteMain/siteMain.scss';
import { productClickHandler, addProductToCart } from '../views/products/productsEventsHandler';
import { checkoutModalModifiers } from '../views/checkoutModal/checkoutModal.js';
import { depth3dImg } from '../views/products/depth3dImg.js';
async function siteMainAsync() {
  document.getElementById('siteMain').innerHTML = await siteMainHtml();
  productClickHandler();
  checkoutModalModifiers();
  depth3dImg();
}
siteMainAsync();

// Place checkoutModal and its styles
import checkoutModal from '../views/checkoutModal/checkoutModal.html.js';
import '../views/checkoutModal/checkoutModal.js';
import '../views/checkoutModal/checkoutModal.scss';
document.getElementById('checkoutModal').innerHTML = checkoutModal();

// Place aboutModal and its styles
import aboutModal from '../views/aboutModal/aboutModal.html.js';
import '../views/aboutModal/aboutModal.scss';
document.getElementById('aboutModal').innerHTML = aboutModal();

// Place siteFooter its styles and Handle modal's toggle
import siteFooter from '../views/siteFooter/siteFooter.html.js';
import '../views/siteFooter/siteFooter.scss';
import linkHandlers from '../views/siteFooter/siteFooter.js';
import { handleModals } from './modals.js';
async function siteFooterAsync() {
  document.getElementById('siteFooter').innerHTML = await siteFooter();
  linkHandlers();
  handleModals();
}
siteFooterAsync();