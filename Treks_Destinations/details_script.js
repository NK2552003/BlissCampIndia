(function () {
  emailjs.init({
    publicKey: "AzMrMsnkyCSZfajgB",
  });
})();

document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);

  function getParam(name, defaultValue) {
    return params.get(name) || defaultValue;
  }

  function safeGetListParam(paramName, defaultValue = "") {
    const value = params.get(paramName);
    return value ? value.split(",") : defaultValue;
  }

  document.getElementById("rgf-title").textContent = getParam(
    "title",
    "Default Tour"
  );

  const tourInfo = document.getElementById("rgf-meta");
  tourInfo.innerHTML = `
    <div class="rgf-rating">
      <span class="rgf-star">★</span>
      <span>${getParam("rating", "0")}</span>
      <span class="rgf-reviews">(234 Reviews)</span>
    </div>
    <div class="rgf-location">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
      <span>${getParam("destination", "Unknown Location")}</span>
    </div>
  `;

  const imageElement = document.querySelector(".rgf-image");
  if (imageElement) {
    imageElement.src = getParam("image", "./default.jpg");
    imageElement.alt = getParam("title", "Tour Image");
  }

  const sectionData = {
    Overview: `
              <h1 class="dst-heading">About The Destination</h1>
              <p class="dst-description">
                  ${getParam(
                    "brief_description",
                    "No description available"
                  ).substring(0, 400)}...
                  <a href="#" class="dst-read-more" id="readMoreLink">Read More</a>
              </p>
          `,
    Pros: `
          <h2 class="dst-heading">Pros</h2>
          <div class="dst-facilities-grid">
              ${safeGetListParam("pros")
                .map(
                  (pro) => `<div class="dst-facility"><span>${pro}</span></div>`
                )
                .join("")}
          </div>
      `,
    Cons: `
        <h2 class="dst-heading">Cons</h2>
          <div class="dst-facilities-grid">
              ${safeGetListParam("cons")
                .map(
                  (con) => `<div class="dst-facility"><span>${con}</span></div>`
                )
                .join("")}
          </div>
  `,

    "What's included": `
 <h2 class="dst-heading">What's Included</h2>
          <div class="dst-facilities-grid">
              ${safeGetListParam("inclusions")
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
        <p><strong>8. Contact Us:</strong> For any concerns or questions, please email us at <a href="mailto:blisscampIndia@gmail.com">blisscampIndia@gmail.com</a>.</p>
    </div>
      `,
  };

  const navItems = document.querySelectorAll(".dst-nav-item");
  const contentDiv = document.querySelector(".dst-content");

  contentDiv.innerHTML = sectionData["Overview"];
  navItems[0].classList.add("active");

  function handleReadMore() {
    const readMoreLink = document.getElementById("readMoreLink");
    if (readMoreLink) {
      readMoreLink.addEventListener("click", (e) => {
        e.preventDefault();
        readMoreLink.parentElement.innerHTML = getParam(
          "brief_description",
          "No description available"
        );
      });
    }
  }

  if (navItems.length > 0) {
    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        navItems.forEach((nav) => nav.classList.remove("active"));
        item.classList.add("active");
        const sectionName = item.textContent.trim();
        contentDiv.innerHTML =
          sectionData[sectionName] || "<p>Content not available</p>";
        if (sectionName === "Overview") {
          handleReadMore();
        }
      });
    });
  }

  document.getElementById("month").value = getParam("month", "");
  document.getElementById("season").value = getParam("season", "");
  const price = parseInt(getParam("price", "0"));
  document.getElementById("price").textContent = price.toLocaleString();
  document.getElementById("duration").textContent = `${getParam(
    "days",
    "0"
  )} days, ${getParam("nights", "0")} nights`;
  document.getElementById("latitude").textContent = getParam("latitude", "N/A");
  document.getElementById("longitude").textContent = getParam(
    "longitude",
    "N/A"
  );

  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const tabId = button.getAttribute("data-tab");
      tabButtons.forEach((btn) => {
        btn.classList.remove("active");
        btn.setAttribute("aria-selected", "false");
      });
      tabContents.forEach((content) => content.classList.remove("active"));
      button.classList.add("active");
      button.setAttribute("aria-selected", "true");
      document.getElementById(tabId).classList.add("active");
    });
  });

  if (tabButtons.length > 0) {
    tabButtons[0].click();
  }

  function updateTotalPrice() {
    const modalPersons = document.getElementById("modalPersons");
    const persons = parseInt(modalPersons?.value || "1");
    const totalPrice = persons * price;

    const modalTotalPrice = document.getElementById("modalTotalPrice");
    const totalDisplay = document.getElementById("totalDisplay");

    if (modalTotalPrice) {
      modalTotalPrice.textContent = totalPrice.toLocaleString();
    }
    if (totalDisplay) {
      totalDisplay.textContent = `${totalPrice.toLocaleString()}`;
    }
  }

  const modalPersons = document.getElementById("modalPersons");
  if (modalPersons) {
    modalPersons.addEventListener("change", updateTotalPrice);
  }

  updateTotalPrice();

  const modal = document.getElementById("bookingModal");
  const closeModal = document.querySelector(".close");
  const bookNowButton = document.getElementById("bookNow");

  bookNowButton.addEventListener(
    "click",
    () => (modal.style.display = "block")
  );
  closeModal.addEventListener("click", () => (modal.style.display = "none"));
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  document
    .getElementById("confirmBooking")
    .addEventListener("click", function () {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const address = document.getElementById("address").value.trim();
      const contact = document.getElementById("contact").value.trim();
      const persons =
        parseInt(document.getElementById("modalPersons").value) || 1;
      const totalPrice = persons * price;

      if (!name || !email || !address || !contact) {
        alert("Please fill in all the required details.");
        return;
      }

      function validateContact(contact) {
        return /^[0-9]{10}$/.test(contact);
      }

      if (!validateContact(contact)) {
        alert("Please enter a valid 10-digit contact number.");
        return;
      }

      function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
      }

      if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      const emailData = {
        name,
        email,
        address,
        contact,
        persons,
        totalPrice,
        title: getParam("title", "Default Tour"),
        destination: getParam("destination", "Unknown Destination"),
        month: getParam("month", "TBA"),
      };

      emailjs
        .send("service_c512tmj", "template_dek2xnq", {
          user_name: emailData.name,
          user_email: emailData.email,
          user_address: emailData.address,
          user_contact: emailData.contact,
          trek_title: emailData.title,
          trek_destination: emailData.destination,
          trek_month: emailData.month,
          trek_persons: emailData.persons,
          trek_total_price: emailData.totalPrice,
        })
        .then(
          (response) => {
            console.log(
              "Email sent successfully!",
              response.status,
              response.text
            );
            alert("Booking confirmation has been sent to your email.");
            modal.style.display = "none";
          },
          (error) => {
            console.error("Failed to send email.", error);
            alert(
              "There was an error sending the booking confirmation. Please try again."
            );
          }
        );
    });

  console.log("Tour booking script loaded successfully.");
});
