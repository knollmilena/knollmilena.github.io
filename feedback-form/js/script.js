const form = document.getElementById('form');
const button = document.getElementById('send_mess');
// const inputs = document.querySelectorAll('.input');
const liveInputs = document.getElementsByClassName('input');
const inputEmail = document.querySelector('.input__mail');
const optionItemOther = document.querySelector('.form__theme-other');
const formTheme = document.querySelector('.form__theme');



// function generationLiveInputs(){
//   if (formTheme.parentElement.nextElementSibling.classList.contains('input__theme')) {
//     liveInputs = document.getElementsByClassName('input');
//     inputs = Array.from(liveInputs);
//   }
//   return inputs;
// }

function validation(input) {
  let result = true;
  if (input.value == '') {
    input.classList.add('form__error');
    input.classList.remove('input');
    result = false;
  } else {
    input.classList.remove('form__error');
    input.classList.add('input');
    result = true;
  }
  return result;
}

// form.addEventListener('input', function () {
//   inputs.forEach((input) => validation(input));
//   console.log('fsdfsd');
// });


formTheme.addEventListener('change', function (event){
  const wrapInputTheme = document.createElement('li')
  wrapInputTheme.classList.add('form__item', 'input__theme');

  const labelTextOther = document.createElement('label')
  labelTextOther.classList.add('form__text');
  labelTextOther.textContent = 'Какая тема?';

  const inputTheme = document.createElement('input');
  inputTheme.classList.add('input__theme', 'input');
  inputTheme.placeholder = 'Расскажите подробнее';
  inputTheme.type = "text";

  let indexOption = formTheme.selectedIndex;
  let options = formTheme.options;

  let parentElem = formTheme.parentElement;
  let nextWrapTheme = parentElem.nextSibling;

if(!formTheme.parentElement.nextElementSibling.classList.contains('input__theme') && indexOption === options.length-1){
    parentElem.insertAdjacentElement('afterEnd', wrapInputTheme);
    wrapInputTheme.append(labelTextOther);
    wrapInputTheme.append(inputTheme);
  }
  if ((indexOption !== 2) && formTheme.parentElement.nextElementSibling.classList.contains('input__theme')) {
    nextElem = parentElem.nextElementSibling;
    nextElem.remove();
  }

});


// старый прослушиватель
// inputs.forEach((input) =>
//   input.addEventListener('input', function () {
//     validation(input);
//     console.log(generationLiveInputs());
//   })
// );




form.addEventListener('input', function(){
  for (let input of liveInputs) {
    input.addEventListener('input', function () {
          validation(input);
        })
  }
})


form.addEventListener('submit', function (event) {
  event.preventDefault();
  let result;
  const inputs = document.querySelectorAll('.input');
  inputs.forEach((input) => validation(input));
  for (i = 0; i < inputs.length; ++i){
    result = validation(inputs[i]);
    if (result === false) {
      alert ('Заполните все поля!');
      break
    }
  }
});
