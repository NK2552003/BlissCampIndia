const summerTreksData = [
  {
    id: 1,
    price: 10000,
    imgSrc: "./images/Hampta-Pass-Trek.jpg",
    altText: "Hampta Pass Trek",
    title: "Hampta Pass Trek",
    duration: { days: 6, nights: 5 },
    brief_description:
      "The Hampta Pass Trek is a fascinating journey that offers a unique blend of contrasting landscapes, making it one of the most popular treks in Himachal Pradesh. Starting from the lush green Kullu Valley, the trail takes you through forests, meadows, and pristine streams before ascending to the stark, barren terrain of the Spiti Valley. This transition from verdant greenery to dramatic arid landscapes is what makes this trek truly special. The trek is relatively moderate, making it suitable for both beginners and experienced trekkers. Along the way, you'll encounter spectacular views of snow-capped peaks, serene rivers, and charming Himalayan villages. Key highlights include crossing the Hampta Pass at an altitude of 14,100 feet, where the panoramic views will leave you breathless. You'll also visit the pristine Chandratal Lake, a crescent-shaped jewel that reflects the surrounding mountains like a mirror. Camping under a star-lit sky amidst the tranquil beauty of the Himalayas adds a magical touch to the adventure. Whether you're seeking a thrilling experience, an escape into nature, or a chance to immerse yourself in the beauty of the mountains, the Hampta Pass Trek promises an unforgettable journey filled with awe and wonder.",
    description:
      "Witness the breathtaking transformation from the lush Kullu Valley to the stark desert of Spiti on this thrilling trek.",
    rating: "⭐⭐⭐⭐⭐",
    location: {
      latitude: 32.3381,
      longitude: 77.2325,
    },
    type: "Trek",
    destination: "Himachal Pradesh",
    month: "June",
    pros: [
      "Diverse landscapes from greenery to arid terrain",
      "Moderate difficulty, ideal for adventure lovers",
      "Camping near beautiful river streams",
    ],
    cons: [
      "Unpredictable weather conditions",
      "Altitude acclimatization needed",
      "Can be challenging for beginners",
    ],
    inclusions: [
      "Expert trek guides",
      "Camping accommodations",
      "Vegetarian meals",
      "Permits and forest fees",
      "First aid and safety equipment",
    ],
  },
  {
    id: 2,
    price: 12500,
    imgSrc: "./images/Roopkund-Trek.jpg",
    altText: "Roopkund Trek",
    title: "Roopkund Trek",
    duration: { days: 8, nights: 7 },
    brief_description:
      "The Roopkund Trek is a perfect blend of adventure, mystery, and natural beauty, making it a favorite among trekking enthusiasts. Located in Uttarakhand, this trek is famous for the mysterious Skeleton Lake, where human skeletal remains can still be seen at the bottom of the glacial lake. The journey to Roopkund begins with dense forests of oak and rhododendron, offering vibrant shades of green and pink during the trekking season. As you ascend, the landscape transforms into vast meadows, known as ‘Bugyals,’ with enchanting views of the surrounding Himalayan peaks. Highlights of the trek include traversing the Ali and Bedni Bugyals, two of the largest high-altitude meadows in India, where trekkers can camp amidst breathtaking scenery. At higher altitudes, you’ll encounter snow-covered trails and glaciers, culminating in the surreal beauty of Roopkund Lake, surrounded by towering peaks like Trishul and Nanda Ghunti. The trek is moderately challenging and requires a good level of fitness. It's an unforgettable experience for those seeking a mix of thrill, mystery, and serenity in the lap of the Himalayas.",
    description:
      "A thrilling high-altitude trek to the mysterious Skeleton Lake surrounded by breathtaking Himalayan peaks.",
    rating: "⭐⭐⭐⭐⭐",
    location: {
      latitude: 30.1302,
      longitude: 79.5921,
    },
    type: "Trek",
    destination: "Uttarakhand",
    month: "May",
    pros: [
      "Spectacular views of Trishul and Nanda Ghunti peaks",
      "Mystery of the Skeleton Lake",
      "Perfect for experienced trekkers",
    ],
    cons: [
      "High-altitude trek, requires fitness",
      "Weather-dependent and snow-covered paths",
      "Limited accommodation at base camp",
    ],
    inclusions: [
      "Experienced trek leaders",
      "Tented accommodations",
      "All meals during the trek",
      "Permits and forest fees",
      "Emergency support and first aid",
    ],
  },
  {
    id: 3,
    price: 9000,
    imgSrc: "./images/Beas-Kund-Trek.jpg",
    altText: "Beas Kund Trek",
    title: "Beas Kund Trek",
    duration: { days: 4, nights: 3 },
    brief_description:
      "The Beas Kund Trek is a delightful adventure for beginners and nature lovers alike. Located in the picturesque region of Himachal Pradesh, this trek offers an easy yet rewarding journey to the serene Beas Kund, a glacial lake nestled amidst the towering peaks of the Himalayas. The trek starts from Solang Valley, a hub of adventure activities, and takes you through lush green meadows, dense forests, and vibrant alpine flowers. The sight of grazing sheep and the sound of cascading streams create a tranquil atmosphere that soothes the soul. One of the trek’s highlights is camping by the riverbank under a blanket of stars, providing a truly magical experience. As you ascend towards Beas Kund, you’ll be treated to breathtaking views of snow-clad peaks like Hanuman Tibba and Friendship Peak. The lake itself is revered as the source of the Beas River and holds mythological significance. The Beas Kund Trek is perfect for those looking to escape the hustle of city life and immerse themselves in the serene beauty of the Himalayas. It’s an excellent choice for families, beginners, and anyone seeking a short yet enchanting trekking experience.",
    description:
      "An easy trek perfect for beginners, offering serene views and a visit to the sacred Beas Kund glacier lake.",
    rating: "⭐⭐⭐⭐⭐",
    location: {
      latitude: 32.2432,
      longitude: 77.1887,
    },
    type: "Trek",
    destination: "Himachal Pradesh",
    month: "May",
    pros: [
      "Beginner-friendly trek",
      "Picturesque meadows and glaciers",
      "Easily accessible from Manali",
    ],
    cons: [
      "Short trek duration",
      "Can get crowded during peak season",
      "Limited exploration beyond the lake",
    ],
    inclusions: [
      "Professional guides",
      "Comfortable campsites",
      "Nutritious meals",
      "Permits and forest entry fees",
      "Basic safety equipment and first aid",
    ],
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
    <div class="price-badge">₹${trek.price}</div>
    <img src="${trek.imgSrc}" alt="${trek.altText}" class="trek-image" />
    <div class="trek-details">
      <h3 class="trek-title">${trek.title}</h3>
      <p class="trek-duration">${trek.duration.days} Days / ${trek.duration.nights} Nights</p>
      <p class="trek-description">${trek.description}</p>
      <div class="trek-footer">
        <div class="trek-rating">${trek.rating}</div>
        <button class="trek-btn" data-trek-id="${trek.id}">Read More</button>
      </div>
    </div>
  `;

  // Add event listener to the "Read More" button
  const trekButton = trekCard.querySelector(".trek-btn");
  trekButton.addEventListener("click", () => {
    const params = new URLSearchParams({
      id: trek.id,
      title: trek.title,
      price: trek.price,
      brief_description: trek.brief_description,
      destination: trek.destination,
      month: trek.month,
      rating: trek.rating,
      image: `.${trek.imgSrc}`,
      days: trek.duration.days,
      nights: trek.duration.nights,
      pros: trek.pros,
      cons: trek.cons,
      inclusions: trek.inclusions,
      latitude: trek.location.latitude,
      longitude: trek.location.longitude,
      season: "Summer",
    });
    window.location.href = `./Treks_Destinations/details.html?${params.toString()}`;
  });

  summerTreksContainer.appendChild(trekCard);
});

// Append the container to the section
summerTreksSection.appendChild(summerTreksContainer);

const viewMoreButton1 = document.createElement("button");
viewMoreButton1.classList.add("book-now-button", "viewBtn", "summer-btn");
viewMoreButton1.textContent = "View More";

// Add the button to the DOM
summerTreksSection.appendChild(viewMoreButton1);

// Ensure the event listener is added after the button is in the DOM
viewMoreButton1.addEventListener("click", function () {
  const queryParams = new URLSearchParams({
    tourType: "Summer",
  });

  // Redirect to the new page with query parameters
  window.location.href = `./Treks_Destinations/treks.html?${queryParams.toString()}`;
});
