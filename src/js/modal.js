(() => {
    const refs = {
      openModalHeaderBtn: document.querySelector("[data-modal-open]"),
      openModalBtn: document.querySelector(".mobile-contact"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
  };
  
    console.log(refs.openModalBtn)
  
  refs.openModalHeaderBtn.addEventListener("click", toggleModal);
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
  function toggleModal() {
    
    const modal = document.querySelector('.is-open');
    if (modal) { 
      modal.classList.remove('is-open');
    }
    
    refs.modal.classList.toggle("is-hidden");
  }
  })();