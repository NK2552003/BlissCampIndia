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

//
