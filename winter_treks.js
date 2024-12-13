const winterTreksData = [
  {
    id: 1,
    price: 9500,
    imgSrc: "./images/har-ki-dun.jpg",
    altText: "Har Ki Dun Trek",
    title: "Har ki Dun Trek",
    duration: { days: 5, nights: 4 },
    brief_description:
      "Discover the 'Valley of Gods' with our Har Ki Dun Trek, a journey through one of the most picturesque valleys in the Garhwal Himalayas. This moderate trek takes you to an ancient village with architecture dating back to the Mahabharata era. Starting from the quaint village of Sankri, the trail winds through dense pine forests, terraced fields, and charming Himalayan villages. As you ascend, you'll be treated to stunning views of Swargarohini peaks, Black Peak, and Bandarpoonch. The Har Ki Dun valley, shaped like a cradle, offers a unique landscape with its lush meadows and glacial streams. Throughout the trek, you'll experience the rich culture of the Garhwal region, interacting with friendly locals and witnessing their traditional way of life. The trek also offers opportunities to spot diverse Himalayan flora and fauna. Our expert guides will share fascinating stories about the region's mythology, ecology, and the sustainable practices of the mountain communities. This trek is perfect for nature lovers, photography enthusiasts, and those seeking a blend of cultural immersion and Himalayan adventure.",
    description:
      "Discover the captivating beauty of the Har Ki Dun trek, nestled snugly in the embrace of the Garhwal Himalayas.",
    rating: "⭐⭐⭐⭐⭐",
    location: {
      latitude: 31.1642,
      longitude: 78.4297,
    },
    type: "Trek",
    destination: "Uttarakhand",
    month: "December",
    pros: [
      "Beginner-friendly trek",
      "Cultural immersion with Himalayan villages",
      "Picturesque valleys and rivers",
    ],
    cons: [
      "Limited connectivity",
      "Cold winter temperatures",
      "Remote trail with basic facilities",
    ],
    inclusions: [
      "Professional trek guide",
      "Tented accommodations",
      "All meals during the trek",
      "Permits and forest fees",
      "First aid and safety equipment",
    ],
  },
  {
    id: 2,
    price: 15999,
    imgSrc: "./images/gaumukh-tapovan.jpg",
    altText: "Gaumukh Tapovan Trek",
    title: "Gaumukh Tapovan Trek",
    duration: { days: 5, nights: 4 },
    brief_description:
      "Embark on a spiritual and adventurous journey with our Gaumukh Tapovan Trek, a pilgrimage to the source of the holy Ganges River. This challenging trek takes you through the heart of the Garhwal Himalayas, offering stunning views of some of India's most revered peaks. The journey begins in the pilgrimage town of Gangotri, allowing time for acclimatization and spiritual reflection. As you trek along the Bhagirathi River, you'll witness the dramatic transformation of the landscape from dense forests to rocky moraines. The highlight of the trek is reaching Gaumukh, the snout of the Gangotri Glacier and the source of the Ganges. From here, you'll ascend to Tapovan, a high-altitude meadow offering breathtaking views of Mount Shivling, Bhagirathi peaks, and Meru. Throughout the journey, you'll camp at scenic locations, including the beautiful Nandanvan campsite. Our experienced guides will share insights about the region's geology, mythology, and the efforts to preserve this fragile ecosystem. This trek combines natural beauty, adventure, and spiritual significance, making it a truly unique Himalayan experience.",

    description:
      "For both spiritual seekers and adventure seekers, the Gaumukh Tapovan Trek is a pilgrimage of enormous significance.",
    rating: "⭐⭐⭐⭐⭐",
    location: {
      latitude: 30.9916,
      longitude: 79.0669,
    },
    type: "Trek",
    destination: "Uttarakhand",
    month: "November",
    pros: [
      "Stunning views of Shivling and Bhagirathi peaks",
      "Spiritual significance of the Gangotri glacier",
      "Challenging high-altitude trekking",
    ],
    cons: [
      "Requires excellent physical fitness",
      "Extreme weather conditions",
      "Limited facilities in remote areas",
    ],
    inclusions: [
      "Experienced trek leaders",
      "Tented accommodations",
      "All vegetarian meals",
      "Permits and forest entry fees",
      "Emergency first aid support",
    ],
  },
  {
    id: 3,
    price: 8500,
    imgSrc: "./images/phulara-ridge.jpg",
    altText: "Phulara Ridge Trek",
    title: "Phulara Ridge Trek",
    duration: { days: 5, nights: 4 },
    brief_description:
      "The Phulara Ridge Trek is a relatively easy trek that offers breathtaking views of the snow-capped peaks of the Himalayas. As you walk through lush forests, meadows, and small villages, you get a chance to immerse yourself in the beauty and serenity of nature. It's a great trek for those looking to experience the Himalayan wilderness without going on a strenuous journey.",

    description:
      "The Phulara Ridge Trek is a captivating choice for several reasons. Ridge treks are a rarity in our country.",
    rating: "⭐⭐⭐⭐⭐",
    location: {
      latitude: 30.6393,
      longitude: 78.5171,
    },
    type: "Trek",
    destination: "Uttarakhand",
    month: "December",
    pros: [
      "Unique ridge trekking experience",
      "Panoramic views of Himalayan peaks",
      "Less crowded trail",
    ],
    cons: [
      "No permanent settlements along the trail",
      "Cold winter nights",
      "Shorter trek duration",
    ],
    inclusions: [
      "Professional guides",
      "Comfortable campsites",
      "Healthy vegetarian meals",
      "Forest permits",
      "Basic safety equipment",
    ],
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
      season: "Winter",
    });
    window.location.href = `./Treks_Destinations/details.html?${params.toString()}`;
  });

  treksContainer.appendChild(trekCard);
});

winterTreksSection.appendChild(treksContainer);

const viewMoreButton = document.createElement("button");
viewMoreButton.classList.add("book-now-button", "viewBtn", "winter-btn");
viewMoreButton.textContent = "View More";

// Add the button to the DOM
winterTreksSection.appendChild(viewMoreButton);

// Ensure the event listener is added after the button is in the DOM
viewMoreButton.addEventListener("click", function () {
  const queryParams = new URLSearchParams({
    tourType: "Winter",
  });

  // Redirect to the new page with query parameters
  window.location.href = `./Treks_Destinations/treks.html?${queryParams.toString()}`;
});
