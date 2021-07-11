/* Variables */
const body = document.querySelector('body');
const header = document.getElementById('header');
const btn_burger = document.getElementById('burger');
const mobile_menu = document.getElementById('mobile_menu');
const btn_close = document.getElementById('close');
const link = document.getElementById('link');

/* Events */

btn_burger.addEventListener('click', function(e){
    mobile_menu.classList.toggle('remove');
})
btn_close.addEventListener('click', function(e){
    mobile_menu.classList.toggle('remove');
})
