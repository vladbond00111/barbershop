var link = document.querySelector('.user_block');
var popup = document.querySelector('.modal_form');
var form = popup.querySelector('form');
var login = popup.querySelector("[name=login]");
var btn_map = document.querySelector('.btn_map');
var link_map = document.querySelector('.link_map');
var map = document.querySelector('.modal_map');
var close_form = popup.querySelector('.modal_form .modal_close');
var close_map = document.querySelector('.modal_map .modal_close');
var overlay = document.querySelector('.modal_overlay');
var password = popup.querySelector('[name=password]');
var login = popup.querySelector('[name=login]');
var storage = localStorage.getItem('login');



link.addEventListener('click', function(event) {
  event.preventDefault();
  popup.classList.add('modal_form_active');
  overlay.classList.add('modal_overlay_active');

  if (storage) {
    login.value = storage;
    password.focus();
  } else
    login.focus();
});

form.addEventListener('submit', function(event) {
    if (!login.value || !password.value) {
    event.preventDefault();
    popup.classList.add('modal_form_error');
    console.log("error")
  } else
    localStorage.setItem('login', login.value);
});

close_form.addEventListener('click', function(event) {
  event.preventDefault();
  popup.classList.remove('modal_form_active');
  popup.classList.remove('modal_form_error');
  overlay.classList.remove('modal_overlay_active');
});


link_map.addEventListener('click', function(event) {
  event.preventDefault();
  map.classList.add('modal_map_active');
  overlay.classList.add('modal_overlay_active');
});

link_map.addEventListener('click', function(event) {
  event.preventDefault();
  map.classList.add('modal_map_active');
  overlay.classList.add('modal_overlay_active');
});

close_map.addEventListener('click', function(event) {
  event.preventDefault();
  map.classList.remove('modal_map_active');
  overlay.classList.remove('modal_overlay_active');
});

window.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains('modal_form_active')) {
    popup.classList.remove('modal_form_active');
    popup.classList.remove('modal_form_error');
    overlay.classList.remove('modal_overlay_active');
    }
    if (map.classList.contains('modal_map_active')) {
    map.classList.remove('modal_map_active');
    overlay.classList.remove('modal_overlay_active');
    }
  }
});

btn_map.addEventListener('click', function(event) {
  event.preventDefault();
  map.classList.add('modal_map_active');
  overlay.classList.add('modal_overlay_active');
});
