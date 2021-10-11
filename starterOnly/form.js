const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const quantity = document.getElementById("quantity");
const birthDate = document.getElementById("birthdate");
const allLocations = document.getElementById("allLocations");
const locations = document.querySelectorAll("#allLocations .checkbox-input");
const checkbox1 = document.getElementById("checkbox1");
const form = document.getElementById("form");
const allmodal = document.getElementById("all-modal");
const validationModal = document.getElementById("validation-modal");
const closevBtn = document.getElementById("closevbtn");

// ==== changing the border of the input ====

const inputStyle = (inputName, dataError) => {
  inputName.parentElement.setAttribute("data-error-visible", dataError);
  if (dataError) {
    return (inputName.style.border = "solid #e54858 2px");
  }
  return (inputName.style.border = "solid #279e7a 2px");
};

// ==== Checking the FistName ====

const fistNameCheck = () => {
  if (firstName.value.trim().length < 2 || firstName.value.trim() === "") {
    inputStyle(firstName, true);
    return false;
  }
  inputStyle(firstName, false);
  return true;
};

firstName.addEventListener("focusout", (e) => {
  fistNameCheck();
});

// ==== Checking the LastName ====

const lastNameCheck = () => {
  if (lastName.value.trim().length < 2 || lastName.value.trim() === "") {
    inputStyle(lastName, true);
    return false;
  }
  inputStyle(lastName, false);
  return true;
};
lastName.addEventListener("focusout", (e) => {
  lastNameCheck();
});

// ==== Checking email ====

const re =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const emailCheck = () => {
  if (email.value.trim().match(re)) {
    email.parentElement.setAttribute("data-error-visible", false);
    email.style.border = "solid #279e7a 2px";
    return true;
  }
  email.parentElement.setAttribute("data-error-visible", true);
  email.style.border = "solid  #e54858 2px";
  return false;
};
email.addEventListener("focusout", (e) => {
  emailCheck();
});

// ==== birth Date Check ====

const birthDateCheck = () => {
  if (birthDate.value.length === 10) {
    birthDate.parentElement.setAttribute("data-error-visible", false);
    birthDate.style.border = "solid #279e7a 2px";
    return true;
  }
  birthDate.parentElement.setAttribute("data-error-visible", true);
  birthDate.style.border = "solid #e54858 2px";
  return false;
};
birthDate.addEventListener("focusout", (e) => {
  birthDateCheck();
});

// ==== Quantity Check ====

const quantityCheck = () => {
  if (quantity.value.length > 0) {
    quantity.parentElement.setAttribute("data-error-visible", false);
    quantity.style.border = "solid #279e7a 2px";
    return true;
  }
  quantity.parentElement.setAttribute("data-error-visible", true);
  quantity.style.border = "solid #e54858 2px";
  return false;
};
quantity.addEventListener("focusout", (e) => {
  quantityCheck();
});

// ==== Check Box Check ====

const boxcheck = () => {
  for (let i = 0; i < locations.length; i++) {
    if (locations[i].checked) {
      return true;
    }
  }
  return false;
};
//  ---Onsubmit---
form.addEventListener("submit", (e) => {
  if (!boxcheck()) {
    allLocations.setAttribute("data-error-visible", true);
  }
});
//  ---On Chahnge---
allLocations.addEventListener("change", (e) => {
  allLocations.setAttribute("data-error-visible", false);
});

//==== Check Box Check ====

const checkBox1Check = () => {
  if (checkbox1.checked) {
    return true;
  }
  return false;
};
form.addEventListener("submit", (e) => {
  if (!checkBox1Check()) {
    checkbox1.parentElement.setAttribute("data-error-visible", true);
  }
});
checkbox1.addEventListener("change", (e) => {
  checkbox1.parentElement.setAttribute("data-error-visible", false);
});

// ==== On Form Submit ===

form.addEventListener("submit", (e) => {
  if (
    fistNameCheck() ||
    lastNameCheck() ||
    emailCheck() ||
    birthDateCheck() ||
    quantityCheck() ||
    boxcheck()
  ) {
    e.preventDefault();
    allmodal.style.display = "none";
    validationModal.style.display = "block";
  }
  e.preventDefault();
});

closevBtn.addEventListener("click", (e) => {
  validationModal.style.display = "none";
  form.reset();
});
