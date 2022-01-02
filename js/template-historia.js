let data = new Date();
const texto = { historia: '' };

let i = 0;

// função com o template da história
export function templateHistoria(dados) {

    document.getElementById('form').style.visibility = 'hidden';
    setTimeout(() => {
        document.getElementById('section_historia').style.visibility = 'visible';
    }, 300);

    // os dados são adicionados na história
    texto.historia = `"Era uma vez em lugar chamado ${dados.local}, havia lá um habitante que se chamava ${dados.nome}, 
ele era ${dados.especieArtigoIndefinido} ${dados.especie} muito alegre, até que chegou a era 
${dados.preposicaoMonstros} ${dados.monstros}, que foi causada em ${data.getFullYear()} por ${dados.acidente} que faziam 
com que os humanos que ${dados.acidenteConsequencia} se tornassem ${dados.monstros}, ${dados.sobreMonstros}, 
suas únicas motivações eram ${dados.motivacao} ${dados.especiePlural} e dançar break. ${dados.especieArtigoDefinido} 
${dados.especie} se viu obrigado a aprender técnicas de combate aprimoradas, até que encontrou uma 
coisa ${dados.outroLocal}, era ${dados.armamentoArtigoIndefinido} ${dados.armamento}, ferramenta que 
ele utilizou por décadas no combate destes ${dados.monstros}, até que em um determinado momento ${dados.armamentoAcao}, 
trazendo a paz mundial... Fim".`;

    setTimeout(() => {
        efeitoEscrevendo();
    }, 400);
}

// função para o efeito de "máquina de escrever"
function efeitoEscrevendo() {

    // as palavras vão aparecendo com o tempo
    if (i < texto.historia.length) {

        document.getElementById("texto").innerHTML += texto.historia.charAt(i);
        i++;

        setTimeout(efeitoEscrevendo, 70);
    }
}