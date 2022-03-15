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

    .modal {
  display: none;
  width: 100%;
  height: 100%;
  background-color: rgba(#000, 0.8);
  position: fixed;
  overflow-y: scroll;
  top: 0;
  right: 0;
  z-index: 1000;

  &--active {
    display: block;
  }
  &__container {
    position: relative;
    top: 20px;
  }
  &__close {
    right: 0.5rem;
    top: 0.5rem;
    width: 2rem;
    height: 2rem;
    position: absolute;
    display: flex;
    z-index: 100;
    align-items: center;
    justify-content: center;
    background: url(../img/icon/close.svg) no-repeat 50% 50% black;
    border-radius: 50%;
    border: none;
    content: "";
    cursor: pointer;
  }
}

.no-scroll {
  overflow: hidden;
}
**/