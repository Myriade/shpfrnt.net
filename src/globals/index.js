// Import global styles
import '../styles/normalize.css';
import '../styles/global.scss';

// Place siteHeader and its syles
import siteHeader from '../views/siteHeader/siteHeader.html.js';
import '../views/siteHeader/siteHeader.js';
import '../views/siteHeader/siteHeader.scss';
document.getElementById('siteHeader').innerHTML = siteHeader();

// Place siteMain and its styles
import siteMain from '../views/siteMain/siteMain.html.js';
import '../views/siteMain/siteMain.scss';
document.getElementById('siteMain').innerHTML = siteMain();

// Place siteFooter and its styles
import siteFooter from '../views/siteFooter/siteFooter.html.js';
import '../views/siteFooter/siteFooter.scss';
document.getElementById('siteFooter').innerHTML = siteFooter();

// Place checkoutModal and its styles
import checkoutModal from '../views/checkoutModal/checkoutModal.html.js';
import '../views/checkoutModal/checkoutModal.scss';
document.getElementById('checkoutModal').innerHTML = checkoutModal();

// Place aboutModal and its styles
import aboutModal from '../views/aboutModal/aboutModal.html.js';
import '../views/aboutModal/aboutModal.scss';
document.getElementById('aboutModal').innerHTML = aboutModal();

// Modals
import handleModals from './modals.js';
handleModals();