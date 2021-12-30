// array para os valores do histórico
let historico = [];

// função para fazer o cálculo do IMC
function calcularIMC(dados) {
    const IMC = dados.peso / (dados.altura * dados.altura);
    return IMC.toFixed(2);
}

// função para definir a situação da pessoa
function situacaoPessoa(dados) {
    if (calcularIMC(dados) < 18.5) {
        const situacaoPessoa = 'Abaixo do Peso';
        return situacaoPessoa
    } else if (calcularIMC(dados) >= 18.5 && calcularIMC(dados) < 25) {
        const situacaoPessoa = 'Peso Ideal';
        return situacaoPessoa
    } else if (calcularIMC(dados) >= 25 && calcularIMC(dados) < 30) {
        const situacaoPessoa = 'Sobrepeso';
        return situacaoPessoa
    } else if (calcularIMC(dados) >= 30 && calcularIMC(dados) < 35) {
        const situacaoPessoa = 'Obesidade Grau 1';
        return situacaoPessoa
    } else if (calcularIMC(dados) >= 35 && calcularIMC(dados) < 40) {
        const situacaoPessoa = 'Obesidade Grau 2';
        return situacaoPessoa
    } else if (calcularIMC(dados) > 40) {
        const situacaoPessoa = 'Obesidade Grau 3';
        return situacaoPessoa
    }
}

// função para mostrar os resultados
function modalResultados(dados) {
    const mostrarResultados = document.getElementById('mostrar_resultado');
    mostrarResultados.innerHTML = `
         <tr>
            <td>${dados.nome}</td>
            <td>${dados.peso}kg</td>
            <td>${dados.altura}m</td>
            <td>${calcularIMC(dados)}</td>
        </tr>
    `; // .innerHTMl para criar uma parte do HTML

    document.getElementById('fundo-modal').style.visibility = "visible"; // faz a div "#fundo-modal" aparecer
    document.getElementById('resultado').style.visibility = "visible"; // faz a div "#resultado" aparecer
};

// função para adicionar os dados no array 'historico' e salvá-los no LocalStorage
function adicionarDadosHistorico() {
    historico.unshift({ // .unshift para os valores serem adicionados de uma forma diferente, que o primeiro valor adicionado fique no início do array, assim por diante
        nome: document.getElementById('nome').value,
        peso: document.getElementById('peso').value.replace(',', '.'),
        altura: document.getElementById('altura').value.replace(',', '.') // .replace para trocar as vírgulas por pontos
    });

    localStorage.setItem('pessoa', JSON.stringify(historico));

    salvarHistorico();
};

function salvarHistorico() {
    document.getElementById('historico').style.visibility = 'visible'; // a div '#historico' ficará visível
    document.getElementById('fundo-modal').style.visibility = 'visible'; // a div '#fundo-modal' ficará visível
    document.getElementById('resultado').style.visibility = "hidden"; // a div '#resultado' ficará escondida

    if (historico.length < 1) { // se não tiver nenhum item no array 'historico'...
        document.getElementById('historico').style.visibility = 'hidden'; // a div '#historico' ficará escondida
        document.getElementById('zero-registros').style.visibility = 'visible'; // a div '#zero-registros' ficará visível
    } else {
        document.getElementById('mostrar_historico').innerHTML = ''; // para limpar o HTML

        for (dado of historico) { // loop para criar o HTML para cada item do array
            document.getElementById('mostrar_historico').innerHTML += `
            <tr>
                <td>${dado.nome}</td>
                <td>${dado.peso}kg</td>
                <td>${dado.altura}m</td>
                <td>${calcularIMC(dado)}</td>
                <td>${situacaoPessoa(dado)}</td>
    
                <td
                    class="excluir-item"
                    onclick="excluirRegistro(${historico.indexOf(dado)})"
                >
                    <span class="material-icons"> 
                        delete
                    </span>
                </td>
            </tr>
            `; // .innerHTMl para criar uma parte do HTML
        };
    }
}

// função para fechar os modais
function fechaModal() {
    document.querySelectorAll('input') // para input existente, o valor deles serão 'anulados'
        .forEach(function (input) {
            input.value = '';
        });

    document.getElementById('fundo-modal').style.visibility = 'hidden'; // a div '#fundo-modal' ficará escondida
    document.getElementById('resultado').style.visibility = 'hidden'; // a div '#resultado' ficará escondida
    document.getElementById('historico').style.visibility = 'hidden'; // a div '#historico' ficará escondida
    document.getElementById('zero-registros').style.visibility = 'hidden'; // a div '#zero-registros' ficará escondida

    document.querySelector('form').nome.focus();
};

// função para excluir o item
function excluirRegistro(registro) {
    historico.splice(registro, 1);
    localStorage.setItem('pessoa', JSON.stringify(historico));

    salvarHistorico();
}

// função para excluir todos os dados
function excluirDados() {
    historico = []; // vai limpar o array
    localStorage.clear();
    salvarHistorico();
};

// ao serem clicados, vão chamar uma função
document.getElementById('fundo-modal').addEventListener('click', fechaModal);
document.getElementById('salvar').addEventListener('click', adicionarDadosHistorico);
document.getElementById('botaoHistorico').addEventListener('click', function (event) {
    event.preventDefault();

    salvarHistorico()
});
document.getElementById('descartar').addEventListener('click', fechaModal);

// ao ser clicado, habilitará a função
document.getElementById('botaoIMC').addEventListener('click', function (event) {
    event.preventDefault();

    let nome = document.getElementById('nome').value;
    let peso = document.getElementById('peso').value.replace(',', '.');
    let altura = document.getElementById('altura').value.replace(',', '.'); // .replace para trocar as vírgulas por pontos

    if (nome === '' || peso === '' || altura === '') {
        alert('[ERRO] Formulário incompleto!');
        document.querySelectorAll('input') // para apagar os valores que estão escritos nos inputs
            .forEach(function (input) {
                input.value = '';
            });
        document.querySelector('form').nome.focus();
    } else {
        const dadosInformados = { // objeto com os valores que os inputs receberam
            nome: nome,
            peso: Number(peso),
            altura: Number(altura),
        };

        modalResultados(dadosInformados);
    }
});