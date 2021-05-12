let input = document.querySelector("#subscription");
let label = document.querySelector("label");
let submit = document.querySelector("button");
let error = document.querySelector(".error");
submit.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    input.value === "" ||
    !(input.value.includes("@") && input.value.includes("."))
  ) {
    if (input.value === "") {
      error.textContent = "Whoops! It looks like you forgot to add your email";
    } else if (!(input.value.includes("@") && input.value.includes("."))) {
      error.textContent = "Please provide a valid email address";
    }
    input.value = "";
    error.classList.remove("hide");

    input.classList.add("red");
    input.placeholder = `example@email.com`;
  } else {
    if (input.classList.contains("red") && !error.classList.contains("hide")) {
      input.classList.remove("red");
      error.classList.add("hide");
      input.value = "";
      input.placeholder = "Your email address";
    }
  }
});
