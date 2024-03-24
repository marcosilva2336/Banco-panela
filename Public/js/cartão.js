function alternarBloqueio() {
    // Implemente a lógica para bloquear o cartão físico
    alert("Cartão físico bloqueado/desbloqueado.");
}

function toggleBlock() {
    // Implemente a lógica para bloquear o cartão virtual
    alert("Cartão virtual bloqueado/desbloqueado.");
}

function toggleDelete() {
    // Implemente a lógica para excluir o cartão virtual
    alert("Cartão virtual excluído.");
}

document.getElementById('limit-range').addEventListener('input', function() {
    document.getElementById('limit-value').textContent = this.value;
});
