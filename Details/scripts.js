let map;
const mapStyles = [
  {
    featureType: "all",
    elementType: "labels.text.fill",
    stylers: [{ saturation: 36 }, { color: "#333333" }, { lightness: 40 }],
  },
  {
    featureType: "all",
    elementType: "labels.text.stroke",
    stylers: [{ visibility: "on" }, { color: "#ffffff" }, { lightness: 16 }],
  },
  {
    featureType: "all",
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "administrative",
    elementType: "geometry.fill",
    stylers: [{ color: "#fefefe" }, { lightness: 20 }],
  },
  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [{ color: "#fefefe" }, { lightness: 17 }, { weight: 1.2 }],
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [{ color: "#f5f5f5" }, { lightness: 20 }],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ color: "#f5f5f5" }, { lightness: 21 }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [{ color: "#ffffff" }, { lightness: 17 }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#ffffff" }, { lightness: 29 }, { weight: 0.2 }],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [{ color: "#ffffff" }, { lightness: 18 }],
  },
  {
    featureType: "road.local",
    elementType: "geometry",
    stylers: [{ color: "#ffffff" }, { lightness: 16 }],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#f2f2f2" }, { lightness: 19 }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#e9e9e9" }, { lightness: 17 }],
  },
];

function initMap() {
  const location = { lat: -34.397, lng: 150.644 }; // Replace with your actual coordinates

  try {
    map = new google.maps.Map(document.getElementById("loc-map"), {
      center: location,
      zoom: 15,
      styles: mapStyles,
      disableDefaultUI: true,
      gestureHandling: "cooperative",
    });

    const marker = new google.maps.Marker({
      position: location,
      map: map,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 10,
        fillColor: "#000000",
        fillOpacity: 1,
        strokeWeight: 0,
      },
    });

    document.getElementById("loc-loading").style.display = "none";
  } catch (error) {
    console.error("Error initializing map:", error);
    document.getElementById("loc-error").style.display = "block";
    document.getElementById("loc-loading").style.display = "none";
  }
}

// Function to load Google Maps API
function loadGoogleMapsAPI() {
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
  script.async = true;
  script.defer = true;
  script.onerror = () => {
    document.getElementById("loc-error").style.display = "block";
    document.getElementById("loc-loading").style.display = "none";
  };
  document.head.appendChild(script);
}

// Load the Google Maps API
loadGoogleMapsAPI();

document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".dst-nav-item");
  const contentDiv = document.querySelector(".dst-content");

  const sectionData = {
    Overview: `
              <h1 class="dst-heading">About The Destination</h1>
              <p class="dst-description">
                  A Historic American Prairie-Style Mansion in Toorak on one of the suburb's most prestigious roads...
                  <a href="#" class="dst-read-more" id="readMoreLink">Read More</a>
              </p>
          `,
    Amenities: `
              <h2 class="dst-heading">Pros</h2>
              <div class="dst-facilities-grid">
                  <div class="dst-facility"><span>Wifi</span></div>
                  <div class="dst-facility"><span>Backyard</span></div>
                  <div class="dst-facility"><span>Swimming Pool</span></div>
                  <div class="dst-facility"><span>Free Parking</span></div>
              </div>
            <h2 class="dst-heading">Cons</h2>
              <div class="dst-facilities-grid">
                  <div class="dst-facility"><span>Wifi</span></div>
                  <div class="dst-facility"><span>Backyard</span></div>
                  <div class="dst-facility"><span>Swimming Pool</span></div>
                  <div class="dst-facility"><span>Free Parking</span></div>
              </div>
          `,
    Policies: `
              <h1 class="dst-heading">Policies</h1>
              <p class="dst-description">Check-in at 2 PM, Check-out by 12 PM. Pets are not allowed...</p>
          `,
    "What's included": `
              <h1 class="dst-heading">What's Included</h1>
              <ul class="dst-list">
                  <li>Free breakfast</li>
                  <li>Access to the pool and gym</li>
                  <li>Complimentary Wi-Fi</li>
              </ul>
          `,
    Reviews: `
              <h1 class="dst-heading">Reviews</h1>
              <p class="dst-description">See what our customers have to say about us!</p>
          `,
    Availability: `
              <h1 class="dst-heading">Check Availability</h1>
              <p class="dst-description">Book now to secure your spot!</p>
          `,
    FAQs: `
              <h1 class="dst-heading">Frequently Asked Questions</h1>
              <p class="dst-description">Find answers to our most common questions here.</p>
          `,
  };

  // Load "Overview" section by default
  contentDiv.innerHTML = sectionData["Overview"];
  navItems[0].classList.add("active");

  // Function to handle "Read More" expansion
  function handleReadMore() {
    const readMoreLink = document.getElementById("readMoreLink");
    if (readMoreLink) {
      readMoreLink.addEventListener("click", (e) => {
        e.preventDefault();
        const fullContent = `
              A Historic American Prairie-Style Mansion in Toorak on one of the suburb's most prestigious roads. 
              The mansion is renowned for its architectural significance, beautiful landscapes, and cultural heritage. 
              Built in the early 20th century, it showcases a unique blend of traditional and modern design elements that captivate visitors.
          `;
        readMoreLink.parentElement.innerHTML = fullContent;
      });
    }
  }

  // Add event listeners for navigation items
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Remove 'active' class from all nav items
      navItems.forEach((nav) => nav.classList.remove("active"));

      // Add 'active' class to clicked item
      item.classList.add("active");

      // Update content
      const sectionName = item.textContent.trim();
      contentDiv.innerHTML =
        sectionData[sectionName] || "<p>Content not available</p>";

      // Add "Read More" functionality for Overview section
      if (sectionName === "Overview") {
        handleReadMore();
      }
    });
  });

  // Initialize "Read More" functionality for default load
  handleReadMore();
});
