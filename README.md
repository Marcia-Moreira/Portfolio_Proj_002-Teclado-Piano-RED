# Portfolio_Proj_002-Teclado-Piano-RED:

Este repositório faz parte de uma série de projetos que demonstram minhas habilidades técnicas e de criatividade, com foco em aplicações interativas e responsivas de desenvolvimento front-end e back-end incluídos no meu Portfólio.

# SIMULADOR DE TECLADO VIRTUAL 🎹 / PIANO VIRTUAL 🎹

## Imagens do Projeto:
<!-- style="display: flex; justify-content: center; text-align: center; gap: 20px;" -->
<div style="display: inline_block" align="center">
   <img src="./img-readme/img-simulador-teclado_1.png" alt="Captura de Tela 1" width="300" style="margin-right: 10px; border-radius: 10px;">
   
   <img src="./img-readme/img-simulador-teclado_2.png" alt="Captura de Tela 2" width="300" style="margin-right: 10px; border-radius: 10px;">
   
   <img src="./img-readme/img-simulador-teclado_3.png" alt="Captura de Tela 3" width="300" style="margin-right: 10px; border-radius: 10px;">
</div>

## Link do Projeto Finalizado:
* clique com o botão direito e escolha "Abrir em nova aba"  
☑️ Projeto finalizado / Deploy no GitHub Pages: https://marcia-moreira.github.io/Portfolio_Proj_002-Teclado-Piano-RED/

## Nome do Projeto: SIMULADOR TECLADO PIANO - RED
Teclado / Piano virtual, simulador para ensaio e ou aprendizado 🎹 🎼.

## Motivação para produção deste Projeto:
Projeto desenvolvido devido a necessidade de treinamento para aprimorar os estudos de teoria musical 🎼.

## Implementação de Melhorias nas Funcionalidades a partir das básicas:

- Aparência mais fidedigna à um teclado físico, com simulação de caixa de saída de som, botões de volume, tone e echo.
- Implementar seletor para mostrar as Notas Musicais em todas as teclas com opção de ocultar.
- Coloração  das teclas comdegradê.
- Responsividade para telas de celulares e tablets.

## Tecnologias Utilizadas:
<!-- https://devicon.dev/ -->
<div style="display: inline_block" align="center">
    <img align="center" alt="MM-Html" height="30" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg">
    &nbsp;&nbsp;&nbsp;
    <img align="center" alt="MM-CSS" height="30" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg">
    &nbsp;&nbsp;&nbsp;
    <img align="center" alt="MM-Js" height="30" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg">
    &nbsp;&nbsp;&nbsp;
    <img align="center" alt="MM-MarkDounw" height="30" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg">
    &nbsp;&nbsp;&nbsp;
    <img align="center" alt="MM-Git" height="30" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg">
    &nbsp;&nbsp;&nbsp;
    <img align="center" alt="MM-GitHub" height="30" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg">
    &nbsp;&nbsp;&nbsp;
    <!-- <img align="center" alt="MM-GitHubPage" height="20" width="30" src=""> -->
    <a href="https://marcia-moreira.github.io/Challange_01-WoMakersCode-Intro_Star_Wars_MM/" alt="Minha_Pagina" target="_blank"><img align="center" height="30" width="50" src="https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white" target="_blank"></a>
    &nbsp;&nbsp;&nbsp;
    <img align="center" alt="MM-VSCode" height="30" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg">    
    &nbsp;&nbsp;&nbsp;
    <img align="center" alt="MM-Trello" height="35" width="35" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain-wordmark.svg">
    &nbsp;&nbsp;&nbsp;
</div>

- **HTML5:** Estruturação do conteúdo e marcação semântica do das teclas e suas notas musicais.

- **CSS3:** Estilização visual com:
  - Animações para os botões interativos.
  - Transições suaves que simulam a movimentação dos botões quando pressionados.
  - Responsividade para diferentes dispositivos.

- **JavaScript:** Lógica do simulador e interação, incluindo:
  - Manipulação do DOM para destacar os botões durante o ensaio.
  - Uso de eventos para capturar cliques da digitação das teclas.
  - Implementação de lógicas complementares para controle de marcações de posição das teclas  x notas.

Ferramentas de apoio:
- **Git e GitHub:** Controle de versão e hospedagem do código.
- **GitHub Pages:** Para o deploy da aplicação.
- **VS Code:** Ambiente de desenvolvimento.
- **Trello:** Para organizar as etapas do projeto.

## Links e Referências  projeto inicial:
- Link projeto referência no GitHub: https://github.com/gustavopolonio/piano
- Créditos - Canal Youtube Manual do DEV

## Como Rodar o Projeto Localmente:
1. Clone o repositório:
   git clone https://github.com/Marcia-Moreira/Portfolio_Proj_002-Teclado-Piano-RED.git

## Minhas idéias de melhorias, implementadas durante o desenvolvimento:
- [ OK ] Segunda tecla, o quadradinho precisa ficar sob o bastão/trilho
- [ OK ] Quando usamos o Teclado Touch: Não conseguimos usar duas teclas ao mesmo tempo, elas não emitem som se são tecladas juntas! Rever.
- [ OK ] Aprimorar as capturas de clicks, nas telas touch e de mouse
- [ OK ] Aprimorar a coloração e descolcoração ao clicar e soltar as teclas touch.
- [    ] Os botões redondos de volume, estão identificados com a mesma ID, logo o código JS está dando erro e precisa ser ajustado para classe!
- [    ] Existe alguma forma de realmente aprimorar o codigo do volume e ele aumentar ou diminuir o volume?
- [    ] As caixas Legendas de Notas e de Teclas, estão impedindo o toque Touch que emite o som! Mesmo desativadas, parece que não deixa tocar pois estão ali efetivamente e apenas transparente.
- [    ] A parte de Botoes de Legendas das Teclas para que se mostrem ou se escondam, se cliccarmos na palavra também está ativando e desativando, não deveria acontecer, deveria funcionar apenas no botão!
- [ OK ] 🤳Verificar Responsividade em Celulares Maiores e Tablets.
- [    ] Verificar responsividade em celulares iphone de telas menores e mais antigos (Teste Udson-Senac)

## Registros da Construção 🧱:
- Desenvolvimento Web => *Marcia Moreira*
- Iniciado => 04/11/2024
- Finalizado Primeiro Deploy => 08/11/2024
- Atualização do Projeto => 08/01/2025
- WhatsApp => *+55 11 97721-9430*
<div style="display: inline_block">
    <!-- WhatsApp -->
    <a href="https://wa.me/5511977219430" alt="Meu_WhatsApp" target="_blank"><img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" target="_blank"></a> &nbsp;
    <!-- Linkedin -->
    <a href="https://www.linkedin.com/in/marciamoreiramm/" target="_blank"><img src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> &nbsp;
</div>

##
