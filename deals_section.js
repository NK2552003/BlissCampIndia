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
    badge: "New!",
    badgeClass: "new",
    imageSrc: "./images/manali.jpg",
    altText: "Manali Adventure",
    title: "Manali Adventure",
    description:
      "Embark on a mesmerizing Manali Adventure starting at just ₹6,500. Explore lush valleys and serene mountains. Book today!",
    oldPrice: "₹8,500.00",
    season: "Winter",
    currentPrice: "₹6,500.00",
    brief_description:
      "The Shimla Manali Holiday is a delightful blend of adventure and relaxation. Explore Shimla's colonial charm, stroll along Mall Road, and visit Kufri. In Manali, enjoy activities like paragliding, skiing, and sightseeing at Solang Valley and Rohtang Pass. This family-friendly getaway offers a mix of urban comforts and natural wonders. The crisp mountain air, scenic beauty, and variety of leisure activities make it ideal for all age groups. Whether it’s shopping in Shimla's markets or enjoying snow activities in Manali, this vacation guarantees cherished memories.",
    price: 6500,
    type: "Adventure",
    destination: "Himachal Pradesh",
    duration: { days: 5, nights: 4 },
    month: "December",
    location: {
      latitude: 32.2396, // Mall Road, Manali
      longitude: 77.1887,
    },
    rating: 4,
    type: "Family",
    pros: [
      "Family-friendly destinations",
      "Variety of activities",
      "Easy accessibility",
    ],
    cons: ["Crowded tourist spots", "Cold weather during winter"],
    inclusions: ["Transportation", "Hotel stays", "Adventure activities"],
  },
  {
    id: 3,
    badge: "Hot!",
    badgeClass: "hot",
    imageSrc: "./images/goa-beach.jpg",
    altText: "Goa Beach Escape",
    type: "Leisure",
    title: "Goa Beach Escape",
    description:
      "Unwind at Goa’s stunning beaches for ₹5,000 only. Enjoy sunsets, nightlife, and more! Limited spots available, book now!",
    oldPrice: "₹7,000.00",
    currentPrice: "₹5,000.00",
    type: "Beach Escape",
    destination: "Goa",
    duration: { days: 4, nights: 3 },
    month: "November",
    location: {
      latitude: 15.2993, // Baga Beach, Goa
      longitude: 73.9116,
    },
    price: 5000,
    duration: { days: 4, nights: 3 },
    brief_description:
      "The Goa Beach Escape offers a combination of leisure and exploration. Spend your days lounging on pristine beaches, enjoy water sports, and explore the historic churches, markets, and vibrant nightlife of Goa. Whether you want to relax or indulge in some fun activities, Goa has something for everyone.",
    season: "Winter",
    rating: 4.5,
    pros: ["Beautiful beaches", "Vibrant nightlife", "Rich cultural heritage"],
    cons: [
      "Can be crowded during peak season",
      "Expensive accommodations near the beach",
    ],
    inclusions: ["Hotel stay", "Sightseeing", "Meals"],
  },
  {
    id: 4,
    badge: "Exclusive",
    badgeClass: "exclusive",
    imageSrc: "./images/leh.jpg",
    altText: "Leh Ladakh Road Trip",
    type: "Adventure",
    title: "Leh Ladakh Road Trip",
    description:
      "Join an exclusive Leh Ladakh road trip for ₹12,000. Adventure, breathtaking views, and lifetime memories await you!",
    oldPrice: "₹15,000.00",
    currentPrice: "₹12,000.00",
    type: "Road Trip",
    destination: "Ladakh",
    duration: { days: 7, nights: 6 },
    month: "July",
    price: 12000,
    location: {
      latitude: 34.1526, // Leh City
      longitude: 77.5771,
    },
    brief_description:
      "The Leh Ladakh Adventure tour is a dream journey for thrill-seekers and nature enthusiasts. This trip offers an exhilarating mix of rugged mountains, high-altitude passes, serene monasteries, and pristine lakes. Witness the beauty of Pangong Lake, explore the magnetic hill, and cross the world-famous Khardung La Pass while immersing yourself in the unique culture of the Ladakhi people. Experience the raw charm of this high-altitude desert and feel the adrenaline rush as you ride through its challenging terrains. The starlit skies at night and the tranquility of the monasteries provide a contrasting yet harmonious balance, making this adventure unforgettable.",
    season: "Summer",
    rating: 5,
    pros: [
      "Stunning high-altitude landscapes",
      "Rich cultural experiences",
      "Exciting road trips",
    ],
    cons: ["High-altitude sickness risks", "Remote access"],
    inclusions: ["Transportation", "Guided tours", "Accommodation"],
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
