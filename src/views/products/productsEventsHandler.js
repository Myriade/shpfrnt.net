import { getCartAmount, setCartAmount } from '../../globals/cartAmount';

export function clickHandler () {
  const addProductLinks = document.querySelectorAll('#products .add-product');
  addProductLinks.forEach(link => {
    link.addEventListener('click', addProductToCart);
  });
}

export function addProductToCart (event) {
  let effectivePrice = 0;
  if (event.target.nodeName === 'SPAN') {
    effectivePrice = parseInt(event.target.parentElement.attributes.data.value);
  } else {
    effectivePrice = parseInt(event.target.attributes.data.value);
  }
  const newCartAmount = getCartAmount() + effectivePrice;
  setCartAmount(newCartAmount);
};