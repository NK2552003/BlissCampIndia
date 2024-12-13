//deals section here

const dealsData = [
  {
    badge: "Sale!",
    badgeClass: "sale",
    imageSrc: "./images/kedarnath.jpg",
    altText: "Kedarkantha Trek",
    title: "Kedarkantha Trek",
    duration: "6 DAYS - 5 NIGHTS",
    description:
      "Experience Kedarkantha Trek for ₹7500 only. Book now for a thrilling Himalayan adventure. Limited offer, don’t miss out!",
    oldPrice: "₹10,000.00",
    currentPrice: "₹7,500.00",
  },
  {
    badge: "New!",
    badgeClass: "new",
    imageSrc: "./images/manali.jpg",
    altText: "Manali Adventure",
    title: "Manali Adventure",
    duration: "5 DAYS - 4 NIGHTS",
    description:
      "Embark on a mesmerizing Manali Adventure starting at just ₹6,500. Explore lush valleys and serene mountains. Book today!",
    oldPrice: "₹8,500.00",
    currentPrice: "₹6,500.00",
  },
  {
    badge: "Hot!",
    badgeClass: "hot",
    imageSrc: "./images/goa-beach.jpg",
    altText: "Goa Beach Escape",
    title: "Goa Beach Escape",
    duration: "4 DAYS - 3 NIGHTS",
    description:
      "Unwind at Goa’s stunning beaches for ₹5,000 only. Enjoy sunsets, nightlife, and more! Limited spots available, book now!",
    oldPrice: "₹7,000.00",
    currentPrice: "₹5,000.00",
  },
  {
    badge: "Exclusive",
    badgeClass: "exclusive",
    imageSrc: "./images/leh.jpg",
    altText: "Leh Ladakh Road Trip",
    title: "Leh Ladakh Road Trip",
    duration: "7 DAYS - 6 NIGHTS",
    description:
      "Join an exclusive Leh Ladakh road trip for ₹12,000. Adventure, breathtaking views, and lifetime memories await you!",
    oldPrice: "₹15,000.00",
    currentPrice: "₹12,000.00",
  },
];

const dealsSection = document.querySelector(".deals-section");

dealsSection.innerHTML = '<h2 class="deals-title">Deals and Discounts</h2>';

const dealsContainer = document.createElement("div");
dealsContainer.classList.add("deals-container");

dealsData.forEach((deal) => {
  const dealCard = document.createElement("div");
  dealCard.classList.add("deal-card");

  dealCard.innerHTML = `
      <div class="deal-badge ${deal.badgeClass}">${deal.badge}</div>
      <img src="${deal.imageSrc}" alt="${deal.altText}" class="deal-image" />
      <div class="deal-details">
        <h3 class="deal-title">${deal.title}</h3>
        <p class="deal-duration">${deal.duration}</p>
        <p class="deal-description">${deal.description}</p>
        <div class="deal-price">
          <span class="old-price">${deal.oldPrice}</span>
          <span class="current-price">${deal.currentPrice}</span>
        </div>
        <button class="deal-btn">Read More</button>
      </div>
    `;

  dealsContainer.appendChild(dealCard);
});

dealsSection.appendChild(dealsContainer);
