import { alterandoImagens } from './alterando-imagens-fundo.js';
import { templateHistoria } from './template-historia.js';

const historia = {
    nome: '',
    monstros: '',
    sobreMonstros: '',
    motivacao: '',
    especie: '',
    especiePlural: '',
    especieArtigoIndefinido: '',
    especieArtigoDefinido: '',
    armamento: '',
    armamentoArtigoIndefinido: '',
    armamentoAcao: '',
    local: '',
    outroLocal: '',
    acidente: '',
    acidenteConsequencia: ''
};

const imagens = [];

export function construindoHistoria(dados) {

    historia.nome = dados.nome;

    switch (dados.monstros) {

        case 'Vampiros':
            historia.monstros = "vampiros";
            historia.sobreMonstros = "criaturas que amam sangue e odeiam alho";
            historia.motivacao = "chupar o sangue de";
            imagens.push('../imagens/Vampiros/vampiro-1.jpg')
            imagens.push('../imagens/Vampiros/vampiro-2.jpg');
            imagens.push('../imagens/Vampiros/vampiro-3.jpg');
            imagens.push('../imagens/Vampiros/vampiro-4.jpg');
            imagens.push('../imagens/Vampiros/vampiro-5.jpg')
            imagens.push('../imagens/Vampiros/vampiro-6.jpg');
            break;

        case 'Zumbis':
            historia.monstros = "zumbis";
            historia.sobreMonstros = "criaturas sem qualquer tipo de consciência";
            historia.motivacao = "comer o cérebro de";
            imagens.push('../imagens/Zumbis/zumbis-1.jpg')
            imagens.push('../imagens/Zumbis/zumbis-2.jpg');
            imagens.push('../imagens/Zumbis/zumbis-3.jpg');
            imagens.push('../imagens/Zumbis/zumbis-4.jpg');
            imagens.push('../imagens/Zumbis/zumbis-5.jpg')
            imagens.push('../imagens/Zumbis/zumbis-6.jpg');
            imagens.push('../imagens/Zumbis/zumbis-7.jpg');
            imagens.push('../imagens/Zumbis/zumbis-8.jpg');
            break;

        case 'Globins':
            historia.monstros = "globins";
            historia.sobreMonstros = "criaturas que amam aprontar várias travessuras";
            historia.motivacao = "assustar";
            imagens.push('../imagens/Globins/globins-1.jpg');
            imagens.push('../imagens/Globins/globins-2.jpg');
            imagens.push('../imagens/Globins/globins-3.jpg');
            imagens.push('../imagens/Globins/globins-4.jpg');
            imagens.push('../imagens/Globins/globins-5.jpg');
            imagens.push('../imagens/Globins/globins-6.jpg');
            imagens.push('../imagens/Globins/globins-7.jpg');
            break;

        case 'Dragões':
            historia.monstros = "dragões";
            historia.sobreMonstros = "criaturas muito grandes e monstruosos";
            historia.motivacao = "queimar";
            imagens.push('../imagens/Dragões/dragoes-1.jpg');
            imagens.push('../imagens/Dragões/dragoes-2.jpg');
            imagens.push('../imagens/Dragões/dragoes-3.jpg');
            imagens.push('../imagens/Dragões/dragoes-4.jpg');
            imagens.push('../imagens/Dragões/dragoes-5.jpg');
            imagens.push('../imagens/Dragões/dragoes-6.jpg');
            break;

        case 'Bruxas':
            historia.monstros = "bruxas";
            historia.sobreMonstros = "criaturas horripilante";
            historia.motivacao = "enfeitiçar";
            imagens.push('../imagens/Bruxas/bruxas-1.jpg');
            imagens.push('../imagens/Bruxas/bruxas-2.jpg');
            imagens.push('../imagens/Bruxas/bruxas-3.jpg');
            imagens.push('../imagens/Bruxas/bruxas-4.jpg');
            imagens.push('../imagens/Bruxas/bruxas-5.jpg');
            imagens.push('../imagens/Bruxas/bruxas-6.jpg');
            imagens.push('../imagens/Bruxas/bruxas-7.jpg');
            break;
    };

    switch (dados.especie) {

        case 'Cacatua':
            historia.especie = "cacatua";
            historia.especiePlural = "cacatuas";
            historia.especieArtigoIndefinido = "uma";
            historia.especieArtigoDefinido = "A";
            break;

        case 'Pug':
            historia.especie = "pug";
            historia.especiePlural = "pugs";
            historia.especieArtigoIndefinido = "um";
            historia.especieArtigoDefinido = "O"
            break;

        case 'Chimapanzé':
            historia.especie = "chimapanzé";
            historia.especiePlural = "chimapanzés";
            historia.especieArtigoIndefinido = "um";
            historia.especieArtigoDefinido = "O"
            break;

        case 'Pomba':
            historia.especie = "pomba";
            historia.especiePlural = "pombas";
            historia.especieArtigoIndefinido = "uma";
            historia.especieArtigoDefinido = "A"
            break;

        case 'Baiacu':
            historia.especie = "baiacu";
            historia.especiePlural = "baiacus";
            historia.especieArtigoIndefinido = "um";
            historia.especieArtigoDefinido = "O"
            break;
    };

    switch (dados.armamento) {

        case 'Pistola':
            historia.armamento = "pistola";
            historia.armamentoArtigoIndefinido = 'uma';
            historia.armamentoAcao = 'conseguiu atirar em todos eles';
            break;

        case 'Tesoura':
            historia.armamento = "tesoura";
            historia.armamentoArtigoIndefinido = 'uma';
            historia.armamentoAcao = 'conseguiu cortar todos eles';
            break;

        case 'Serra Elétrica':
            historia.armamento = "serra elétrica";
            historia.armamentoArtigoIndefinido = 'uma';
            historia.armamentoAcao = 'conseguiu cortar todos eles';
            break;

        case 'Lança-chamas':
            historia.armamento = "lança-chamas";
            historia.armamentoArtigoIndefinido = 'um';
            historia.armamentoAcao = 'conseguiu queimar todos eles';
            break;

        case 'Varinha Mágica':
            historia.armamento = "varinha mágica";
            historia.armamentoArtigoIndefinido = 'uma';
            historia.armamentoAcao = 'aprendeu uma magia que fez com que tudo voltasse ao normal';
            break;
    };

    switch (dados.local) {

        case 'Springfield':
            historia.local = "Springfield";
            historia.outroLocal = "na casa dos Simpsons"
            break;

        case 'Amazonas':
            historia.local = "Amazonas";
            historia.outroLocal = "na floresta"
            break;

        case 'Antártica':
            historia.local = "Antártica";
            historia.outroLocal = "em um iglu"
            break;

        case 'Hollywood':
            historia.local = "Hollywood";
            historia.outroLocal = "em um set de filmagem"
            break;

        case 'Hogwarts':
            historia.local = "Hogwarts";
            historia.outroLocal = "no banheiro"
            break;
    };

    switch (dados.acidente) {

        case 'Bombas Atômicas':
            historia.acidente = "bombas atômicas";
            historia.acidenteConsequencia = "estavam por perto"
            break;

        case 'Chicletes Irresistíveis':
            historia.acidente = "chicletes irresistíveis";
            historia.acidenteConsequencia = "consumissem";
            break;

        case 'Papais-noéis':
            historia.acidente = "papais-noéis";
            historia.acidenteConsequencia = "pedissem presentes"
            break;

        case 'Gatinhos':
            historia.acidente = "gatinhos";
            historia.acidenteConsequencia = "não fizessem carinho neles"
            break;

        case 'Alienígenas':
            historia.acidente = "alienígenas";
            historia.acidenteConsequencia = "vissem eles"
            break;
    };

    alterandoImagens(imagens);
    templateHistoria(historia);
}