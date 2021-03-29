export default class Modal {

    constructor (modal, trigger, close) {

        this.modal = document.querySelector(modal);
        this.trigger = document.querySelectorAll(trigger);
        this.close = document.querySelector(close);
    }
    
    showModal () {
        this.modal.style.display = "block";
        document.body.style.overflow = "hidden";
    }

    openModal () {
        this.trigger.forEach(item => {
            item.addEventListener('click', () => {this.showModal()});
        });
    }

    hideModal () {
        this.modal.style.display = "none";
        document.body.style.overflow = "";
    }

    closeModal () {
        this.close.addEventListener('click', () => {this.hideModal()});

        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.hideModal()
            }
        });  
    }
    
    initModal() {
        this.openModal();
        this.closeModal();
    }
}