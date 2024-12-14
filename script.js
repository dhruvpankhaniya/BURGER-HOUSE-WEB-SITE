// Navigation Menu Toggle
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// ScrollReveal Animations
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".order__card", {
  ...scrollRevealOption,
  interval: 500,
});
ScrollReveal().reveal(".event__content", {
  duration: 1000,
});

// Function to show the custom alert
function showCustomAlert(message) {
  const alertBox = document.createElement("div");
  alertBox.className = "custom-alert";
  alertBox.innerHTML = `
    <div class="alert-content">
      <h2>Order Confirmation</h2>
      <p>${message}</p>
      <button class="alert-btn" onclick="closeCustomAlert()">OK</button>
    </div>
  `;
  document.body.appendChild(alertBox);
}

// Function to close the custom alert
function closeCustomAlert() {
  const alertBox = document.querySelector(".custom-alert");
  if (alertBox) {
    alertBox.remove();
  }
}

// Handling "Order Now" Buttons
const orderButtons = document.querySelectorAll(".order-btn");
const orderSummary = document.getElementById("order-summary");

orderButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Burger names corresponding to each button
    const burgerNames = [
      "Chicken Burger",
      "Veggie Delight Burger",
      "BBQ Bacon Burger",
    ];

    // Get the burger name based on the button index
    const selectedBurger = burgerNames[index];

    // Update the order summary content
    orderSummary.innerHTML = `
      <div class="order-summary-card">
       
      </div>
    `;

    // Show custom alert
    showCustomAlert(`You ordered: ${selectedBurger}`);
  });
});
