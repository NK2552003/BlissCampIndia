const images = [
  "url('images/1.jpg')",
  "url('images/2.jpg')",
  "url('images/3.jpg')",
];

let currentIndex = 0;

const heroSection = document.querySelector(".hero-section");

function changeBackground() {
  // Add the fade-out effect
  heroSection.classList.add("fade-out");

  // Wait for the fade-out animation to finish (1 second), then change the background
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % images.length;
    heroSection.style.backgroundImage = images[currentIndex];

    // Add fade-in after background change
    heroSection.classList.remove("fade-out");
    heroSection.classList.add("fade-in");

    // Remove fade-in class after animation is done
    setTimeout(() => {
      heroSection.classList.remove("fade-in");
    }, 1000); // Same duration as the CSS animation
  }, 1000); // Same duration as the CSS animation
}

setInterval(changeBackground, 5000); // Change background every 5 seconds

// navbar humburger menu

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  navLinks.classList.toggle("mobile-hidden");
});

const poster = document.querySelector(".poster");
poster.addEventListener("click", removePoster);

function removePoster() {
  poster.classList.add("poster-active");
  document.querySelector("#myIframe").src += "?autoplay=1";
}

//odomenter
document.addEventListener("DOMContentLoaded", function () {
  const dealCards = document.querySelectorAll(".deal-card");

  dealCards.forEach((card) => {
    card.addEventListener("click", () => {
      alert(`You clicked on ${card.querySelector(".deal-title").textContent}`);
    });
  });
});

document.querySelectorAll(".trek-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("More details coming soon!");
  });
});

document
  .querySelector(".book-now-button")
  .addEventListener("click", function () {
    window.location.href = "Treks_Destinations/treks.html"; // Redirect to index.html
  });
