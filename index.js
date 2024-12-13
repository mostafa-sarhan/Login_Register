
const loginBtn = document.querySelector(".header .text");
const hero =document.querySelector(".container .hero");
const register =document.querySelector(".container .hero .login_box .box .account span");
const login =document.querySelector(".container .hero .register_box .box .account span");
const box_register = document.querySelector(".hero .register_box");
const box_login = document.querySelector(".hero .login_box");

// Add style Dom
loginBtn.addEventListener("click",()=>{
    hero.classList.remove("d-none");
});

register.addEventListener("click",()=>{
    box_register.classList.remove("move_in");
    box_login.classList.add("move_out");
});

login.addEventListener("click",()=>{
    box_register.classList.add("move_in");
    box_login.classList.remove("move_out");
})



