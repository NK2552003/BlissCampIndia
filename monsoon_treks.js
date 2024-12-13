// Data for treks
const trekData = [
  {
    price: "₹7,500.00",
    imgSrc: "./images/Valley-of-Flowers-Trek.jpeg",
    altText: "Valley of Flowers Trek",
    title: "Valley of Flowers Trek",
    duration: "6 DAYS - 5 NIGHTS",
    description:
      "Witness a vibrant splash of colors in the Valley of Flowers, a UNESCO World Heritage Site and a paradise for nature lovers.",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    price: "₹6,999.00",
    imgSrc: "./images/Rajmachi-Trek.jpg",
    altText: "Rajmachi Trek",
    title: "Rajmachi Trek",
    duration: "2 DAYS - 1 NIGHT",
    description:
      "Enjoy the lush greenery, waterfalls, and misty landscapes on the Rajmachi Trek, a perfect monsoon escape.",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    price: "₹8,200.00",
    imgSrc: "./images/Kudremukh-Trek.png",
    altText: "Kudremukh Trek",
    title: "Kudremukh Trek",
    duration: "3 DAYS - 2 NIGHTS",
    description:
      "Explore the breathtaking landscapes of Kudremukh, complete with rolling hills, waterfalls, and rich biodiversity.",
    rating: "⭐⭐⭐⭐⭐",
  },
];

// Create the monsoon treks section
const createMonsoonTreksSection = () => {
  // Create section wrapper
  const section = document.createElement("section");
  section.classList.add("monsoon-treks-section");

  // Add title and underline
  const title = document.createElement("h2");
  title.classList.add("section-title");
  title.textContent = "Explore Monsoon Treks";

  const underline = document.createElement("div");
  underline.classList.add("title-underline");

  section.appendChild(title);
  section.appendChild(underline);

  // Create treks container
  const treksContainer = document.createElement("div");
  treksContainer.classList.add("treks-container");

  // Add trek cards
  trekData.forEach((trek) => {
    const trekCard = document.createElement("div");
    trekCard.classList.add("trek-card");

    // Price badge
    const priceBadge = document.createElement("div");
    priceBadge.classList.add("price-badge");
    priceBadge.textContent = trek.price;
    trekCard.appendChild(priceBadge);

    // Image
    const img = document.createElement("img");
    img.classList.add("trek-image");
    img.src = trek.imgSrc;
    img.alt = trek.altText;
    trekCard.appendChild(img);

    // Trek details
    const trekDetails = document.createElement("div");
    trekDetails.classList.add("trek-details");

    const trekTitle = document.createElement("h3");
    trekTitle.classList.add("trek-title");
    trekTitle.textContent = trek.title;

    const trekDuration = document.createElement("p");
    trekDuration.classList.add("trek-duration");
    trekDuration.textContent = trek.duration;

    const trekDescription = document.createElement("p");
    trekDescription.classList.add("trek-description");
    trekDescription.textContent = trek.description;

    const trekFooter = document.createElement("div");
    trekFooter.classList.add("trek-footer");

    const trekRating = document.createElement("div");
    trekRating.classList.add("trek-rating");
    trekRating.textContent = trek.rating;

    const trekButton = document.createElement("button");
    trekButton.classList.add("trek-btn");
    trekButton.textContent = "Read More";

    trekFooter.appendChild(trekRating);
    trekFooter.appendChild(trekButton);

    trekDetails.appendChild(trekTitle);
    trekDetails.appendChild(trekDuration);
    trekDetails.appendChild(trekDescription);
    trekDetails.appendChild(trekFooter);

    trekCard.appendChild(trekDetails);
    treksContainer.appendChild(trekCard);
  });

  section.appendChild(treksContainer);

  // Add view more button
  const viewMoreButton = document.createElement("button");
  viewMoreButton.classList.add("book-now-button", "viewBtn");
  viewMoreButton.textContent = "View More";

  section.appendChild(viewMoreButton);

  return section;
};

// Append to .monsoon-treks section
const monsoonTreks = document.querySelector(".monsoon-treks");
if (monsoonTreks) {
  monsoonTreks.appendChild(createMonsoonTreksSection());
}
