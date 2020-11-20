function validar() {
    var nome = form1.nome.value;
    var email = form1.email.value;
    
    if (nome == "") {
        alert('Preencha o campo com seu nome');
        form1.nome.focus();
        return false;
    }
    
    if (email == "") {
        alert('Preencha o campo com um email valido');
        form1.email.focus();
        return false;
    }

    alert("Para aprender mais, entre no maior site de xadrez do mundo e faça seu cadastro!")
    window.open("https://www.chess.com")
    
}
