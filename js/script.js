document.addEventListener('DOMContentLoaded', () => {
    // open modal
    let modalElem;
    document.querySelectorAll('[data-modal]').forEach(elem => {
        elem.addEventListener('click', () => {
            document.addEventListener('keydown', escapeHandler);

            modalElem = document.getElementById(elem.dataset.modal);
            modalElem.classList.add('modal--active');
            document.body.classList.add('no-scroll');
            modalElem.querySelector('[data-close]').addEventListener('click', closeModal);
        });
    });

    //close modal
    const closeModal = () => {
        modalElem.querySelector('[data-close]').removeEventListener('click', closeModal);
        document.removeEventListener('keydown', escapeHandler);

        modalElem.classList.remove('modal--active');
        document.body.classList.remove('no-scroll');
    };

    const escapeHandler = event => {
        if (event.code == 'Escape') {
            closeModal();
        }
    };
});
/**
  <!-- <div id="modal__back-call" class="modal">
        <div class="modal__container contact-us__container container">
          <button type="button" class="modal__close" data-close></button>
          
        </div>
    </div> -->
**/