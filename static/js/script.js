// Minimal JS for nav toggle and simple form behaviour
document.addEventListener('DOMContentLoaded',function(){
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
if(toggle){
toggle.addEventListener('click',()=>{
if(nav.style.display==='flex') nav.style.display='none'; else nav.style.display='flex';
})
}


const form = document.getElementById('contactForm');
if(form){
form.addEventListener('submit', function(e){
e.preventDefault();
// simple validation message
alert('Формата е изпратена (пример).');
form.reset();
})
}
});