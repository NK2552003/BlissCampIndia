document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);

  // Populate tour details
  document.getElementById("rgf-title").textContent =
    params.get("title") || "Tour Title";

  const tourInfo = document.getElementById("rgf-meta");
  tourInfo.innerHTML = `
    <div class="rgf-rating">
      <span class="rgf-star">★</span>
      <span>${params.get("rating") || "0.0"}</span>
      <span class="rgf-reviews">(${params.get("reviews") || "0"} Reviews)</span>
    </div>
    <div class="rgf-location">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
      <span>${params.get("destination") || "Unknown Destination"}</span>
    </div>
  `;

  const imageElement = document.querySelector(".rgf-image");
  const imageUrl = params.get("image") || "default.jpg";

  if (imageElement) {
    imageElement.src = imageUrl;
    imageElement.alt = params.get("title") || "Tour Image";
  }

  const navItems = document.querySelectorAll(".dst-nav-item");
  const contentDiv = document.querySelector(".dst-content");

  const sectionData = {
    Overview: `
      <h1 class="dst-heading">About The Destination</h1>
      <p class="dst-description">
        ${(
          params.get("brief_description") || "No description available."
        ).substring(0, 400)}...
        <a href="#" class="dst-read-more" id="readMoreLink">Read More</a>
      </p>
    `,
    Pros: `
      <h2 class="dst-heading">Pros</h2>
      <div class="dst-facilities-grid">
        ${(params.get("pros") || "None")
          .split(",")
          .map(
            (pro) =>
              `<div class="dst-facility"><span>${pro.trim()}</span></div>`
          )
          .join("")}
      </div>
    `,
    Cons: `
      <h2 class="dst-heading">Cons</h2>
      <div class="dst-facilities-grid">
        ${(params.get("cons") || "None")
          .split(",")
          .map(
            (con) =>
              `<div class="dst-facility"><span>${con.trim()}</span></div>`
          )
          .join("")}
      </div>
    `,
    "What's included": `
      <h2 class="dst-heading">What's Included</h2>
      <div class="dst-facilities-grid">
        ${(params.get("inclusions") || "None")
          .split(",")
          .map(
            (item) =>
              `<div class="dst-facility"><span>${item.trim()}</span></div>`
          )
          .join("")}
      </div>
    `,
    Availability: `
      <h1 class="dst-heading">Check Availability</h1>
      <p class="dst-description">Book now to secure your spot!</p>
    `,
    FAQs: `
      <h1 class="dst-heading">Frequently Asked Questions</h1>
      <div class="dst-faqs">
        <p class="faq-item"><strong>Q1:</strong> What is the best time to go on this trek?</p>
        <p class="faq-answer">The best time for this trek is between March and June or September to November for favorable weather conditions.</p>
        <!-- Add more FAQs as necessary -->
      </div>
    `,
  };

  // Load "Overview" section by default
  contentDiv.innerHTML = sectionData["Overview"];
  navItems[0]?.classList.add("active");

  // Function to handle "Read More" expansion
  function handleReadMore() {
    const readMoreLink = document.getElementById("readMoreLink");
    if (readMoreLink) {
      readMoreLink.addEventListener("click", (e) => {
        e.preventDefault();
        readMoreLink.parentElement.innerHTML =
          params.get("brief_description") || "No additional details available.";
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

  // Set other fields
  document.getElementById("month").value = params.get("month") || "N/A";
  document.getElementById("season").value = params.get("season") || "N/A";
  document.getElementById("price").textContent = parseInt(
    params.get("price") || "1000",
    10
  ).toLocaleString();
  document.getElementById("duration").textContent = `${
    params.get("days") || "0"
  } days, ${params.get("nights") || "0"} nights`;
  document.getElementById("latitude").textContent =
    params.get("latitude") || "N/A";
  document.getElementById("longitude").textContent =
    params.get("longitude") || "N/A";

  // Tab functionality
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const tabId = button.getAttribute("data-tab");

      // Remove 'active' class from all buttons and contents
      tabButtons.forEach((btn) => {
        btn.classList.remove("active");
        btn.setAttribute("aria-selected", "false");
      });
      tabContents.forEach((content) => content.classList.remove("active"));

      // Add 'active' class to the clicked button and corresponding content
      button.classList.add("active");
      button.setAttribute("aria-selected", "true");
      document.getElementById(tabId).classList.add("active");
    });
  });

  // Set the first tab as active by default
  if (tabButtons.length > 0) {
    tabButtons[0].click();
  }

  // Booking functionality
  const pricePerPerson = parseInt(params.get("price") || "1000", 10);
  const personsInput = document.getElementById("persons");
  const totalPriceElement = document.getElementById("totalPrice");

  function updateTotalPrice() {
    const persons = parseInt(personsInput.value, 10) || 1;
    const totalPrice = persons * pricePerPerson;
    totalPriceElement.textContent = totalPrice.toLocaleString();
  }

  personsInput.addEventListener("change", updateTotalPrice);
  updateTotalPrice(); // Initial calculation

  document.getElementById("bookNow").addEventListener("click", () => {
    const persons = personsInput.value || 1;
    alert(`Booking for ${persons} person(s) is confirmed!`);
  });
});
