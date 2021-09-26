//Define variable
const message =
  " Merci pour votre message. Nous vous recontacterons dans les plus brefs délais.";

document
  .getElementById("contactform")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
