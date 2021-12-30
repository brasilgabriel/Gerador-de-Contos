let data = new Date();

export function templateHistoria(dados) {
    document.getElementById('form').style.visibility = 'hidden';
    document.getElementById('section_historia').style.visibility = 'visible';
    document.getElementById('section_historia').innerHTML = '';

    document.getElementById('section_historia').innerHTML += `
    <div>
        <p>
            "Era uma vez em lugar chamado ${dados.local}, havia lá um habitante que se chamava ${dados.nome}, 
            ele era ${dados.especieArtigoIndefinido} ${dados.especie} muito alegre, até que foi chegada a era 
            dos ${dados.monstros}, que foi causada em ${data.getFullYear()} por ${dados.acidente} que faziam 
            com que os humanos que ${dados.acidenteConsequencia} se tornassem ${dados.monstros}, ${dados.sobreMonstros}, 
            suas únicas motivações eram ${dados.motivacao} ${dados.especiePlural} e dançar break. ${dados.especieArtigoDefinido} 
            ${dados.especie} se viu obrigado a aprender técnicas de combate aprimoradas, até que encontrou uma 
            coisa ${dados.outroLocal}, era ${dados.armamentoArtigoIndefinido} ${dados.armamento}, ferramenta que 
            ele utilizou por décadas no combate destes ${dados.monstros}, até que em um determinado momento ${dados.armamentoAcao}, 
            trazendo a paz mundial... Fim".
        </p>
    </div>
    `
}