const container = document.getElementById("container");
const toast = document.getElementById("toast");
let toastTimer;

function showToast(message, type = "info") {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.className = `show ${type}`;
  toastTimer = setTimeout(() => { toast.className = ""; }, 3000);
}

function setFieldError(input, msgEl, message) {
  input.classList.add("field-error");
  msgEl.textContent = message;
  msgEl.classList.add("visible");
  input.addEventListener("input", () => {
    input.classList.remove("field-error");
    msgEl.classList.remove("visible");
    msgEl.textContent = "";
  }, { once: true });
}

function clearAllErrors(form) {
  form.querySelectorAll(".field-error").forEach(el => el.classList.remove("field-error"));
  form.querySelectorAll(".field-error-msg").forEach(el => {
    el.classList.remove("visible");
    el.textContent = "";
  });
}

function validateUsername(value) {
  if (!value) return "Username is required.";
  if (/^\d+$/.test(value)) return "Username cannot be only numbers.";
  return null;
}

function validatePassword(value) {
  if (!value) return "Password is required.";
  if (!/[A-Z]/.test(value)) return "Must contain at least one uppercase letter.";
  if (!/[a-z]/.test(value)) return "Must contain at least one lowercase letter.";
  if (!/[0-9]/.test(value)) return "Must contain at least one number.";
  return null;
}

// Switch to Register
document.getElementById("registerBtn").addEventListener("click", () => {
  container.classList.add("swapped");
  document.getElementById("loginForm").classList.remove("active-form");
  document.getElementById("registerForm").classList.add("active-form");
});

// Switch to Login
document.getElementById("loginBtn").addEventListener("click", () => {
  container.classList.remove("swapped");
  document.getElementById("registerForm").classList.remove("active-form");
  document.getElementById("loginForm").classList.add("active-form");
});

// Login submit
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  clearAllErrors(this);

  const usernameInput = document.getElementById("loginUsername");
  const passwordInput = document.getElementById("loginPassword");
  let valid = true;

  const usernameErr = validateUsername(usernameInput.value);
  if (usernameErr) {
    setFieldError(usernameInput, document.getElementById("loginUsernameErr"), usernameErr);
    valid = false;
  }

  const passwordErr = validatePassword(passwordInput.value);
  if (passwordErr) {
    setFieldError(passwordInput, document.getElementById("loginPasswordErr"), passwordErr);
    valid = false;
  }

  if (!valid) return;
  alert("Login Successful!", "success");
});

// Register submit
document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();
  clearAllErrors(this);

  const nameInput    = document.getElementById("regName");
  const emailInput   = document.getElementById("regEmail");
  const passInput    = document.getElementById("regPassword");
  const confirmInput = document.getElementById("regConfirm");
  let valid = true;

  if (!nameInput.value) {
    setFieldError(nameInput, document.getElementById("regNameErr"), "Full name is required.");
    valid = false;
  } else {
    const usernameErr = validateUsername(nameInput.value);
    if (usernameErr) {
      setFieldError(nameInput, document.getElementById("regNameErr"), usernameErr);
      valid = false;
    }
  }

  if (!emailInput.value) {
    setFieldError(emailInput, document.getElementById("regEmailErr"), "Email is required.");
    valid = false;
  }

  const passwordErr = validatePassword(passInput.value);
  if (passwordErr) {
    setFieldError(passInput, document.getElementById("regPasswordErr"), passwordErr);
    valid = false;
  }

  if (!confirmInput.value) {
    setFieldError(confirmInput, document.getElementById("regConfirmErr"), "Please confirm your password.");
    valid = false;
  } else if (passInput.value !== confirmInput.value) {
    setFieldError(confirmInput, document.getElementById("regConfirmErr"), "Passwords do not match.");
    valid = false;
  }

  if (!valid) return;
  showToast("Account created successfully!", "success");
});
