const signinModal = document.querySelector("#signinModal");
const signupModal = document.querySelector("#signupModal");
const signins = document.querySelectorAll(".sign-in");
const signups = document.querySelectorAll(".sign-up");

signins.forEach((signin) => {
    signin.addEventListener('click', () => {
        signinModal.classList.add('show');
    })
});


signups.forEach((signup) => {
    signup.addEventListener('click', () => {
        signupModal.classList.add('show');
    })
});

signinModal.addEventListener('click', (event) => {
    if (!signinModal.firstElementChild.contains(event.target)){
        signinModal.classList.remove('show');
    }
})

signupModal.addEventListener('click', (event) => {
    if (!signupModal.firstElementChild.contains(event.target)){
        signupModal.classList.remove('show');
    }
})