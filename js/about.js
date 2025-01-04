ScrollReveal({
    reset: false,
    distance: '60px',
    duration: 800,
    delay: 100,
    once: true
    });

ScrollReveal().reveal('.heading',{delay: 400, origin: 'right', afterReveal: function (el) {el.style.transform = "none"; } });
ScrollReveal().reveal('.text-box',{delay: 1000, origin: 'left', afterReveal: function (el) {el.style.transform = "none"; } });
