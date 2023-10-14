import productsIteration from '../products/productsIteration';

export default function () {
  const allProducts = productsIteration();
  
  return `
    <section id='products'>
      ${allProducts}
    </section>
  `
}