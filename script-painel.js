// Painel do Teclado:

document.addEventListener("DOMContentLoaded", function() {
    const volumeControl = document.getElementById("volume-control");
    let volume = 0.5; // Volume inicial

    // Adicionando controle de rotação
    volumeControl.addEventListener("click", function() {
        volume = (volume + 0.1) % 1.1; // Gira em ciclos de 0.1
        volumeControl.style.transform = `rotate(${volume * 360}deg)`;
        ajustarVolume(volume); // Chama a função de ajuste do teclado
    });

    function ajustarVolume(vol) {
        // Configuração do volume do teclado virtual (substitua para ajustar o áudio conforme necessário)
        console.log(`Volume ajustado para: ${Math.round(vol * 100)}%`);
    }
});
