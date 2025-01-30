
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

// Get the full current page URL without query parameters
const currentUrl = window.location.href.split(/[?#]/)[0]; 

navLinks.forEach(link => {
    const linkUrl = new URL(link.href, window.location.origin).href; // Convert to absolute URL

    if (currentUrl === linkUrl) {
        link.classList.add("active");
    }
});






