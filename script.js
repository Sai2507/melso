document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('toggle');
    });
});
// document.addEventListener("contextmenu", function(event){
//     alert("This Functionality is Disabled By Default... Please Contact Admin")
//     event.preventDefault();
// });