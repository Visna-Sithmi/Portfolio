
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
const currentUrl = window.location.pathname.replace(/\/$/, ""); 

navLinks.forEach(link => {
    // Get the link's href, normalize it, and remove trailing slashes
    let linkUrl = new URL(link.href, window.location.origin).pathname.replace(/\/$/, "");

    if (currentUrl === linkUrl) {
        link.classList.add("active");
    }
});







