import { randomCaptcha } from '../views/checkoutModal/checkoutModal';

export default function handleModals () {
  
  const toggleModal = (modalId, callback) => {
    const openLink = document.querySelectorAll(`.open-modal[href="#${modalId}"]`);
    const modalCntnr = document.getElementById(modalId);
    const closeBtn = modalCntnr.querySelector('.close-modal');
    const modalContent = modalCntnr.querySelector('.modal-content');
    
    openLink.forEach( link => {
      link.onclick = function(event) {
        event.preventDefault();
        modalCntnr.style.display = 'block';
        if (callback) {
          callback();
        }
      }
    });
    
    closeBtn.onclick = function() {
      modalCntnr.style.display = 'none';
    }
      
    window.onclick = function(event) {
      const theOpenModal = document.querySelector('.modal[style="display: block;"');
      if ( event.target == theOpenModal ) {
        theOpenModal.style.display = "none";
      }
    }

  };
  
  toggleModal('checkoutModal', randomCaptcha);
  toggleModal('aboutModal');
}