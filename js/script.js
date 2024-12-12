// Teclado de Piano Programado:
// console.log("Testes do Teclado!")

// CODIGO PARA CAPTURAR CLICKS E TOUCHSCREEN:
const $allkeys = document.querySelectorAll(".key")

$allkeys.forEach(key => {
    // Evento para toque em telas sensíveis (touchstart)
    key.addEventListener("touchstart", (event) => {
        // Evita comportamento padrão de rolagem ou zoom (ALTERADO)
        event.preventDefault();
        const notePressed = event.target.dataset.musicNote;
        const audio = new Audio(`./piano-keys/${notePressed}.wav`);
        audio.play();

        // Adiciona a cor na tecla pressionada
        key.classList.add("clicked");
    });

    // Evento para término do toque (touchend)
    key.addEventListener("touchend", (event) => {
        event.preventDefault(); // Evita comportamento padrão (ALTERADO)
        key.classList.remove("clicked");
    });

    // Evento para clique do mouse
    key.addEventListener("mousedown", (event) => {
        const notePressed = event.target.dataset.musicNote;
        const audio = new Audio(`./piano-keys/${notePressed}.wav`);
        audio.play();

        // Adiciona a cor na tecla pressionada
        key.classList.add("clicked");
    });

    // Evento para soltar o botão do mouse
    key.addEventListener("mouseup", (event) => {
        key.classList.remove("clicked");
    });
});
// CODIGO PARA CAPTURAR TECLADO FÍSICO:
const keyboardNotes = {
    "q": "C1",
    "w": "D1",
    "e": "E1",
    "r": "F1",
    "t": "G1",
    "y": "A1",
    "u": "B1",
    
    "z": "C2",
    "x": "D2",
    "c": "E2",
    "v": "F2",
    "b": "G2",
    "n": "A2",
    "m": "B2",
    
    "2": "C1s",
    "3": "D1s",
    "5": "F1s",
    "6": "G1s",
    "7": "A1s",
    
    "s": "C2s",
    "d": "D2s",
    "g": "F2s",
    "h": "G2s",
    "j": "A2s",
}
document.addEventListener("keydown", (event) => {
    // console.log(event.key)
    // Para tirar o looping do som:
    if (event.repeat) return
    const notePressed = keyboardNotes[event.key.toLowerCase()]
    // ToLowerCase => Para transformar teclas em minusculo

    // if Validação para não dar erro de tecla não encontrada
    if (notePressed) {
        // Para dar cor ao pressionar o botão:
        const $noteElement = document.querySelector(`[data-music-note="${notePressed}"]`)
        $noteElement.classList.add("clicked")

        const audio = new Audio(`./piano-keys/${notePressed}.wav`)
        audio.play()
    }
})
// Para desmarcar as teclas pressionadas no teclado:
document.addEventListener("keyup", (event) => {
    const notePressed = keyboardNotes[event.key.toLowerCase()]

    if (notePressed) {
        const $noteElement = document.querySelector(`[data-music-note="${notePressed}"]`)
        $noteElement.classList.remove("clicked")
    }
})
