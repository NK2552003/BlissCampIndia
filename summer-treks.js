const summerTreksData = [
  {
    price: "₹10,000.00",
    imageSrc: "./images/Hampta-Pass-Trek.jpg",
    altText: "Hampta Pass Trek",
    title: "Hampta Pass Trek",
    duration: "6 DAYS - 5 NIGHTS",
    description:
      "Experience the stunning transition from lush green valleys of Kullu to the barren landscapes of Spiti on the Hampta Pass Trek.",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    price: "₹12,500.00",
    imageSrc: "./images/Roopkund-Trek.jpg",
    altText: "Roopkund Trek",
    title: "Roopkund Trek",
    duration: "8 DAYS - 7 NIGHTS",
    description:
      "Discover the mystery of the skeleton lake and the awe-inspiring beauty of the Roopkund trek, perfect for thrill-seekers.",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    price: "₹9,000.00",
    imageSrc: "./images/Beas-Kund-Trek.jpg",
    altText: "Beas Kund Trek",
    title: "Beas Kund Trek",
    duration: "4 DAYS - 3 NIGHTS",
    description:
      "Walk along the trails surrounded by majestic peaks to reach the pristine Beas Kund, a trek for nature lovers.",
    rating: "⭐⭐⭐⭐⭐",
  },
];

const summerTreksSection = document.querySelector(".winter-treks.summer-treks");

summerTreksSection.innerHTML = `
    <h2 class="section-title">Explore Summer Treks</h2>
    <div class="title-underline"></div>
  `;

const summerTreksContainer = document.createElement("div");
summerTreksContainer.classList.add("treks-container");

summerTreksData.forEach((trek) => {
  const trekCard = document.createElement("div");
  trekCard.classList.add("trek-card");

  trekCard.innerHTML = `
      <div class="price-badge">${trek.price}</div>
      <img src="${trek.imageSrc}" alt="${trek.altText}" class="trek-image" />
      <div class="trek-details">
        <h3 class="trek-title">${trek.title}</h3>
        <p class="trek-duration">${trek.duration}</p>
        <p class="trek-description">${trek.description}</p>
        <div class="trek-footer">
          <div class="trek-rating">${trek.rating}</div>
          <button class="trek-btn">Read More</button>
        </div>
      </div>
    `;

  summerTreksContainer.appendChild(trekCard);
});

summerTreksSection.appendChild(summerTreksContainer);

const viewMoreButtonSummer = document.createElement("button");
viewMoreButtonSummer.classList.add("book-now-button", "viewBtn");
viewMoreButtonSummer.textContent = "View More";

summerTreksSection.appendChild(viewMoreButtonSummer);
