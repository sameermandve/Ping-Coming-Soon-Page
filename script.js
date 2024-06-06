const form = document.querySelector("#input_submit-div");
const email = document.querySelector("#email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateEmailInput();
});

const setError = (element, message) => {
  const inputControl = element;
  const parentDiv = element.parentElement;
  const errorMsg = parentDiv.nextElementSibling;

  inputControl.style.borderColor = "red";
  errorMsg.style.display = "block";
  errorMsg.innerText = message;
};

const setSuccess = (element) => {
  const inputControl = element;
  const parentDiv = element.parentElement;
  const errorMsg = parentDiv.nextElementSibling;

  inputControl.style.borderColor = "green";
  errorMsg.style.display = "none";
};

const isValidEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return re.test(String(email).toLowerCase());
};

const validateEmailInput = () => {
  const emailValue = email.value.trim();

  if (emailValue === "") {
    setError(email, "Please provide a valid email address");
    email.placeholder = "example@email/com";
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Please provide a valid email address");
    email.placeholder = "example@email/com";
  } else {
    setSuccess(email);
  }
};
