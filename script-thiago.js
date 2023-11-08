function selecionarOpcao(opcao) {
    const botoes = document.querySelectorAll('button'); // Pega todos os botões

    botoes.forEach(botao => botao.classList.remove('botão-clicado')); // Remove a classe 'botão-clicado' de todos os botões

    document.querySelector(`.${opcao}`).classList.add('botão-clicado'); // Adiciona a classe 'botão-clicado' apenas ao botão selecionado
}

const result = document.querySelector('.escolha')

function mostrarResultado() {
    const selectedButton = document.querySelector('.botão-clicado');
    const escolha = document.querySelector('.escolha');
    escolha.innerText = selectedButton.innerText; // Define o texto do botão escolhido na div do resultado

    const divPrincipal = document.querySelector('.principal');
    const divResult = document.querySelector('.result');

    divPrincipal.style.display = 'none'; // Esconde a div principal
    divResult.style.display = 'block'; // Mostra a div do resultado
}