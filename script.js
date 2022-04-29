const usernameInput = document.querySelector(".user-input"); 
const passwordInput = document.querySelector(".pass-input"); 

const usernameMsg = document.querySelector(".username-msg");
const passwordMsg = document.querySelector('.password-msg');
const signinMsg = document.querySelector('.signin-status');


const signinBtn = document.querySelector(".login-btn");

signinBtn.addEventListener("click" ,signIn);

function signIn(event){
    event.preventDefault();
    const usernameValue = usernameInput.value; 
    const passwordValue = passwordInput.value;
    let ifSendData = true; 


    passwordMsg.innerText = "";
    usernameMsg.innerText =""; 
    signinMsg.innerText = "";


    if(usernameValue.length === 0 || usernameValue.indexOf("@")=== -1 || usernameValue.indexOf(".")=== -1){
        usernameMsg.innerText = "Please enter a valid Email";
        ifSendData = false;
    }



    if (passwordValue.length ===0){
        passwordMsg.innerText = "Please enter your password";
        ifSendData = false; 
    }else if(passwordValue.length <= 4){
        passwordMsg.innerText = "Your password is too short";
        ifSendData = false; 
    }


    if (ifSendData){
        const body = JSON.stringify({
            username: usernameValue,
            password: passwordValue,
        });
        const headers = {
            "Content-type": "application/json; charset=UTF-8"
        }
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: body,
            headers: headers,
        })
        .then((Response) => {
            if(Response.ok){
                signinMsg.innerText = "You signed inSuccessfully"
            }
        });
    }


}
