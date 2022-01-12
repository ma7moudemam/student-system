// get user userName input
let userName = document.querySelector('.userName');
// get user Pass input
let userPassword = document.querySelector('.pass');

let userNameLocal = localStorage.getItem("userName");
let userPassLocal = localStorage.getItem("password");

var loginUser = false;
// login btn
let login = document.querySelector('.loginBtn')
    .addEventListener('click', function() {
        if (userName.value == userNameLocal && userPassword.value == userPassLocal) {
            loginUser = true;
            window.location.href = "/index.html";

        }
    }); // end of login