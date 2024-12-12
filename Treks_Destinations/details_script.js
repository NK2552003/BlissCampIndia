document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);

  // Populate tour details
  document.getElementById("rgf-title").textContent = params.get("title");

  const tourInfo = document.getElementById("rgf-meta");
  tourInfo.innerHTML = `
     <div class="rgf-rating">
          <span class="rgf-star">★</span>
          <span>${params.get("rating")}</span>
          <span class="rgf-reviews">(234 Reviews)</span>
      </div>
      <div class="rgf-location">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
          </svg>
          <span>${params.get("destination")}</span>
      </div>
      `;
  //   document.getElementById("overview-text").textContent =
  //     params.get("brief_description");
  //   document.getElementById("pros-text").textContent = params.get("pros");
  //   document.getElementById("cons-text").textContent = params.get("cons");
  //   document.getElementById("inclusions-text").textContent =
  //     params.get("inclusions");
  const navItems = document.querySelectorAll(".dst-nav-item");
  const contentDiv = document.querySelector(".dst-content");

  const imageElement = document.querySelector(".rgf-image");
  const imageUrl = params.get("image") || "default.jpg";

  if (imageElement) {
    imageElement.src = imageUrl;
    imageElement.alt = params.get("title") || "Tour Image";
  }

  const sectionData = {
    Overview: `
              <h1 class="dst-heading">About The Destination</h1>
              <p class="dst-description">
                  ${params.get("brief_description").substring(0, 400)}...
                  <a href="#" class="dst-read-more" id="readMoreLink">Read More</a>
              </p>
          `,
    Pros: `
          <h2 class="dst-heading">Pros</h2>
          <div class="dst-facilities-grid">
              ${params
                .get("pros")
                .split(",")
                .map(
                  (pro) => `<div class="dst-facility"><span>${pro}</span></div>`
                )
                .join("")}
          </div>
      `,
    Cons: `
        <h2 class="dst-heading">Cons</h2>
          <div class="dst-facilities-grid">
              ${params
                .get("cons")
                .split(",")
                .map(
                  (con) => `<div class="dst-facility"><span>${con}</span></div>`
                )
                .join("")}
          </div>
  `,

    "What's included": `
 <h2 class="dst-heading">What's Included</h2>
          <div class="dst-facilities-grid">
              ${params
                .get("inclusions")
                .split(",")
                .map(
                  (item) =>
                    `<div class="dst-facility"><span>${item}</span></div>`
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
      
              <p class="faq-item"><strong>Q2:</strong> How difficult is this trek?</p>
              <p class="faq-answer">This trek is moderate to difficult and suitable for trekkers with some prior experience.</p>
      
              <p class="faq-item"><strong>Q3:</strong> What should I pack for the trek?</p>
              <p class="faq-answer">Pack essentials like trekking shoes, warm clothes, a raincoat, a first-aid kit, and sufficient water.</p>
      
              <p class="faq-item"><strong>Q4:</strong> Are guides available during the trek?</p>
              <p class="faq-answer">Yes, professional guides are available to assist you throughout the trek.</p>
      
              <p class="faq-item"><strong>Q5:</strong> Is it safe for solo travelers?</p>
              <p class="faq-answer">Yes, the trek is safe for solo travelers, but it’s recommended to inform someone about your plans.</p>
      
              <p class="faq-item"><strong>Q6:</strong> Are meals provided during the trek?</p>
              <p class="faq-answer">Yes, meals are included in the package and provided at designated stops.</p>
      
              <p class="faq-item"><strong>Q7:</strong> What kind of fitness level is required?</p>
              <p class="faq-answer">You need to be moderately fit and capable of walking 6-8 hours a day on uneven terrain.</p>
      
              <p class="faq-item"><strong>Q8:</strong> Are there any age restrictions?</p>
              <p class="faq-answer">The trek is suitable for ages 12 and above, depending on fitness levels.</p>
      
              <p class="faq-item"><strong>Q9:</strong> Will there be network connectivity?</p>
              <p class="faq-answer">Network connectivity is limited, so it's better to inform your contacts in advance.</p>
      
              <p class="faq-item"><strong>Q10:</strong> What happens in case of an emergency?</p>
              <p class="faq-answer">Emergency evacuation arrangements are available, and the guides are trained in first aid.</p>
          </div>
      `,
    Policy: `
       <h1 class="dst-heading">Privacy and Policy</h1>
    <div class="dst-privacy-policy">
        <p>At <strong>BlissCampIndia</strong>, we prioritize the privacy and safety of our customers. Below are the key points of our privacy and policy:</p>
        <p><strong>1. Data Collection:</strong> We collect minimal personal data, including your name, email, and contact number, solely for booking and communication purposes.</p>
        <p><strong>2. Data Usage:</strong> Your data will only be used for managing your bookings and providing updates on your trek. We will not share your information with third parties without your consent.</p>
        <p><strong>3. Payment Security:</strong> All transactions are conducted through secure payment gateways to ensure the safety of your financial details.</p>
        <p><strong>4. Cancellation Policy:</strong> Cancellations made 15 days before the trek start date are eligible for a full refund. No refunds for cancellations made less than 7 days before the trek.</p>
        <p><strong>5. Liability:</strong> BlissCampIndia is not responsible for delays, accidents, or unforeseen circumstances during the trek. Safety precautions will always be followed.</p>
        <p><strong>6. Cookies:</strong> Our website uses cookies to improve user experience. By using our website, you agree to our cookie policy.</p>
        <p><strong>7. Changes to Policy:</strong> BlissCampIndia reserves the right to update its privacy policy at any time. Users will be notified of significant changes via email or the website.</p>
        <p><strong>8. Contact Us:</strong> For any concerns or questions, please email us at <a href="mailto:info@blisscampindia.com">info@blisscampindia.com</a>.</p>
    </div>
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
                 ${params.get("brief_description")}
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

  document.getElementById("month").value = params.get("month");
  document.getElementById("season").value = params.get("season");
  document.getElementById("price").textContent = parseInt(
    params.get("price")
  ).toLocaleString();
  document.getElementById("duration").textContent = `${params.get(
    "days"
  )} days, ${params.get("nights")} nights`;
  document.getElementById("latitude").textContent = params.get("latitude");
  document.getElementById("longitude").textContent = params.get("longitude");

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

  // Optional: Set the first tab as active by default
  if (tabButtons.length > 0) {
    tabButtons[0].click();
  }
  // Book Now button functionality
  document.getElementById("bookNow").addEventListener("click", () => {
    const persons = document.getElementById("persons").value;
    alert(`Booking for ${persons} person(s) is confirmed!`);
  });

  // Set the price per person from the URL or use a default value
  const pricePerPerson = parseInt(params.get("price")) || 1000; // Use 1000 as default if not provided
  document.getElementById("price").textContent =
    pricePerPerson.toLocaleString(); // Display per person price

  // Set the duration
  document.getElementById("duration").textContent = `${params.get(
    "days"
  )} days, ${params.get("nights")} nights`;

  // Function to update the total price
  function updateTotalPrice() {
    const persons = parseInt(document.getElementById("persons").value);
    const totalPrice = persons * pricePerPerson;
    document.getElementById("totalPrice").textContent =
      totalPrice.toLocaleString(); // Display total price
  }

  // Event listener for the 'persons' select dropdown to update the total price
  document
    .getElementById("persons")
    .addEventListener("change", updateTotalPrice);

  // Initial total price calculation
  updateTotalPrice();

  // Book Now button functionality
  document.getElementById("bookNow").addEventListener("click", () => {
    const persons = document.getElementById("persons").value;
    alert(`Booking for ${persons} person(s) is confirmed!`);
  });
});
