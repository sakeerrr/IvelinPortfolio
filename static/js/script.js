document.addEventListener('DOMContentLoaded',function(){
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if(toggle && nav){
    toggle.addEventListener('click', ()=> nav.classList.toggle('active'));
  }
});



const form = document.getElementById('contactForm');
if(form){
form.addEventListener('submit', function(e){
e.preventDefault();
// simple validation message
alert('Формата е изпратена (пример).');
form.reset();
})
};