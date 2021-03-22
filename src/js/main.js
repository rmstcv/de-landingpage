import Modal from "./modules/modal.js";
import Form from './modules/form.js';

window.addEventListener('DOMContentLoaded', () => {
'use strcit';

new Modal(".overlay", ".footer__btn", ".modal__close").initModal();
new Form('form', 'input', 'input[name="user-name"]', 'input[name="email"]', ".overlay").sendForm();

});