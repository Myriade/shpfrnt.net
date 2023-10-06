export default function handleModals () {
  const toggleModal = (modalId) => {
    const openLink = document.querySelectorAll(`.open-modal[href="#${modalId}"]`);
    const modalCntnr = document.getElementById(modalId);
    const closeBtn = modalCntnr.querySelector('.close');
    const modalContent = modalCntnr.querySelector('.modal-content');
    
    openLink.forEach( link => {
      link.onclick = function(event) {
        modalCntnr.style.display = 'block';
        event.preventDefault();
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
  
  toggleModal('checkoutModal');
  toggleModal('aboutModal');
}