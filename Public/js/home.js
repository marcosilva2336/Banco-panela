
document.getElementById('myForm').addEventListener('submit', function (e) {
    e.preventDefault();

    Swal.fire({
        title: 'Você tem certeza?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, enviar!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Enviado!',
                'Sua mensagem foi enviada com sucesso!',
                'success'
            )
            // Aqui você pode adicionar a lógica de envio do formulário.
        }
    })
});





var swiper = new Swiper(".teachers-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true, // Se você tem apenas 4 slides e quer que eles passem automaticamente, é melhor manter o loop
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 5500, // Aqui você pode ajustar o tempo em milissegundos
        disableOnInteraction: false, // Isso fará com que o autoplay continue mesmo depois do usuário interagir com o Swiper
    },
    slidesPerGroup: 2,
    breakpoints: {
        540: {
            slidesPerView: 1,
            slidesPerGroup: 1
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 2,
        },
    },
});










// Selecione todos os botões com a id "addToCartBtn"
var addToCartBtns = document.getElementsByClassName('addToCartBtn');

// Adicione o ouvinte de evento a cada botão
// Selecione todos os botões com a classe "cart-btn"
var addToCartBtns = document.getElementsByClassName('cart-btn');

// Adicione o ouvinte de evento a cada botão
for (var i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener('click', function (e) {
        e.preventDefault();  // para prevenir que o link seja seguido
        Swal.fire({
            icon: 'success',
            title: 'Partiu ser Paneleiro!',
            showConfirmButton: false,
            timer: 1500
        });
    });
}

// Selecione todos os ícones de coração com a classe "fas fa-heart"
var heartIcons = document.getElementsByClassName('fas fa-heart');

// Adicione o ouvinte de evento a cada ícone de coração
for (var i = 0; i < heartIcons.length; i++) {
    heartIcons[i].addEventListener('click', function (e) {
        e.preventDefault();  // para prevenir que o link seja seguido
        Swal.fire({
            icon: 'success',
            title: 'Adicionado aos favoritos!',
            showConfirmButton: false,
            timer: 1500
        });
    });
}


const themeToggler = document.querySelector('#theme-toggler');
const htmlElement = document.querySelector('html');

themeToggler.addEventListener('click', () => {
    htmlElement.classList.toggle('dark-theme');
    themeToggler.classList.toggle('#theme-toggler');
});

function increaseFontSize() {
    // Obtém o elemento <html>
    var htmlElement = document.getElementsByTagName('html')[0];
    
    // Obtém o valor atual da propriedade de tamanho de fonte
    var currentFontSize = parseFloat(window.getComputedStyle(htmlElement).fontSize);
    
    // Aumenta o tamanho da fonte em 1 pixel
    var newFontSize = currentFontSize + 1;
    
    // Define o novo tamanho da fonte
    htmlElement.style.fontSize = newFontSize + 'px';
  }
  

