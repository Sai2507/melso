document.addEventListener("contextmenu", function(event){
   alert("This Functionality is Disabled By Default... Please Contact Admin")
   event.preventDefault();
});

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    // Function to hide the navbar
    const hideNavbar = () => {
        navLinks.classList.remove('active');
        burger.classList.remove('toggle');
    };

    // Toggle navbar on burger click
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('toggle');
    });

    // Hide navbar on scroll
    window.addEventListener('scroll', hideNavbar);

    // Hide navbar on page load
    window.addEventListener('load', hideNavbar);
});
