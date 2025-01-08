//! Código para forçar virar a tela para paisagem / landscape:

function enforceLandscape() {
    // Largura mínima permitida: 698
    // const minWidth = 698;
    // Largura mínima permitida modo paisagem: iphone SE 667 x 375 px => 636px
    const minWidth = 636;
    const body = document.querySelector("body");
    const message = document.getElementById("landscape-warning");
    const content = document.querySelector(".keyboard-container");

    if (window.innerWidth < minWidth) {
        // Se a largura for menor que 698px, mostra aviso e oculta o conteúdo:
        message.style.display = "flex";
        content.style.display = "none";
        // Evita rolagem da barra:
        body.style.overflow = "hidden";
    } else {
        // Se estiver em paisagem com largura suficiente:
        message.style.display = "none";
        content.style.display = "block";
        body.style.overflow = "auto";
    }
}

// Para executar ao carregar a página:
window.addEventListener("load", enforceLandscape);

// Para executar ao redimensionar a tela:
window.addEventListener("resize", enforceLandscape);
