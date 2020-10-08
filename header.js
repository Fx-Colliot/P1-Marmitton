document.addEventListener("scroll", function() {
    let header = document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 0)
});

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const loupe = document.querySelector('.search-box');

    burger.addEventListener('click', ()=> {   
        //toggle now
        nav.classList.toggle('nav-active');
        loupe.classList.toggle('disparition')

        //animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.6s ease forwards ${index / 7 + 0.5}s`
            }
        });
        //burger anim
        burger.classList.toggle('toggle');
    });
}

const app =()=>{
    navSlide()
}

app()
