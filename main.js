import "./style.css";

const form = document.querySelector("form");
const signupForm = document.querySelector("[signup-form]");
const successDiv = document.querySelector("[success]");
const emailInput = document.querySelector("input[type=email]");
const emailErrorText = document.querySelector("[error-text]");
const dismissBtn = document.querySelector("[dismiss-btn]");

successDiv.style.display = 'none';


function validateEmail(inputText) {
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value === '') {
        return false;
    }

    if (inputText.value.match(mailFormat)) {
        return true;
    } else {
        return false;
    }
}

form.onsubmit = (event) => {
    event.preventDefault();
    const email = document.querySelector("input#email");

    const valid = validateEmail(email);

    if(valid) {
        signupForm.style.display = 'none';
        successDiv.style.display = 'flex';
        emailInput.classList.remove('invalid');
        emailErrorText.classList.remove('block');
        emailErrorText.classList.add('hidden');
    } else {
        emailInput.classList.add('invalid');
        emailErrorText.classList.add('block');
        emailErrorText.classList.remove('hidden');
    }
};

dismissBtn.onclick = () => {
    signupForm.style.display = 'inline-flex';
    successDiv.style.display = 'none';
}