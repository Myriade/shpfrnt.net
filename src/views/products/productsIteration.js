// imports
import { data } from '../../globals/data.js';

// Variables
const star = `<svg xmlns="http://www.w3.org/2000/svg" width="22" viewBox="0 0 51 48">
    <title>Five Pointed Star</title>
    <path fill="none" stroke="#c98917" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"/>
  </svg>`;
const fiveStars = `<div class="rating">
    <span class="star star1">${star}</span><span class="star star2">${star}</span><span class="star star3">${star}</span><span class="star star4">${star}</span><span class="star star5">${star}</span>
  </div>`;

// Products iteration
export default function () {
  
  const products = data.products;
  let productsHTML = '';
  
  for (const product of products) {
    let media = ``;
    
    if (product.videoMp4FileName) {
      media = `
        <video autoplay muted="true" loop>
          <source src="media/products/videos/${product.videoMp4FileName}" type="video/mp4" >
          <source src="media/products/videos/${product.videoWebmFileName}" type="video/webm">
        </video> 
      `;
    } else if (product.imageFileName) {
      media = `<img src="media/products/images/${product.imageFileName}" alt="">`;
    }
    
    // Set the final Price that will be added to the cart amount
    let finalPrice = 0;
    finalPrice = product.effectivePrice ? product.effectivePrice : product.altPrice;
    
    // Show regular price only if it exists
    let altPriceDiplay = '';
    if (product.altPrice) { 
      altPriceDiplay = `
        <div class="product__regular">&nbsp;$${product.altPrice}&nbsp;</div>
      ` 
    };
    
    const productTemplate = `
      <div class="product">
        <figure>${media}</figure>
        <div class="product__infos product__infos1">
          <h2 class="product__title">
            ${product.title}
          </h2>
          <div class="product__discount">
            $${product.effectivePrice}
          </div>
          ${altPriceDiplay}
        </div>
        <div class="product__infos product__infos2 rate-${product.rating}">
          ${fiveStars} (${product.numberOfReviews})
        </div>
        <a 
          class="button button--pill add-product" 
          data=${product.effectivePrice}>
          Add to cart
          <span>+</span>
        </a>
      </div>
    `;
    productsHTML += productTemplate;
  }
  
  return productsHTML;
  
}