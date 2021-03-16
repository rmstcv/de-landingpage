//project display
window.addEventListener('DOMContentLoaded', () => {

function blockDisplay (triggerSelectorOn, triggerSelectorOff, blockSelector) {
    let triggerOn = document.querySelector(triggerSelectorOn),
        triggerOff = document.querySelector(triggerSelectorOff),
        block = document.querySelector(blockSelector);

    triggerOn.addEventListener('click', () => {
        block.style.display = "block";
    });
    
    triggerOff.addEventListener('click', () => {
        block.style.display = "none";
        window.scroll(0, 0);
    });
}

blockDisplay (".header__button .btn", ".project__logo", ".project");

});