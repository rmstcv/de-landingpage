function modal (modalSelector, triggerSelector, closeSelector) {

    let selector = document.querySelector(modalSelector),
        trigger = document.querySelector(triggerSelector),
        close = document.querySelector(closeSelector);

    trigger.addEventListener('click', () => {
        selector.style.display = "block";
    });

    close.addEventListener('click', () => {
        selector.style.display = "none";
    });
    
}

export default modal;