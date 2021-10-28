const navSlide = () => {
    const burger = document.querySelector('.burger1');
    const nav = document.querySelector('.nav-links1');
    const navLinks = document.querySelectorAll('.nav-links1 li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

    });



}


navSlide();