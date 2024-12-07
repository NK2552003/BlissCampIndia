// Initialize EmailJS
(function () {
  emailjs.init("2AfiXCyGp4WGbg9uy");
})();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Collect form data
      const formData = new FormData(this);
      const formValues = Object.fromEntries(formData.entries());

      // Send email using EmailJS
      sendEmail(formValues);
    });
  } else {
    console.error("Contact form not found!");
  }
});

function sendEmail(formData) {
  // Prepare the template parameters
  const templateParams = {
    from_name: `${formData["first-name"]} ${formData["last-name"]}`,
    from_email: formData.email,
    phone: `${formData["country-code"]} ${formData.phone}`,
    adventure_type: formData["adventure-type"],
    message: formData.message,
  };

  // Send the email
  emailjs.send("service_rv9bp1j", "template_c1hgon8", templateParams).then(
    function (response) {
      console.log("Email sent successfully:", response);
      // Clear the form
      document.getElementById("contact-form").reset();
      // Show a success message
      alert("Thank you for your inquiry. We will get back to you soon!");
    },
    function (error) {
      console.error("Email sending failed:", error);
      alert(
        "Sorry, there was an error sending your message. Please try again later."
      );
    }
  );
}
