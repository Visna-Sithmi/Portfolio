
function myFunction() {
  var x = document.getElementById("nav-menu");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}


// Dynamic text effect for ".sec-text"
const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Web Developer";
    }, 0);

    setTimeout(() => {
        text.textContent = "Full-Stack Developer";
    }, 4000);

    setTimeout(() => {
        text.textContent = "App Developer";
    }, 8000);
};

textLoad();
setInterval(textLoad, 12000);

const navLinks = document.querySelectorAll(".nav-link");

// Get the current page URL and normalize it
const currentUrl = window.location.pathname.replace(/\/$/, "");

// Add 'active' class to the navigation link that matches the current URL
navLinks.forEach(link => {
    const href = link.getAttribute("href").replace(/\/$/, "");
    if (href && currentUrl.includes(href)) {
        link.classList.add("active");
    }
});





