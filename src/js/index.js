document.addEventListener('DOMContentLoaded', () => {
    const botaoMostrarProjetos = document.querySelector('.btn-motrar-projetos');
    console.log(botaoMostrarProjetos); // Verifique se o elemento foi encontrado

    if (botaoMostrarProjetos) {
        botaoMostrarProjetos.addEventListener('click', () => {
            console.log('clicado');
        });
    } else {
        console.error('Elemento não encontrado');
    }
});
