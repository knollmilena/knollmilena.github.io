const form = document.getElementById('form');
const button = document.getElementById('send_mess');
const inputs = document.querySelectorAll('.input');
const inputEmail = document.querySelector('.input-mail');


function validation(form) {
  let result = true;
  let arr
  inputs.forEach(input => {
    arr = input;
    if(input.value == ""){
      input.classList.toggle('input-error');
      input.classList.toggle('input');
      console.log('Пустое поле');
      result = false;
    } else {
      input.classList.toggle('input-error');
      input.classList.toggle('input');
    }
   })
   return result

}



inputs.forEach(input => input.addEventListener('input', function(){
  // input.classList.remove('input-error');
  // input.classList.add('input');
  if(input.value == ""){
    input.classList.add('input-error');
    input.classList.remove('input');
    console.log('Пустое поле');
    result = false;
  } else {
    input.classList.remove('input-error');
    input.classList.add('input');

}}))


function deleteValue(form){
  inputs.forEach(input => {
    if(input.value !== ""){
      input.value = "";
      input.classList.remove('input-error');
      input.classList.add('input');
    }
 })
}

// inputs.addEventListener('change', function(){
//   inputs.forEach(input => {
//     input.classList.remove('input-error');
//     input.classList.add('input');
//   })
// })
form.addEventListener('submit', function(event){
  event.preventDefault();

  if (validation(this) == true) {
    alert('Отправено!');
  } else {
    alert('Заполните все поля!');
  }
  deleteValue(this);

})

