document.querySelector('.icon-close').addEventListener('click', function() {
    let wrapper = document.querySelector('.wrapper');


    wrapper.classList.add('dismiss-effect');

    wrapper.addEventListener('animationend', function() {
        window.location.href = "/";
    }, { once: true });
});




$(document).ready(function(){
  $('#cpf').mask('000.000.000-00');
});