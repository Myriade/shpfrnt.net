// Import global styles
import './styles/normalize.css';
import './styles/global.scss';

// Place siteHeader and its syles
import siteHeader from './views/siteHeader/siteHeader.html.js';
import './views/siteHeader/siteHeader.js';
import './views/siteHeader/siteHeader.scss';
document.getElementById('siteHeader').innerHTML = siteHeader();

// Place siteMain and its styles
import siteMain from './views/siteMain/siteMain.html.js';
import './views/siteMain/siteMain.scss';
document.getElementById('siteMain').innerHTML = siteMain();

// Place siteFooter and its styles
import siteFooter from './views/siteFooter/siteFooter.html.js';
import './views/siteFooter/siteFooter.scss';
document.getElementById('siteFooter').innerHTML = siteFooter();