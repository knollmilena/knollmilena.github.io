const form = document.getElementById("form");
const button = document.getElementById("send_mess");
const liveInputs = document.getElementsByClassName("input");
const inputEmail = document.querySelector(".input__mail");
const optionItemOther = document.querySelector(".form__theme-other");
const formTheme = document.querySelector(".form__theme");

function errorInput(input) {
  input.classList.add("form__error");
  input.classList.remove("input");
}
function deleteErrorInput(input) {
  input.classList.remove("form__error");
  input.classList.add("input");
}

function validation(input) {
  if (input.value == "") {
    errorInput(input);
    return false;
  } else {
    deleteErrorInput(input);
    return true;
  }
}

function creatInputTheme() {
  const wrapInputTheme = document.createElement("li");
  wrapInputTheme.classList.add("form__item", "input__theme");

  const labelTextOther = document.createElement("label");
  labelTextOther.classList.add("form__text");
  labelTextOther.textContent = "Какая тема?";

  const inputTheme = document.createElement("input");
  inputTheme.classList.add("input__theme", "input");
  inputTheme.placeholder = "Расскажите подробнее";
  inputTheme.type = "text";

  let indexOption = formTheme.selectedIndex;
  let options = formTheme.options;

  let parentElem = formTheme.parentElement;
  let nextWrapTheme = parentElem.nextSibling;

  if (!formTheme.parentElement.nextElementSibling.classList.contains("input__theme") && indexOption === options.length - 1) {
    parentElem.insertAdjacentElement("afterEnd", wrapInputTheme);
    wrapInputTheme.append(labelTextOther);
    wrapInputTheme.append(inputTheme);
  }
  if (indexOption !== 2 && formTheme.parentElement.nextElementSibling.classList.contains("input__theme")) {
    nextElem = parentElem.nextElementSibling;
    nextElem.remove();
  }
}

formTheme.addEventListener("change", function (event) {
  creatInputTheme();
});

form.addEventListener("input", (ev) => {
  validation(ev.target);
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputs = document.querySelectorAll(".input");

  let flag = false;
  let valid;
  for (i = 0; i < inputs.length; ++i) {
    valid = validation(inputs[i]);
    if (valid === flag && flag === false) {
      flag = true;
    }
  }

  if (valid === true && flag === false) {
    alert("Отправлено!");
  }
});
