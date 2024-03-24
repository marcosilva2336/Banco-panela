document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o botão e a sidebar pelo ID
    var hamburgerBtn = document.getElementById('hamburger-btn');
    var sidebar = document.getElementById('sidebar');
  
    // Adiciona um ouvinte de evento de clique ao botão
    hamburgerBtn.addEventListener('click', function() {
      // Alterna a classe 'active' na sidebar
      sidebar.classList.toggle('active');
    });
  });
  