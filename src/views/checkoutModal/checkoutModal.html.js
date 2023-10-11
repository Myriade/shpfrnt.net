export default function () {
return `
  <div class="modal-content">
    <em style="text-align: center; width: 100%; display:block">(...work ... in ... progress ...)</em>
    
    <div class="fake-link">Apply discount code</div>
    
    <h3>Express Checkout</h3>
    
    <div class="fake-link">Paypal</div><div class="fake-link">GPay</div>
    
    <h3>Detail shop</h3>
    
    <table id="cart_summary">
      <tr class="row">
        <td class="col">Cart is empty</td>
      </tr>
    </table>
    
    <div class="captcha">
      captcha img <br>
      <input type="text" />
    </div>
    
    <a href="#">Checkout</a>
    
    <div class="close">
      <svg width="6" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 1L1 7L7 13" stroke="#0C0D12" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg> 
      Return
    </div>
  </div>
`}