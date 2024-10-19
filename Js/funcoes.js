function nome_funcao(){
    alert ("função executada");
}


function somarnumeros(n1,n2) {
    let result = n1 + n2;
    alert(result);
}

function mudaCor(){
    const corzinha = document.getElementById("corzinha").value;
    //faz com que a função "chame/selecione" o corpo (body) do HTML
    const fundo = document.body;
    //Fazer com que essa função mude a cor de fundo do site
    fundo.style.backgroundColor = corzinha;
}

function pegaNome() {
    const nomeDigitado = document.getElementById("insereNome").value;
    const nomeInserido = document.getElementById("exibeNome");
    const titulo = document.getElementById ("titulo");

    nomeInserido.value = nomeDigitado;
    /* (Text.Content) serve para acessar ou definir o conteúdo de texto
    no meu HTML */
   titulo.textContent = nomeDigitado;
    
}
