const form = document.getElementById('form');
const button = document.getElementById('send_mess');
const inputs = document.querySelectorAll('.input');
const inputEmail = document.querySelector('.input__mail');


function validation(form) {
  let result = true;
  let arr
  inputs.forEach(input => {
    arr = input;
    if(input.value == ""){
      input.classList.toggle('form__error');
      input.classList.toggle('input');
      console.log('Пустое поле');
      result = false;
    } else {
      input.classList.toggle('form__error');
      input.classList.toggle('input');
    }
   })
   return result

}



inputs.forEach(input => input.addEventListener('input', function(){

  if(input.value == ""){
    input.classList.add('form__error');
    input.classList.remove('input');
    console.log('Пустое поле');
    result = false;
  } else {
    input.classList.remove('form__error');
    input.classList.add('input');

}}))


function deleteValue(form){
  inputs.forEach(input => {
    if(input.value !== ""){
      input.value = "";
      input.classList.remove('form__error');
      input.classList.add('input');
    }
 })
}

form.addEventListener('submit', function(event){
  event.preventDefault();

  if (validation(this) == true) {
    alert('Отправено!');
  } else {
    alert('Заполните все поля!');
  }
  deleteValue(this);

})

