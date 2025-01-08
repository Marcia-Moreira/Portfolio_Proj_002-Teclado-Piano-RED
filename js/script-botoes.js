//! BOTÕES DE HABILITAR E DESABILITAR: ERRO
// Aguardar que o DOM esteja carregado antes de executar o código
document.addEventListener("DOMContentLoaded", function() {
    // Seletores específicos para teclas e notas:
    const $teclas = document.querySelectorAll(".tecla");
    const $notas = document.querySelectorAll(".nota");
    const $cifras = document.querySelectorAll(".cifra");

    // Evento do botão Teclas para esconder/mostrar as teclas:
    const $toggleButtonTeclas = document.querySelector(".toggle-button-teclas");
    if ($toggleButtonTeclas) {
        $toggleButtonTeclas.addEventListener("click", () => {
            $teclas.forEach(tecla =>
                tecla.classList.toggle("hide-text-teclas")
            );
        });    
    }
    
    // Evento do botão Notas para esconder/mostrar as notas:
    const $toggleButtonNotas = document.querySelector(".toggle-button-notas");
    if ($toggleButtonNotas) {
        $toggleButtonNotas.addEventListener("click", () => {
            $notas.forEach(nota =>
                nota.classList.toggle("hide-text-notas")
            );
        });
    }

    // Evento do botão Notas para esconder/mostrar as cifras:
    const $toggleButtonCifras = document.querySelector(".toggle-button-cifras");
    if ($toggleButtonCifras) {
        $toggleButtonCifras.addEventListener("click", () => {
            $cifras.forEach(nota =>
                nota.classList.toggle("hide-text-cifras")
            );
        });
    }
});
