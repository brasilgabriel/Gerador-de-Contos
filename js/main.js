document.getElementById('botao').addEventListener('click', function (event) {
    event.preventDefault;

    const nome = document.getElementById('nome').value;
    const monstro = document.getElementById('select_monstros').value;
    const especie = document.getElementById('select_especie').value;
    const armamento = document.getElementById('select_armamento').value;
    const local = document.getElementById('select_local').value;
    const acidente = document.getElementById('select_acidente').value;

    if (nome === '' || monstro === 'Escolha uma opção' || especie === 'Escolha uma opção' || armamento === 'Escolha uma opção' || local === 'Escolha uma opção' || acidente === 'Escolha uma opção') {
        alert('[ERRO] Formulário incompleto!');
        document.querySelectorAll('input') // para apagar os valores que estão escritos no input
            .forEach(function (input) {
                input.value = '';
            });
    } else {
        const dadosHistoria = { // objeto com os valores que os inputs receberam
            nome: nome,
            monstro: monstro,
            especie: especie,
            armamento: armamento,
            local: local,
            acidente: acidente,
        };

        // modalResultados(dadosHistoria);
    }
})

// function erroFormulario () {

    
// }