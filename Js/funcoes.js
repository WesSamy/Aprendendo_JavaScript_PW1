function nome_funcao(){
    alert ("função executada");
}

function somarnumeros(n1,n2) {
    let result = n1 + n2;
    alert(result);
}

function mudaCor(){
    const corzinha = document.getElementById("corzinha").value;


    const fundo = document.body;
    fundo.style.backgroundColor = corzinha;
}
