const winterTreksData = [
  {
    price: "₹9,500.00",
    imageSrc: "./images/har-ki-dun.jpg",
    altText: "Har Ki Dun Trek",
    title: "Har ki Dun Trek",
    duration: "5 DAYS - 4 NIGHTS",
    description:
      "Discover the captivating beauty of the Har Ki Dun trek, nestled snugly in the embrace of the Garhwal Himalayas.",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    price: "₹15,999.00",
    imageSrc: "./images/gaumukh-tapovan.jpg",
    altText: "Gaumukh Tapovan Trek",
    title: "Gaumukh Tapovan Trek",
    duration: "5 DAYS - 4 NIGHTS",
    description:
      "For both spiritual seekers and adventure seekers, the Gaumukh Tapovan Trek is a pilgrimage of enormous significance.",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    price: "₹8,500.00",
    imageSrc: "./images/phulara-ridge.jpg",
    altText: "Phulara Ridge Trek",
    title: "Phulara Ridge Trek",
    duration: "5 DAYS - 4 NIGHTS",
    description:
      "The Phulara Ridge Trek is a captivating choice for several reasons. Ridge treks are a rarity in our country.",
    rating: "⭐⭐⭐⭐⭐",
  },
];

const winterTreksSection = document.querySelector(".winter-treks");

winterTreksSection.innerHTML = `
    <h2 class="section-title">Explore Winter Treks</h2>
    <div class="title-underline"></div>
  `;

const treksContainer = document.createElement("div");
treksContainer.classList.add("treks-container");

winterTreksData.forEach((trek) => {
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

  treksContainer.appendChild(trekCard);
});

winterTreksSection.appendChild(treksContainer);

const viewMoreButton = document.createElement("button");
viewMoreButton.classList.add("book-now-button", "viewBtn");
viewMoreButton.textContent = "View More";

winterTreksSection.appendChild(viewMoreButton);
