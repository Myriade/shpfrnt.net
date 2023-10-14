export function clickHandler () {
  const addProductLinks = document.querySelectorAll('#products .add-product');
  addProductLinks.forEach(link => {
    link.addEventListener('click', addProductToCart);
  });
}

export function addProductToCart  (event) {
    console.log('test');
};