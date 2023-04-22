const form = document.getElementById('form');
const button = document.getElementById('send_mess');
const inputs = document.querySelectorAll('.input');
const inputEmail = document.querySelector('.input__mail');
let result = true;
// аргумент `form` передан, но не используется.
function validation() {
  // обьявлять переменные вот так не очень хорошая идея, потому что они будут инициализироваться со значением undefined.
  // Дополнительно, когда начнешь писать на typescript это вообще будет делать запрещено, так как не будет понятно какого типа будущая переменная
  // лучшим вариантом в случае массива будет `let arr = [];`.
  // однако, в данном случае эта переменная вообще не нужна, так как не используется.
  inputs.forEach(input => {
    if(input.value == ""){
      input.classList.add('form__error');
      input.classList.remove('input');
      result = false;
    } else {
      input.classList.remove('form__error');
      input.classList.add('input');
    }
   })
   return result
}

// Этот код запускается каждый раз при загрузке страницы, наверное, стоит удалить его.
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

form.addEventListener('submit', function(event){
  event.preventDefault();

  if (validation() == true) {
    alert('Отправено!');
  } else {
    alert('Заполните все поля!');
  }
  validation();
})

