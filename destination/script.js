const destinations = [
  {
    name: "Uttarakhand",
    images: {
      left: "./Uttar/2.png",
      right: "./Uttar/5.png",
      main: "./Uttar/4.png",
      extra1: "./Uttar/3.png",
      extra2: "./Uttar/1.png",
    },
    content: `Uttarakhand, often referred to as the 'Land of Gods,' is a paradise for nature lovers and adventure seekers alike. 
                Discover the beauty of the Valley of Flowers, explore the ancient pilgrimage route to Kedarnath, or bask in the 
                tranquility of Nainital's pristine lakes.`,
    linkText: "EXPLORE NOW",
  },
  {
    name: "Manali",
    images: {
      left: "./Manali/2.png",
      right: "./Manali/5.png",
      main: "./Manali/4.png",
      extra1: "./Manali/3.png",
      extra2: "./Manali/1.png",
    },
    content: `Manali, a picturesque hill station in Himachal Pradesh, is famous for its snow-capped peaks, lush green valleys, 
                and adventure activities. From skiing in Solang Valley to exploring the historic Hidimba Temple, Manali offers 
                something for everyone. Don't miss the Rohtang Pass for a surreal experience in the Himalayas.`,
    linkText: "EXPLORE NOW",
  },
  {
    name: "Ladakh",
    images: {
      left: "./Ladakh/2.png",
      right: "./Ladakh/5.png",
      main: "./Ladakh/4.png",
      extra1: "./Ladakh/3.png",
      extra2: "./Ladakh/1.png",
    },
    content: `Ladakh, known as the 'Land of High Passes,' is a region of unparalleled beauty. With its rugged terrain, 
                        azure Pangong Lake, and stunning monasteries, it is a haven for adventure and spirituality. Ride through 
                        Khardung La or visit the Zanskar Valley for a once-in-a-lifetime experience.`,
    linkText: "EXPLORE NOW",
  },
  {
    name: "Goa",
    images: {
      left: "./Goa/2.png",
      right: "./Goa/5.png",
      main: "./Goa/4.png",
      extra1: "./Goa/3.png",
      extra2: "./Goa/1.png",
    },
    content: `Goa, India’s beach paradise, is famous for its golden sands, vibrant nightlife, and Portuguese heritage. 
                        Explore the serene beaches of South Goa, the bustling shacks of Baga, or the historic churches of Old Goa. 
                        Goa promises relaxation and adventure in equal measure.`,
    linkText: "EXPLORE NOW",
  },
  {
    name: "Rishikesh",
    images: {
      left: "./Rishikesh/2.png",
      right: "./Rishikesh/5.png",
      main: "./Rishikesh/4.png",
      extra1: "./Rishikesh/3.png",
      extra2: "./Rishikesh/1.png",
    },
    content: `Rishikesh, the yoga capital of the world, is nestled in the foothills of the Himalayas. From spiritual 
                        retreats and meditation centers to thrilling white-water rafting and the iconic Laxman Jhula, Rishikesh 
                        offers a unique blend of tranquility and adventure.`,
    linkText: "EXPLORE NOW",
  },
  {
    name: "Himachal P.",
    images: {
      left: "./Himachal/2.png",
      right: "./Himachal/5.png",
      main: "./Himachal/4.png",
      extra1: "./Himachal/3.png",
      extra2: "./Himachal/1.png",
    },
    content: `Himachal Pradesh, a Himalayan wonderland, offers breathtaking landscapes, serene valleys, and adventure opportunities. 
                        Visit Dharamshala, Kullu, and Manali for stunning vistas, or explore Shimla for its colonial charm. Himachal is a true 
                        delight for travelers seeking both peace and adventure.`,
    linkText: "EXPLORE NOW",
  },
  {
    name: "Spiti",
    images: {
      left: "./Spiti/2.png",
      right: "./Spiti/5.png",
      main: "./Spiti/4.png",
      extra1: "./Spiti/3.png",
      extra2: "./Spiti/1.png",
    },
    content: `Spiti, a cold desert mountain valley, is an untouched gem of Himachal Pradesh. Known for its monasteries, 
                        rugged terrains, and snow-clad peaks, Spiti is a paradise for those who seek offbeat adventures. Key Monastery 
                        and Chandratal Lake are must-visit spots.`,
    linkText: "EXPLORE NOW",
  },
  {
    name: "Kashmir",
    images: {
      left: "./Kashmir/2.png",
      right: "./Kashmir/5.png",
      main: "./Kashmir/4.png",
      extra1: "./Kashmir/3.png",
      extra2: "./Kashmir/1.png",
    },
    content: ` Known as 'Paradise on Earth,' Kashmir enchants visitors with its serene lakes, lush valleys, and snow-capped peaks. 
                        Shikara rides on Dal Lake, the tulip gardens of Srinagar, and the pristine beauty of Gulmarg are unforgettable experiences.`,
    linkText: "EXPLORE NOW",
  },
  {
    name: "Madhya P.",
    images: {
      left: "./MP/2.png",
      right: "./MP/5.png",
      main: "./MP/4.png",
      extra1: "./MP/3.png",
      extra2: "./MP/1.png",
    },
    content: ` Madhya Pradesh, the heart of India, is rich in history, wildlife, and culture. Visit the Khajuraho temples for 
                        their intricate carvings, or explore Bandhavgarh National Park for its tiger population. The state promises a 
                        blend of heritage and nature.`,
    linkText: "EXPLORE NOW",
  },
  {
    name: "Rajasthan",
    images: {
      left: "./Rajasthan/2.png",
      right: "./Rajasthan/5.png",
      main: "./Rajasthan/4.png",
      extra1: "./Rajasthan/3.png",
      extra2: "./Rajasthan/1.png",
    },
    content: ` Rajasthan, the 'Land of Kings,' is renowned for its royal heritage, palaces, and vast deserts. Explore the grandeur 
                        of Jaipur's forts, Udaipur's lakes, and Jodhpur's blue city charm. Rajasthan's vibrant culture is a feast for the senses.`,
    linkText: "EXPLORE NOW",
  },
  {
    name: "Jaisalmer",
    images: {
      left: "./Jaisalmer/2.png",
      right: "./Jaisalmer/5.png",
      main: "./Jaisalmer/4.png",
      extra1: "./Jaisalmer/3.png",
      extra2: "./Jaisalmer/1.png",
    },
    content: ` Jaisalmer, the 'Golden City,' is famous for its magnificent forts, desert camps, and camel safaris. The iconic 
                        Jaisalmer Fort and the serene Sam Sand Dunes offer a blend of heritage and adventure.`,
    linkText: "EXPLORE NOW",
  },
  {
    name: "Shimla",
    images: {
      left: "./Shimla/2.png",
      right: "./Shimla/5.png",
      main: "./Shimla/4.png",
      extra1: "./Shimla/3.png",
      extra2: "./Shimla/1.png",
    },
    content: ` Shimla, the 'Queen of Hills,' is a picturesque hill station known for its colonial architecture and lush greenery. 
                        Walk along the Mall Road, explore the Ridge, and enjoy the serene views of the Himalayan foothills.`,
    linkText: "EXPLORE NOW",
  },
  {
    name: "Sikkim",
    images: {
      left: "./Sikkim/2.png",
      right: "./Sikkim/5.png",
      main: "./Sikkim/4.png",
      extra1: "./Sikkim/3.png",
      extra2: "./Sikkim/1.png",
    },
    content: `Sikkim is a small yet breathtakingly beautiful state in Northeast India. It is known for its stunning landscapes, 
                        vibrant monasteries, and adventure trails. Explore Gangtok, the capital city, or visit the serene Tsomgo Lake.`,
    linkText: "EXPLORE NOW",
  },
  {
    name: "Arunachal P.",
    images: {
      left: "./Arunachal/2.png",
      right: "./Arunachal/5.png",
      main: "./Arunachal/4.png",
      extra1: "./Arunachal/3.png",
      extra2: "./Arunachal/1.png",
    },
    content: `Arunachal Pradesh, the 'Land of Dawn-lit Mountains,' is famous for its tribal culture, natural beauty, and 
                        adventure opportunities. Explore Tawang, known for its monasteries, or trek through the scenic Ziro Valley.`,
    linkText: "EXPLORE NOW",
  },
  {
    name: "Assam",
    images: {
      left: "./Assam/2.png",
      right: "./Assam/5.png",
      main: "./Assam/4.png",
      extra1: "./Assam/3.png",
      extra2: "./Assam/1.png",
    },
    content: `Assam, located in Northeast India, is famous for its tea gardens, wildlife sanctuaries, and vibrant culture. 
                    Experience the charm of Kaziranga National Park, home to the one-horned rhinoceros, and cruise on the mighty Brahmaputra River.`,
    linkText: "EXPLORE NOW",
  },
  {
    name: "Darjeeling",
    images: {
      left: "./Darjeeling/2.png",
      right: "./Darjeeling/5.png",
      main: "./Darjeeling/4.png",
      extra1: "./Darjeeling/3.png",
      extra2: "./Darjeeling/1.png",
    },
    content: ` Darjeeling, the 'Queen of the Hills,' is famous for its scenic beauty, tea plantations, and the majestic view of 
                    Mount Kanchenjunga. Take a ride on the Darjeeling Himalayan Railway, a UNESCO World Heritage Site.`,
    linkText: "EXPLORE NOW",
  },
  {
    name: "Leh",
    images: {
      left: "./Leh/2.png",
      right: "./Leh/5.png",
      main: "./Leh/4.png",
      extra1: "./Leh/3.png",
      extra2: "./Leh/1.png",
    },
    content: `Leh, located in the heart of Ladakh, is a high-altitude destination known for its monasteries, breathtaking landscapes, 
                    and adventure activities. Visit Pangong Lake, Nubra Valley, and the ancient monasteries of Hemis and Thiksey.`,
    linkText: "EXPLORE NOW",
  },
  {
    name: "Hampi",
    images: {
      left: "./Hampi/2.png",
      right: "./Hampi/5.png",
      main: "./Hampi/4.png",
      extra1: "./Hampi/3.png",
      extra2: "./Hampi/1.png",
    },
    content: `Hampi, a UNESCO World Heritage Site, is a treasure trove of history and architecture. Located in Karnataka, 
                    it boasts magnificent ruins of the Vijayanagara Empire, captivating landscapes, and unique rock formations.`,
    linkText: "EXPLORE NOW",
  },
];

function createDestinationHTML(destination) {
  return `
      <section class="UttDest">
          <div class="leftSection">
              <div class="leftImg">
                  <img src="${destination.images.left}" alt="" class="One">
              </div>
              <div class="rightImg">
                  <img src="${destination.images.right}" alt="" class="Two">
              </div>
          </div>
          <div class="rightSection">
              <div class="contentDest">
                  <div class="heading">
                      <p>${destination.name}</p>
                  </div>
                  <div class="line"></div>
                  <div class="glass"> <p class="contentP">${destination.content}</p></div>
              </div>
              <div class="imageDestSec">
                  <div class="imgRLeft">
                      <img src="${destination.images.main}" alt="" class="Three">
                  </div>
                  <div class="imgRRight">
                      <div class="Four">
                          <img src="${destination.images.extra1}" alt="">
                      </div>
                      <div class="Five">
                          <img src="${destination.images.extra2}" alt="">
                      </div>
                      <div class="Six">
                          <p><a href="#">${destination.linkText}</a></p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  `;
}

function renderDestinations(destinations) {
  const container = document.getElementById("destinations-container");
  destinations.forEach((destination) => {
    container.innerHTML += createDestinationHTML(destination);
  });
}

// Call this function to render destinations
renderDestinations(destinations);
