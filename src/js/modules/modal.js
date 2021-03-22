export default class Modal {

    constructor (modal, trigger, close) {

        this.modal = document.querySelector(modal);
        this.trigger = document.querySelectorAll(trigger);
        this.close = document.querySelector(close);
    }

    openModal () {
        this.trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
        
                this.modal.style.display = "block";
                document.body.style.overflow = "hidden";
            });
        });
    }

    closeModal () {
        this.close.addEventListener('click', () => {
            this.modal.style.display = "none";
            document.body.style.overflow = "";
        });

        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.modal.style.display = "none";
                document.body.style.overflow = "";
            }
        });  
    }
    
    initModal() {
        this.openModal();
        this.closeModal();
    }
}