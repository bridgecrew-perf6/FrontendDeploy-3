var btnSignin = document.querySelector(".signin");
var btnSignup = document.querySelector(".signup");

var body = document.querySelector("div");


btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
});