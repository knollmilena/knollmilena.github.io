const form = document.getElementById('form');
const button = document.getElementById('send_mess');
const inputs = document.querySelectorAll('.input');
const inputEmail = document.querySelector('.input__mail');

// аргумент `form` передан, но не используется.
function validation(form) {
  let result = true;
  // обьявлять переменные вот так не очень хорошая идея, потому что они будут инициализироваться со значением undefined. 
  // Дополнительно, когда начнешь писать на typescript это вообще будет делать запрещено, так как не будет понятно какого типа будущая переменная
  // лучшим вариантом в случае массива будет `let arr = [];`. 
  // однако, в данном случае эта переменная вообще не нужна, так как не используется.
  let arr
  inputs.forEach(input => {
    arr = input;
    if(input.value == ""){
      input.classList.toggle('form__error');
      input.classList.toggle('input');
      console.log('Пустое поле'); // выводы в консоль обычно убирают, если только они не нужны очень сильно для каких-либо причин
      result = false;
    } else {
      // подход с переключателем (`toggle`) здесь не слишком уместен, как как в случае если мы видим что значение присутствует, мы хотим 
      // однозначно удалить класс, если он был применен. Так что я бы использовал .remove для более ожидаемого поведения.
      input.classList.toggle('form__error');
      input.classList.toggle('input');
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


// Нейминг здесь не слишком удачный, так как по факту происходит `reset`. Ты уже удаляешь часть часть классов во время валидации, я бы унифицировал этот подход
// Либо удаляя классы в 1 месте, либо в ресете.
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

