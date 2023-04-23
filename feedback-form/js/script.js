const form = document.getElementById('form');
const button = document.getElementById('send_mess');
const inputs = document.querySelectorAll('.input');
const inputEmail = document.querySelector('.input__mail');
let result = true;

function validation(input) {
  if (input.value == '') {
    input.classList.add('form__error');
    input.classList.remove('input');
    result = false;
  } else {
    input.classList.remove('form__error');
    input.classList.add('input');
  }
  return result;
}

inputs.forEach((input) =>
  input.addEventListener('input', function () {
    validation(input);
  })
);

form.addEventListener('submit', function (event) {
  event.preventDefault();
  inputs.forEach((input) => validation(input));
  if (result == true) {
    alert('Отправено!');
  } else {
    alert('Заполните все поля!');
  }
});
