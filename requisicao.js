function fazerRequisicao(){

    var url = 'https://covid19.mathdro.id/api?fbclid=IwAR3O5qKjXCERD2pkA-Y6mSorXBrL1lvu8JgyUvN0UPyfUYjDSRQ5R-pGizs';

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);

    xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor
    dados = JSON.parse(xhttp.responseText);
    console.log(dados.confirmed.value);
    
    document.getElementById("qt_casos").innerText = dados.confirmed.value;
    document.getElementById("qt_recuperados").innerText = dados.recovered.value;
    document.getElementById("qt_mortes").innerText = dados.deaths.value;
    document.getElementById("resposta").innerHTML = xhttp.responseText;
}
