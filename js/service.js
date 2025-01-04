// Ensure ScrollReveal resets animations on every page refresh
const sr = ScrollReveal({
    reset: true, // Allows animations to reset for every viewport entry
    distance: '60px',
    duration: 2500,
    delay: 400,
    origin: 'bottom', // Default origin
    mobile: true, // Ensure it works on all devices
    cleanup: true, // Forces clean animations on page refresh
});

// Reveal each element individually with custom delays
sr.reveal('.service1', { delay: 300 });
sr.reveal('.service2', { delay: 1000 });
sr.reveal('.service3', { delay: 1500 });
