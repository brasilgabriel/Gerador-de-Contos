// utilizando módulos
import { conferirErrosFormulario } from './conferir-erros.js';

document.getElementById('botao').addEventListener('click', function (event) {
    event.preventDefault();

    // dados do input e dos selects
    const nome = document.getElementById('nome').value;
    const monstros = document.getElementById('select_monstros').value;
    const especie = document.getElementById('select_especie').value;
    const armamento = document.getElementById('select_armamento').value;
    const local = document.getElementById('select_local').value;
    const acidente = document.getElementById('select_acidente').value;

    // são adicionados a um objeto
    const dados = { // objeto com os valores que os inputs receberam
        nome: nome,
        monstros: monstros,
        especie: especie,
        armamento: armamento,
        local: local,
        acidente: acidente,
    };

    conferirErrosFormulario(dados)
})