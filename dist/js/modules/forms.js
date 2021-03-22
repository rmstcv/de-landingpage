function forms () {
    let form = document.querySelector('form'),
        input = document.querySelectorAll('input'),
        nameInputs = document.querySelector('input[name="user-name"]'),
        emailInputs = document.querySelector('input[name="email"]');

    let incorrectName = document.createElement('div');
    let incorrectEmail = document.createElement('div');



    // function validate() {
    //     form.forEach(item => {
    //         let incorrectName = document.createElement('div');
    //         let incorrectEmail = document.createElement('div');
    //         incorrectName.classList.add("errorInput");
    //         incorrectEmail.classList.add("errorInput");
            
    //         item.addEventListener('submit', (e) => {
    //             e.preventDefault();
                
    //             nameInputs.forEach(item => {
    //                 let validateName = /[a-z]/g;
    //                 if (item.value.match(validateName)) {
    //                     incorrectName.remove();
    //                 } else {
    //                     item.after(incorrectName);
    //                     incorrectName.textContent = "please enter a valid name";
    //                 }
    //             });
                
    //             emailInputs.forEach(item => {
    //                 let validateEmail = /[-.\w]+@[\w-]+\.[\w]+$/;
    //                 if (item.value.match(validateEmail)) {
    //                     incorrectEmail.remove();
    //                 } else {
    //                     item.after(incorrectEmail);
    //                     incorrectEmail.textContent = "please enter a valid email";
    //                 };
    //            });
    //         });
    //     });
    // };

    // let statusMessage = document.createElement('div');
    // statusMessage.style.cssText = `
    //     margin-top: 10px;
    // `;
    // item.parentNode.appendChild("statusMessage");


    //------------------------------------------------------------------
    
                function checkName () {
                    incorrectName.classList.add("errorInput");
                    incorrectName.remove();

                    if (nameInputs.value.match(/[a-z]/g)) { 
                        return true;
                    }
                    else {
                        nameInputs.after(incorrectName);
                        incorrectName.textContent = "please enter a valid name";
                        return false;   
                    }
                };

                function checkEmail () {
                    incorrectEmail.classList.add("errorInput");
                    incorrectEmail.remove();

                    if (emailInputs.value.match(/[-.\w]+@[\w-]+\.[\w]+$/)) { 
                        return true;
                    }
                    else {
                        emailInputs.after(incorrectEmail);
                        incorrectEmail.textContent = "please enter a valid email";
                        return false;   
                    }
                };
                
                

                function send () {
                    form.addEventListener('submit', (e) => {
                        e.preventDefault();
                        checkName();
                        checkEmail();
                        if (checkName() && checkEmail()) {
                            console.log("true");
                        } else {
                            console.log("false");
                        };
                    } );
                }

                send();
                //-------------------------------------------------------------------------------------------------
           
        // let btn = document.querySelector(".btn");
        // console.log(btn);
        // btn.setAttribute('disabled', false);

        
        // let flag2 = 2;

        //     function foo (n) {
        //         let flag1 = n;
        //         console.log(flag1);
        //         return flag1;
        //     };

        //        nameInputs.addEventListener("input",  () => {
        //            foo(1);
        //            console.log("input");
        //            //console.log(foo());   
        //        });
               



        //     console.log(flag2);
            
            
            

           

        // function sendForm () {
    //     validate();
    //     form.forEach(item => {
    //         item.addEventListener('submit', (e) => {
    //             e.preventDefault();
    
    //             const formData = new FormData(item);
    
    //             postData('server.php', formData)
    //                 .then(result => {
    //                     console.log(result);
    //                 }).catch(() => {
    //                     console.log("error");
    //                 }).finally(() => {
    //                     console.log("finally")
    //                 });
    
    //         });
    //     });
    // };
    // sendForm();
        
    // let statusMessage = document.createElement('div');
    // statusMessage.style.cssText = `
    //     margin-top: 10px;
    // `;
    // item.parentNode.appendChild("statusMessage");




        const postData = async (url, data) => {
            let result = await fetch(url, {
                method: "POST",
                body: data
            });

            return await result.text();
        };

        // const clearInputs = () => {
        //     input.forEach(item => {
        //         item.value = ''
        //     });
        // };

    // function sendForm () {
    //     validate();
    //     form.forEach(item => {
    //         item.addEventListener('submit', (e) => {
    //             e.preventDefault();
    
    //             const formData = new FormData(item);
    
    //             postData('server.php', formData)
    //                 .then(result => {
    //                     console.log(result);
    //                 }).catch(() => {
    //                     console.log("error");
    //                 }).finally(() => {
    //                     console.log("finally")
    //                 });
    
    //         });
    //     });
    // };
    // sendForm();
};

export default forms;