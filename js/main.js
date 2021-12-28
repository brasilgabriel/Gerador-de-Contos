let contadorErros;

document.getElementById('botao').addEventListener('click', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const monstro = document.getElementById('select_monstros').value;
    const especie = document.getElementById('select_especie').value;
    const armamento = document.getElementById('select_armamento').value;
    const local = document.getElementById('select_local').value;
    const acidente = document.getElementById('select_acidente').value;

    const dadosHistoria = { // objeto com os valores que os inputs receberam
        nome: nome,
        monstro: monstro,
        especie: especie,
        armamento: armamento,
        local: local,
        acidente: acidente,
    };

    contadorErros = 0;
    conferirFormulario(dadosHistoria)
})

function conferirFormulario(dados) {

    if (dados.nome === '') {
        document.getElementById('nome').classList.add("erro");
        document.getElementById('nome').classList.remove("correto");
        document.getElementById('p_nome').innerHTML = 'Digite o nome';

        contadorErros = contadorErros + 1;
    } else {
        document.getElementById('nome').classList.remove("erro");
        document.getElementById('nome').classList.add("correto");
        document.getElementById('p_nome').innerHTML = '';
    }

    if (dados.monstro === 'Escolha uma opção') {
        document.getElementById('select_monstros').classList.add("erro");
        document.getElementById('p_monstros').innerHTML = 'Escolha uma opção';

        contadorErros = contadorErros + 1;
    } else {
        document.getElementById('select_monstros').classList.remove("erro");
        document.getElementById('select_monstros').classList.add("correto");
        document.getElementById('p_monstros').innerHTML = '';
    }

    if (dados.especie === 'Escolha uma opção') {
        document.getElementById('select_especie').classList.add("erro");
        document.getElementById('p_especie').innerHTML = 'Escolha uma opção';

        contadorErros = contadorErros + 1;
    } else {
        document.getElementById('select_especie').classList.remove("erro");
        document.getElementById('select_especie').classList.add("correto");
        document.getElementById('p_especie').innerHTML = '';
    }

    if (dados.armamento === 'Escolha uma opção') {
        document.getElementById('select_armamento').classList.add("erro");
        document.getElementById('p_armamento').innerHTML = 'Escolha uma opção';

        contadorErros = contadorErros + 1;
    } else {
        document.getElementById('select_armamento').classList.remove("erro");
        document.getElementById('select_armamento').classList.add("correto");
        document.getElementById('p_armamento').innerHTML = '';
    }

    if (dados.local === 'Escolha uma opção') {
        document.getElementById('select_local').classList.add("erro");
        document.getElementById('p_local').innerHTML = 'Escolha uma opção';

        contadorErros = contadorErros + 1;
    } else {
        document.getElementById('select_local').classList.remove("erro");
        document.getElementById('select_local').classList.add("correto");
        document.getElementById('p_local').innerHTML = '';
    }

    if (dados.acidente === 'Escolha uma opção') {
        document.getElementById('select_acidente').classList.add("erro");
        document.getElementById('p_acidente').innerHTML = 'Escolha uma opção';

        contadorErros = contadorErros + 1;
    } else {
        document.getElementById('select_acidente').classList.remove("erro");
        document.getElementById('select_acidente').classList.add("correto");
        document.getElementById('p_acidente').innerHTML = '';
    }

    conferirErros()
}

function conferirErros() {

    if (contadorErros == 0) {
        alert('tudo certo')
    }
}