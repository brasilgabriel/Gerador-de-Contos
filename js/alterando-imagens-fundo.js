// função para as imagens de fundo irem alterando com o tempo
export function alterandoImagens(imagens) {

    // para começar já com uma imagem
    document.body.style.backgroundImage = `url('${imagens[0]}')`;

    // a cada 5 segundos a imagem é alterada
    setInterval(() => {
        let random = Math.floor(Math.random() * imagens.length); // a ordem de imagem é aleatória

        document.body.style.backgroundImage = `url('${imagens[random]}')`;
    }, 5000);
}