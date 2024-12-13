// Data for treks
const trekData = [
  {
    id: 1,
    price: 7500,
    imgSrc: "./images/Valley-of-Flowers-Trek.jpeg",
    altText: "Valley of Flowers Trek",
    title: "Valley of Flowers Trek",
    duration: { days: 6, nights: 5 },
    season: "Monsoon",
    brief_description:
      "Embark on a mesmerizing journey through nature's own paradise with our Valley of Flowers Trek in Uttarakhand. This enchanting trek takes you through a UNESCO World Heritage Site, famous for its vibrant alpine meadows filled with hundreds of species of wildflowers. The valley, nestled high in the West Himalayan region, comes alive with a riot of colors during the monsoon season, creating a spectacle that seems almost surreal. As you trek through this floral wonderland, you'll be surrounded by towering snow-capped peaks, cascading waterfalls, and pristine streams. The journey begins in the pilgrimage town of Govindghat, from where you'll trek to the quaint village of Ghangaria, your base camp for exploring the valley. Each day brings new discoveries as you wander through meadows carpeted with primulas, poppies, daisies, and many rare and endangered species. The trek also includes a visit to the holy Hemkund Sahib, a revered Sikh shrine set against the backdrop of stunning mountain scenery. Our expert guides will share insights about the unique ecosystem, the medicinal properties of various plants, and the efforts to preserve this fragile environment. You'll camp in scenic locations, allowing you to fully immerse yourself in the tranquil beauty of the Himalayas. This moderate trek is suitable for nature lovers, photographers, and anyone seeking a peaceful retreat in the mountains. Whether you're captivated by the botanical diversity, the spiritual atmosphere, or simply the breathtaking landscapes, the Valley of Flowers Trek offers a truly magical experience that will leave you with memories to cherish for a lifetime.",
    description:
      "Witness a vibrant splash of colors in the Valley of Flowers, a UNESCO World Heritage Site and a paradise for nature lovers.",
    rating: "⭐⭐⭐⭐",
    location: {
      latitude: 30.7283,
      longitude: 79.6058,
    },
    type: "Trek",
    destination: "Uttarakhand",
    month: "August",
    pros: [
      "Stunning floral diversity",
      "UNESCO World Heritage Site",
      "Combination of natural beauty and spiritual experience",
    ],
    cons: [
      "Limited to monsoon season (July-September)",
      "Rainy weather can be challenging",
      "Moderate difficulty due to initial steep climb",
    ],
    inclusions: [
      "Experienced naturalist guides",
      "Comfortable accommodation in Ghangaria",
      "Nutritious vegetarian meals",
      "Permits and entrance fees",
      "First aid and safety equipment",
    ],
  },
  {
    id: 2,
    price: 6999,
    imgSrc: "./images/Rajmachi-Trek.jpg",
    altText: "Rajmachi Trek",
    title: "Rajmachi Trek",
    season: "Monsoon",
    duration: { days: 2, nights: 1 },
    brief_description:
      "Escape into the heart of Maharashtra's Sahyadri range with our Rajmachi Trek. This monsoon favorite offers a perfect blend of history, adventure, and natural beauty. The trek takes you to the twin forts of Shrivardhan and Manaranjan, offering panoramic views of lush green valleys, cascading waterfalls, and mist-covered landscapes. Starting from the base village of Lonavala, the trail winds through dense forests, scenic plateaus, and rustic villages, giving trekkers a taste of the region's rich biodiversity. On this easy-to-moderate trek, you'll be surrounded by the soothing sound of rain, chirping birds, and the mesmerizing smell of wet earth. Rajmachi Fort, steeped in Maratha history, is a testament to the glory of the bygone era and is a delight for history buffs and photographers. The trek concludes with an overnight stay in a homestay or a campsite, allowing you to soak in the tranquility of this enchanting destination. Perfect for beginners and seasoned trekkers alike, the Rajmachi Trek is a rejuvenating getaway during the monsoon season.",
    description:
      "Enjoy the lush greenery, waterfalls, and misty landscapes on the Rajmachi Trek, a perfect monsoon escape.",
    rating: "⭐⭐⭐⭐⭐",
    location: {
      latitude: 18.8738,
      longitude: 73.4426,
    },
    type: "Trek",
    destination: "Maharashtra",
    month: "July",
    pros: [
      "Rich history and cultural significance",
      "Perfect for beginners",
      "Beautiful monsoon scenery",
    ],
    cons: [
      "Limited to monsoon season",
      "Can be slippery and muddy during rains",
      "Overcrowding during weekends",
    ],
    inclusions: [
      "Guided trek with local experts",
      "Overnight accommodation (homestay or campsite)",
      "Vegetarian meals",
      "First aid and basic safety equipment",
      "Permits and entry fees",
    ],
  },
  {
    id: 3,
    price: 8200,
    imgSrc: "./images/Kudremukh-Trek.png",
    altText: "Kudremukh Trek",
    title: "Kudremukh Trek",
    season: "Monsoon",
    duration: { days: 3, nights: 2 },
    brief_description:
      "Immerse yourself in the captivating beauty of Karnataka's Western Ghats with our Kudremukh Trek. Known for its horse-face-shaped peak, Kudremukh offers breathtaking landscapes dotted with rolling hills, sparkling waterfalls, and verdant grasslands. Starting from Mullodi village, the trail takes you through dense forests, glistening streams, and serene meadows, making every step a photographer's dream. Along the way, you'll encounter unique flora and fauna, as the region is part of the Kudremukh National Park, a biodiversity hotspot. The highlight of the trek is reaching the summit, which provides awe-inspiring views of the surrounding hills and valleys. With expert guides, you'll also learn about the park's conservation efforts and local traditions. This moderately challenging trek is ideal for adventure enthusiasts and nature lovers looking to escape into the wild. The trek includes camping in picturesque locations, giving you a chance to unwind under the starry sky.",
    description:
      "Explore the breathtaking landscapes of Kudremukh, complete with rolling hills, waterfalls, and rich biodiversity.",
    rating: "⭐⭐⭐⭐⭐",
    location: {
      latitude: 13.1355,
      longitude: 75.2553,
    },
    type: "Trek",
    destination: "Karnataka",
    month: "December",
    pros: [
      "Diverse flora and fauna",
      "Stunning summit views",
      "Experience nature at its best",
    ],
    cons: [
      "Moderate difficulty level",
      "Requires forest department permissions",
      "Limited accommodation options in the base village",
    ],
    inclusions: [
      "Guided trek with experienced trekkers",
      "Camping accommodation with basic amenities",
      "Vegetarian meals",
      "Forest entry fees and permits",
      "Safety equipment and first aid",
    ],
  },
];

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
    priceBadge.textContent = `₹${trek.price}`;
    trekCard.appendChild(priceBadge);

    // Image
    const img = document.createElement("img");
    img.classList.add("trek-image");
    img.src = trek.imgSrc.replace("./", "../"); // Add ../ to the image path
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
    trekDuration.textContent = `${trek.duration.days} DAYS - ${trek.duration.nights} NIGHTS`;

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
    trekButton.setAttribute("data-trek-id", trek.id);

    // Add event listener to the button
    trekButton.addEventListener("click", () => {
      const params = new URLSearchParams({
        id: trek.id,
        title: trek.title,
        price: trek.price,
        brief_description: trek.brief_description,
        destination: trek.destination,
        month: trek.month,
        rating: trek.rating,
        image: `.${trek.imgSrc}`, // Add ../ to the image path in URL params
        days: trek.duration.days,
        nights: trek.duration.nights,
        pros: trek.pros,
        cons: trek.cons,
        inclusions: trek.inclusions,
        latitude: trek.location.latitude,
        longitude: trek.location.longitude,
        season: trek.season,
      });
      window.location.href = `./Treks_Destinations/details.html?${params.toString()}`;
    });

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
  const viewMoreButton2 = document.createElement("button");
  viewMoreButton2.classList.add("book-now-button", "viewBtn", "monsoon-btn");
  viewMoreButton2.textContent = "View More";

  // Add the button to the DOM
  summerTreksSection.appendChild(viewMoreButton2);

  // Ensure the event listener is added after the button is in the DOM
  viewMoreButton2.addEventListener("click", function () {
    const queryParams = new URLSearchParams({
      tourType: "Monsoon",
    });

    // Redirect to the new page with query parameters
    window.location.href = `./Treks_Destinations/treks.html?${queryParams.toString()}`;
  });

  section.appendChild(viewMoreButton2);

  return section;
};

// Append to .monsoon-treks section
const monsoonTreks = document.querySelector(".monsoon-treks");
if (monsoonTreks) {
  monsoonTreks.appendChild(createMonsoonTreksSection());
}
