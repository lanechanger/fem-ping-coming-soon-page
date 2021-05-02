console.log("hello world");

const form = document.querySelector(".email-input");
const error = document.querySelector(".email-error");
const btn = document.querySelector(".email-btn");
const emailModule = document.querySelector(".email");

let validEmailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

btn.addEventListener("click", function () {
  const input = form.value;
  console.log(input);
  if (input.match(validEmailRegex)) {
    console.log("valid email");

    if (error.classList.contains("l-block-display")) {
      error.classList.remove("l-block-display");
      error.classList.add("l-no-display");
    }

    if (form.classList.contains("email-input__error-border")) {
      form.classList.remove("email-input__error-border");
      form.classList.add("email-input__default-border");
    }

    if (emailModule.classList.contains("l-email-error")) {
      emailModule.classList.remove("l-email-error");
      emailModule.classList.add("l-no-email-error");
    }
  } else if (input == "") {
    console.log("blank email");

    if (error.classList.contains("l-no-display")) {
      error.classList.remove("l-no-display");
      error.classList.add("l-block-display");
    }

    if (form.classList.contains("email-input__default-border")) {
      form.classList.remove("email-input__default-border");
      form.classList.add("email-input__error-border");
    }

    if (emailModule.classList.contains("l-no-email-error")) {
      emailModule.classList.remove("l-no-email-error");
      emailModule.classList.add("l-email-error");
    }
  } else {
    console.log("invalid email");

    if (error.classList.contains("l-no-display")) {
      error.classList.remove("l-no-display");
      error.classList.add("l-block-display");
    }

    if (form.classList.contains("email-input__default-border")) {
      form.classList.remove("email-input__default-border");
      form.classList.add("email-input__error-border");
    }

    if (emailModule.classList.contains("l-no-email-error")) {
      emailModule.classList.remove("l-no-email-error");
      emailModule.classList.add("l-email-error");
    }
  }
});