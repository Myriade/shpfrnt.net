import data from '../../../data.json';

const products = data.products;

let productIteration = '';

for (const product of products) {
  const cardTemplate = `
    <div class="product">
      <figure>
        <img src="/media/products/images/${product.imageFileName}" alt="${product.title}">
      </figure>
      <h2>${product.title}</h2>
      <p>$${product.regularPrice}</p>
      <p>$${product.discountedPrice}</p>
      <p>Rating: ${product.rating}</p>
      <p>Reviews: ${product.numberOfReviews}</p>
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