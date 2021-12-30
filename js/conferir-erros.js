import { construindoHistoria } from './salvando-dados-historia.js';

let contadorErros;

export function conferirErrosFormulario(dados) {

    contadorErros = 0;

    if (dados.nome === '') {
        document.getElementById('nome').classList.add("erro");
        document.getElementById('nome').classList.remove("correto");
        document.getElementById('p_nome').innerHTML = 'Digite o nome';
        console.log(dados.nome)

        contadorErros = contadorErros + 1;
    } else {
        document.getElementById('nome').classList.remove("erro");
        document.getElementById('nome').classList.add("correto");
        document.getElementById('p_nome').innerHTML = '';
    }

    if (dados.monstros === 'Escolha uma opção') {
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

    conferirQuantidadeErros(dados)
}

function conferirQuantidadeErros(dados) {

    if (contadorErros == 0) {
        construindoHistoria(dados);
    }
}