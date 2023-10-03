// imports
import { data } from '../../../data';

// Data variables
const products = data.products;
let productIteration = '';

for (const product of products) {
  let media = ``;
  
  if (product.videoMp4FileName) {
    media = `
      <video autoplay muted="true" loop>
        <source src="media/products/videos/${product.videoMp4FileName}" type="video/mp4" >
        <source src="media/products/videos/${product.videoWebmFileName}" type="video/webm">
      </video> 
    `;
  } else {
    media = `<img src="media/products/images/${product.imageFileName}" alt="">`;
  }
  
  const cardTemplate = `
    <div class="product">
      <figure>${media}</figure>
      <div class="product__row product__row1">
        <h2 class="product__title">${product.title}</h2>
        <div class="product__discount">$${product.discountedPrice}</div>
        <div class="product__regular">&nbsp;$${product.regularPrice}&nbsp;</div>
      </div>
      <div class="product__row product__row2">Rating</div>
      <a class="product__button">Add to cart <span>+</span></a>
    </div>
  `;
  productIteration += cardTemplate;
}

export default function () {
  
return `
  
  <section id='products'>
    ${productIteration}
  </section>
  
`}