 (function () {
      emailjs.init("YOUR_USER_ID"); // 🔹 Replace with your EmailJS User ID
    })();

    document.getElementById("contact-form").addEventListener("submit", function (event) {
      event.preventDefault();

      emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
        .then(function () {
          alert("✅ Message Sent Successfully!");
        }, function (error) {
          alert("❌ Failed to Send. Please try again.");
        });
    });