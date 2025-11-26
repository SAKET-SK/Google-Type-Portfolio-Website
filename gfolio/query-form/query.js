/* eslint-env es6 */
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs
      .sendForm("service_0z9ijp9", "template_ng24h1n", form)
      .then(function () {
        alert("Message sent successfully! I'll get back to you soon.");
        form.reset();
      })
      .catch(function (error) {
        console.error("EmailJS Error:", error);
        alert("Something went wrong. Please try again later.");
      });
  });
});
