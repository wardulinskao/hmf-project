const countryCodes = {
  US: "+1",
  UK: "+44",
  IN: "+91",
};

export function setupPhonePrefill() {
  const countrySelect = document.getElementById("country");
  const phoneInput = document.getElementById("code");

  if (!countrySelect || !phoneInput) return;

  countrySelect.addEventListener("change", () => {
    const selected = countrySelect.value;

    const code = countryCodes[selected];
    if (code) {
      phoneInput.value = code;
    }
  });
}

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

export function initRegisterForm() {
  const form = document.getElementById("registerForm");
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("error");

  if (!form || !emailInput || !emailError) return;

  setupPhonePrefill();

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();

    if (!isValidEmail(email)) {
      emailError.textContent = "Please enter a valid email address.";
      return;
    } else {
      emailError.textContent = "";
    }

    alert("Successfully registered!");
  });
}
