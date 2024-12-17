const dealsData = [
  {
    id: 1,
    badge: "Sale!",
    badgeClass: "sale",
    imageSrc: "./images/kedarkantha-trek.jpg",
    altText: "Kedarkantha Trek",
    title: "Kedarkantha Trek",
    description:
      "Experience Kedarkantha Trek for ₹7500 only. Book now for a thrilling Himalayan adventure. Limited offer, don’t miss out!",
    oldPrice: "₹10,000.00",
    currentPrice: "₹7,500.00",
    type: "Trek",
    destination: "Uttarakhand",
    location: {
      latitude: 31.0275, // Kedarkantha Peak
      longitude: 78.195,
    },
    month: "December",
    price: 7500,
    duration: { days: 6, nights: 5 },
    brief_description:
      "Experience the magic of a winter wonderland with our Kedarkantha Trek in Uttarakhand. This popular trek offers a perfect blend of adventure and scenic beauty, making it an ideal choice for both beginners and experienced trekkers. Situated in the Govind Wildlife Sanctuary, Kedarkantha peak stands at an elevation of 12,500 feet, offering panoramic views of some of the most prominent Himalayan peaks. The journey begins in the charming village of Sankri, where you'll get a glimpse of the traditional Garhwali lifestyle. As you ascend through dense pine and oak forests, you'll be treated to the sight of snow-covered trails and frozen streams. The trek is particularly famous for its beautiful campsites, each offering a unique perspective of the surrounding snow-clad mountains. The highlight of the trek is the summit climb, which rewards you with a 360-degree view of majestic peaks like Swargarohini, Bandarpoonch, and Kalanag. During winter, the entire landscape is transformed into a white paradise, with snow-covered meadows and forests creating a magical atmosphere. Our experienced guides will ensure your safety and comfort, sharing interesting facts about the local flora, fauna, and mountain ecology. You'll also have the opportunity to experience the warm hospitality of the local villagers and taste traditional Garhwali cuisine. The Kedarkantha Trek is known for its gradual ascent, making it accessible to fitness enthusiasts of all levels. Whether you're looking for a thrilling snow trek, breathtaking views, or a peaceful escape into nature, the Kedarkantha Trek promises an unforgettable adventure in the heart of the Himalayas.",

    season: "Winter",
    rating: 5,
    pros: [
      "Spectacular snow-covered landscapes",
      "Suitable for beginners and families",
      "Beautiful campsites with panoramic views",
    ],
    cons: [
      "Very cold temperatures in winter",
      "Requires proper winter gear",
      "Possible altitude sickness for some",
    ],
    inclusions: [
      "Experienced winter trek guides",
      "Warm camping equipment",
      "Hot nutritious meals",
      "Transportation from Dehradun",
      "Forest permits and fees",
    ],
  },
  {
    id: 2,
    badge: "Trending!",
    badgeClass: "trending",
    imageSrc: "./images/chopta.jpeg",
    altText: "Chopta Trek",
    title: "Chopta Trek",
    description:
      "Embark on the serene Chopta Trek for ₹6,000. Explore lush meadows and breathtaking Himalayan views. Limited slots available!",
    oldPrice: "₹8,000.00",
    currentPrice: "₹6,000.00",
    type: "Trek",
    destination: "Uttarakhand",
    duration: { days: 5, nights: 4 },
    month: "March",
    price: 6000,
    location: {
      latitude: 30.3448, // Chopta location
      longitude: 79.0534,
    },
    brief_description:
      "Known as the ‘Mini Switzerland of India,’ Chopta offers an enchanting trekking experience with its lush meadows, dense forests, and panoramic Himalayan views. This trek is perfect for nature lovers seeking tranquility and breathtaking vistas. The trek also includes a visit to Tungnath Temple, the highest Shiva temple in the world, and a climb to Chandrashila peak for spectacular sunrise views.",
    season: "Spring",
    rating: 4.5,
    pros: [
      "Scenic meadows",
      "Accessible for beginners",
      "Stunning sunrise views",
    ],
    cons: ["Cold weather in early spring", "Limited accommodation options"],
    inclusions: ["Guide", "Camping equipment", "Meals", "Forest permits"],
  },
  {
    id: 3,
    badge: "New Arrival!",
    badgeClass: "new",
    imageSrc: "./images/Bugyals.jpg",
    altText: "Dayara Bugyal Trek",
    title: "Dayara Bugyal Trek",
    description:
      "Experience the vast alpine meadows of Dayara Bugyal for ₹7,000. Perfect for a peaceful Himalayan retreat!",
    oldPrice: "₹9,000.00",
    currentPrice: "₹7,000.00",
    type: "Trek",
    destination: "Uttarakhand",
    duration: { days: 6, nights: 5 },
    month: "April",
    price: 7000,
    location: {
      latitude: 30.8839, // Dayara Bugyal location
      longitude: 78.57,
    },
    brief_description:
      "Dayara Bugyal is one of the most beautiful alpine meadows in India, offering expansive views of snow-clad peaks and rolling grasslands. The trek is perfect for both beginners and seasoned trekkers, providing a chance to immerse yourself in nature's tranquility. Enjoy the lush greenery during summer and the pristine snow-covered landscape in winter.",
    season: "Spring",
    rating: 4.8,
    pros: [
      "Stunning alpine meadows",
      "Rich flora and fauna",
      "Easy to moderate trail",
    ],
    cons: ["Weather can be unpredictable", "Limited mobile network"],
    inclusions: ["Meals", "Camping gear", "Guide", "Transport"],
  },
  {
    id: 4,
    badge: "Hot Deal!",
    badgeClass: "hot",
    imageSrc: "./images/kauri.jpg",
    altText: "Kauri Pass Trek",
    title: "Kauri Pass Trek",
    description:
      "Embark on the stunning Kauri Pass Trek for ₹7,500. Witness the grandeur of the Himalayas and the rich flora of this serene trail!",
    oldPrice: "₹9,500.00",
    currentPrice: "₹7,500.00",
    type: "Trek",
    destination: "Uttarakhand",
    duration: { days: 6, nights: 5 },
    month: "June",
    price: 7500,
    location: {
      latitude: 30.49, // Approximate Kauri Pass location
      longitude: 79.3564,
    },
    brief_description:
      "The Kauri Pass Trek is an unforgettable journey through the Garhwal Himalayas. It offers stunning views of peaks like Nanda Devi, enchanting forests, and a chance to immerse in the vibrant local culture. Ideal for both beginners and seasoned trekkers.",
    season: "Summer",
    rating: 4.8,
    pros: [
      "Panoramic Himalayan views",
      "Beginner-friendly trail",
      "Cultural and natural richness",
    ],
    cons: ["Challenging weather at times", "Limited accommodations"],
    inclusions: ["Guide", "Meals", "Camping equipment", "Permits", "Transport"],
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
        <p class="deal-description">${deal.description}</p>
        <div class="deal-price">
          <span class="old-price">${deal.oldPrice}</span>
          <span class="current-price">${deal.currentPrice}</span>
        </div>
        <button class="deal-btn" data-deal-id="${deal.id}">Read More</button>
      </div>
    `;

  const dealButton = dealCard.querySelector(".deal-btn");

  // Add event listener for "Read More" button
  dealButton.addEventListener("click", () => {
    const params = new URLSearchParams({
      id: deal.id,
      title: deal.title,
      price: deal.price,
      brief_description: deal.brief_description,
      destination: deal.destination,
      month: deal.month,
      rating: deal.rating,
      image: `.${deal.imageSrc}`,
      days: deal.duration.days,
      nights: deal.duration.nights,
      pros: deal.pros,
      cons: deal.cons,
      inclusions: deal.inclusions,
      latitude: deal.location.latitude,
      longitude: deal.location.longitude,
      season: deal.season,
    });

    window.location.href = `./Treks_Destinations/details.html?${params.toString()}`;
  });

  dealsContainer.appendChild(dealCard);
});

dealsSection.appendChild(dealsContainer);
