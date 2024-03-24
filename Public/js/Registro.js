const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");

  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}

const inputs = document.querySelectorAll('.input-group input');

inputs.forEach((input) => {
  input.addEventListener('focus', () => {
    input.previousElementSibling.classList.add('active');
  });

  input.addEventListener('blur', () => {
    if (!input.value) {
      input.previousElementSibling.classList.remove('active');
    }
  });
})

document.querySelector('.icon-close').addEventListener('click', function () {
  let wrapper = document.querySelector('.form');

  wrapper.classList.add('dismiss-effect');

  wrapper.addEventListener('animationend', function () {
    window.location.href = "/";
  }, { once: true });
});

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.form');
  const senha = document.getElementById('password');
  const confirmarSenha = document.getElementById('confirmPassword');
  const btnFinal = document.getElementById('btn-final');
  let mensagemErro;

  function verificarSenhas() {
      const valorSenha = senha.value.trim();
      const valorConfirmarSenha = confirmarSenha.value.trim();
      const ambosPreenchidos = valorSenha && valorConfirmarSenha;
      if (ambosPreenchidos && valorSenha !== valorConfirmarSenha) {
          if (!mensagemErro) {
              mensagemErro = document.createElement('div');
              mensagemErro.id = 'mensagemErro';
              mensagemErro.style.color = 'red';
              form.appendChild(mensagemErro);
          }
          mensagemErro.textContent = 'As senhas não são iguais.';
          btnFinal.style.display = 'none';
      } else {
          if (mensagemErro) {
              mensagemErro.remove();
              mensagemErro = null;
          }
          btnFinal.style.display = 'grid';
      }
  }

  senha.addEventListener('input', verificarSenhas);
  confirmarSenha.addEventListener('input', verificarSenhas);


  form.addEventListener('submit', function (event) {
      const valorSenha = senha.value.trim();
      const valorConfirmarSenha = confirmarSenha.value.trim();

      if (valorSenha !== valorConfirmarSenha) {
          event.preventDefault();
          if (!mensagemErro) {
              mensagemErro = document.createElement('div');
              mensagemErro.id = 'mensagemErro';
              mensagemErro.style.color = 'red';
              mensagemErro.textContent = 'As senhas não são iguais.';
              form.appendChild(mensagemErro);
          }
          btnFinal.style.display = 'none';
      }
  });
});


$(document).ready(function(){
  $('#cpf').mask('000.000.000-00');
  $('#tel').mask('(00) 00000-0000');
  $('#cep').mask('00000-000');
  $('#dob').mask('00/00/0000');
});