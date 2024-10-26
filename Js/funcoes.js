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
    // .Style "chama" o CSS para modificar/estilizar o elemento em questão.
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
// função => armazena uma "tarefa" ao que esta dentro dele.
//stylesheet => folha de estilo em cascata (linha a linha) é a "Relação que o meu CSS vai ter com o meu HTML".