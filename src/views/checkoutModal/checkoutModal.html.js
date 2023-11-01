export default function () {
return `
  <div class="modal-content">
    
    <div class="fake-link discount button button--square">
      <object type="image/svg+xml" data="../../assets/discount.svg" width="30" ></object>
      <span>Apply discount code</span>
      <svg width="6" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L7 7L1 13" stroke="#0C0D12" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    
    <h3>Express Checkout</h3>
    
    <div class="buttons">
      <div class="fake-link button button--pill paypal button--disabled"></div>
      <div class="fake-link button button--pill gpay button--disabled"></div>
    </div>
    
    <h3>Detail shop</h3>
    
    <table id="cart_summary">
      <tr class="row">
        <td class="col">Cart is empty</td>
      </tr>
    </table>
    
    <div id="captcha">
      <figure>
        <img src="">
      </figure>
      <input type="text" placeholder="Enter Captcha"/>
    </div>
    
    <div class="buttons">
      <div class="button button--pill button--modal close-modal">Return</div>
      <div class="button button--pill button--disabled checkout">Checkout</div>
  </div>
`}