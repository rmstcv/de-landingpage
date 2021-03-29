export default class Form {
    constructor(form, input, nameInputs, emailInputs, modal) {
        this.form = document.querySelector(form);
        this.input = document.querySelectorAll(input);
        this.nameInputs = document.querySelector(nameInputs);
        this.emailInputs = document.querySelector(emailInputs);
        this.modal = document.querySelector(modal);
        this.path = '../src/server.php';
        this.incorrectName = document.createElement('div');
        this.incorrectEmail = document.createElement('div');
        this.status = {
            success: "Message sent successfully!",
            fail: "Something went wrong.."
        };
    }

    checkName () {
        this.incorrectName.classList.add("errorInput");
        this.incorrectName.remove();

        if (this.nameInputs.value.match(/[a-z]+$/)) { 
            return true;
        }
        else {
            this.nameInputs.after(this.incorrectName);
            this.incorrectName.textContent = "please enter a valid name";
            return false;   
        }
    };

    checkEmail () {
        this.incorrectEmail.classList.add("errorInput");
        this.incorrectEmail.remove();

        if (this.emailInputs.value.match(/[-.\w]+@[\w-]+\.[\w]+$/)) { 
            return true;
        }
        else {
            this.emailInputs.after(this.incorrectEmail);
            this.incorrectEmail.textContent = "please enter a valid email";
            return false;   
        }
    };

    clearInputs () {
        this.input.forEach(item => {
            item.value = ''
        });
    };

    closeModal () {
        this.modal.style.display = "none";
        document.body.style.overflow = "";
    };

    popMessage (status) {
        let statusMessage = document.createElement('div');
        statusMessage.classList.add("modal_mini");
        document.body.appendChild(statusMessage);
        statusMessage.textContent = status;
        setTimeout(() => {statusMessage.style.display = "none"}, 3000);
    }

    async postData (url, data) {
        let result = await fetch(url, {
            method: "POST",
            body: data
        });

        return await result;
    };

    // sendForm () {
    //     this.form.addEventListener('submit', (e) => {
    //         e.preventDefault();
    //         this.checkName();
    //         this.checkEmail();
    //             if (this.checkName() && this.checkEmail()) {

    //                 const formData = new FormData(this.form);
    //                 this.postData(this.path, formData)
    //                     .then(result => {
    //                         if (result.ok === false) {
    //                             this.popMessage (this.status.fail);
    //                         } else {
    //                             this.popMessage (this.status.success);}
                            
    //                     })
    //                     .catch(() => {
    //                         this.popMessage (this.status.fail);
    //                     })
    //                     .finally(() => {
    //                         this.clearInputs ();
    //                         this.closeModal();
    //                     });
    //             }
    //     });
    // };

    sendForm () {
        if (this.checkName() && this.checkEmail()) {

            const formData = new FormData(this.form);
            this.postData(this.path, formData)
                .then(result => {
                    if (result.ok === false) {
                        this.popMessage (this.status.fail);
                    } else {
                        this.popMessage (this.status.success);}
                    
                })
                .catch(() => {
                    this.popMessage (this.status.fail);
                })
                .finally(() => {
                    this.clearInputs ();
                    this.closeModal();
                });
        }
    };

    initForm () {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.checkName();
            this.checkEmail();
            this.sendForm();
        });
    };
}