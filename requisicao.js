
function fazerRequisicao(){

    var url = 'https://covid19.mathdro.id/api?fbclid=IwAR3O5qKjXCERD2pkA-Y6mSorXBrL1lvu8JgyUvN0UPyfUYjDSRQ5R-pGizs';

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);

    xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor
    dados = JSON.parse(xhttp.responseText);
    
    //document.getElementById("txt-card-casos").innerText = 'NUMERO DE CASOS EM TODO O MUNDO'
    document.getElementById("qt_casos").innerText = 'CASOS CONFIRMADOS: ' + dados.confirmed.value;
    document.getElementById("qt_recuperados").innerText = 'RECUPERADOS: ' + dados.recovered.value;
    var letalidade = (dados.deaths.value/dados.confirmed.value)*100
    document.getElementById("qt_mortes").innerText = 'LETALIDADE: ' + letalidade.toFixed(2) + '%';
    covidBrasil()
}

function covidBrasil(){

    var url = 'https://covid19.mathdro.id/api/countries/BR';

    var xhttp = new XMLHttpRequest()
    xhttp.open("GET", url, false);

    xhttp.send();

    dados= JSON.parse(xhttp.responseText);

    document.getElementById("casos_br").innerText = 'Casos BR:' + dados.confirmed.value;
    document.getElementById("recuperados_br").innerText = 'Recuperados BR: ' + dados.recovered.value;
    document.getElementById("mortes_br").innerText = 'Mortes BR: ' + dados.deaths.value;
    
    console.log(dados);

}

function pesquisa_pais(){
    var select = document.getElementById('seletor-pais');
	var text = select.options[select.selectedIndex].value;
    
    var url = 'https://covid19.mathdro.id/api/countries/' + text;
    console.log(url);

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);

    xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor
    dados = JSON.parse(xhttp.responseText);
    if (dados.error){

        document.getElementById("casos_pesquisa").innerText = 'Não temos registro na nossa API';
        document.getElementById("recuperados_pesquisa").innerText = '';
        document.getElementById("mortes_pesquisa").innerText = '';

    }
    else{

        document.getElementById("casos_pesquisa").innerText = 'Casos: ' + dados.confirmed.value;
        document.getElementById("recuperados_pesquisa").innerText = 'Recuperados: ' + dados.recovered.value;
        document.getElementById("mortes_pesquisa").innerText = 'Mortes: ' + dados.deaths.value;

    }
    
    
}
