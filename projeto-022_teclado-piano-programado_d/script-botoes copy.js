// 


//! BOTÕES DE HABILITAR E DESABILITAR: ERRO
// arrumar as seleçoes de notas x letras

// Seletores específicos para teclas e notas:
const $teclas = document.querySelectorAll(".tecla")
const $notas = document.querySelectorAll(".nota")

// Evento do botão Teclas para esconder/mostrar as teclas:
const $toggleButtonTeclas = document.querySelector(".toggle-button-teclas")
$toggleButtonTeclas.addEventListener("click", () => {
    $teclas.forEach(tecla =>
        tecla.classList.toggle("hide-text-teclas")
    )
})

// Evento do botão Notas para esconder/mostrar as Notas:
const $toggleButtonNotas = document.querySelector(".toggle-button-notas")
$toggleButtonNotas.addEventListener("click", () => {
    $notas.forEach(nota =>
        nota.classList.toggle("hide-text-notas")
    )
})