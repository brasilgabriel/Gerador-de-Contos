export function alterandoImagens(imagens) {

    setInterval(() => {
        let random = Math.floor(Math.random() * imagens.length);

        document.body.style.backgroundImage = `url('${imagens[random]}')`;
    }, 5000);
}
