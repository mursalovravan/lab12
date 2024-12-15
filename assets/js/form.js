document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission
  
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailValue = emailInput.value;
  
    // Check if the email contains the "@" symbol
    if (!emailValue.includes("@")) {
      emailError.textContent = "Email must include an '@' symbol.";
      emailError.style.display = "block";
      emailInput.classList.add("error");
    } else {
      // If valid, remove error styles and message
      emailError.textContent = "";
      emailError.style.display = "none";
      emailInput.classList.remove("error");
  
      // Success alert
      alert("Email is valid! Form submitted successfully.");
    }
  });
  