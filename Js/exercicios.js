    //Exercicio 1- Infome seu nome 

/*const nome = prompt("por favor, informe seu nome:");
    alert(`bem vindo ao sistema ${nome}`);
*/

//---------------------------------------------------------------------------

    // Exercicio 2 - Nome e Idade

/*
const nome1 = prompt("por favor, informe seu nome:");
const idade = prompt("por favor, informe sua idade:");
    alert (`${nome1} sua idade é ${idade} anos. `);
*/

//---------------------------------------------------------------------------

    //Exercicio 3 - População 

/*
const p1 = prompt ("Qual é a população do Brasil:");
const br = "Brasil"
const p2 = prompt ("qual é a população da China");
const china = "China"*/
    // if(p1>p2){
    //     alert(`A população do ${br} é a maior`);
    // }
    // else if(p2>p1){
    //     alert(`A população da ${china} é a maior`);
    // }
    // else{
    //     alert(`ERRO! as duas populações não podem ser iguais.`);
    // }


//-----------------------------------------------------------------------------

    // Exercicio 4 - Par ou Impar

//const n1 = parseInt (prompt("Informe um valor:"));

/* O operador (%) é o resto da divisão, ou seja se->(if) o valor "N1" for dividido
e o resto da divisão for "0" então esse número é Par,Senão->(else), então 
ele é um número impar
if(n1 % 2 === 0){
    alert(`o número ${n1} é par`)
}
else{
    alert(`o número ${n1} é impar`)  
}*/


//------------------------------------------------------------------------------

    // Exercicio 5 - Calcular Desconto 
/*
const salBrut = parseFloat (prompt("Informe seu sálario Bruto:"));
const salLqd = (salBrut - (salBrut * 0.1));
    alert(`Seu sálario liquido será: ${salLqd}`);
*/

//-------------------------------------------------------------------------------

    // Exercicio 6 - Celcius/Fahrenheit
    //Formula -> (C * 9/5) + 32.

 
 const temp_C = parseFloat (prompt("Informe a Temperatura Cº"));
 const temp_F = (temp_C * 9/5)+32;
    alert (`A temperatura em Fahrenheit será de: ${temp_F.toFixed(2)}`);


//-------------------------------------------------------------------------------

    // Exercicio 7 - Calular se todos os números são iguais, ou se existem números diferentes
/*
const n1 = parseInt (prompt("Informe o 1º número:"));
const n2 = parseInt (prompt("Informe o 2º número:"));
const n3 = parseInt (prompt("Informe o 3º número:"));

if(n1>n2 && n1>n3){
   alert(`o número ${n1} é maior que os números ${n2} e ${n3}.`);
   
} 
else if(n2>n1 && n2>n3){
    alert(`o número ${n2} é maior que os números ${n1} e ${n3}.`);
}
    
else if(n3>n1 && n3>n2){
    alert(`o número ${n3} é maior que os números ${n2} e ${n1}.`);
}

else{
    alert(`ERRO! Os números não podem Ser iguais. `);
}
*/

//-------------------------------------------------------------------------------
    
    // Exercicio 8 - Calcular Ano de Nascimento

/*
const valor_Id = parseInt (prompt("Informe a sua idade: "));
const anoAtual = parseInt (prompt("Que ano nós estamos: "));
const dt_Nasc = (anoAtual - valor_Id);
    alert (`Seu ano de nascimento é: ${dt_Nasc}`);
*/
//-------------------------------------------------------------------------------
    
    // Exercicio 9 - Calcular IMC

/*const val_Alt = parseFloat (prompt("Informe sua altura"));
const val_Peso = parseFloat (prompt("Informe seu peso"));
const imc = val_Peso / (val_Alt * val_Alt);

    //Verificar se a altura é valida

 if(val_Alt <= 0){
    alert ("Altura inválida. Deve ser maior que zero.")
 }
    /*Calcular o IMC:
        IMC = peso / (altura * altura)

//OBS: usar ponto ao invés de virgula para determinar a altura.

else if(imc < 16.9){
    alert("Muito abaixo do peso");
}

else if(imc >= 17 && imc <= 18.9){
    alert("Abaixo do peso");
}

else if (imc >= 19 && imc <= 26.9){
    alert ("Normal");
}
else if (imc >= 27 && imc <= 31.9){
    alert ("Acima do Peso");
}
else{
    alert("obesidade");
}*/

//-------------------------------------------------------------------------------

    //Exercicio 10 - Calcular a Média
/*
const n1 = parseFloat (prompt("Informe sua primeira nota: "));
const n2 = parseFloat (prompt ("Informe sua segunda nota: "));
const n3 = parseFloat (prompt("Informe sua terceira nota: "));
const n4 = parseFloat (prompt("Informe sua quarta nota :"));
const media = parseFloat (n1+n2+n3+n4)/4;

if(n1 >10 || n2>10 || n3>10 || n4>10){
    alert("ERRO! os valores númericos deve ser entre 0 e 10");
}
else if(media >= 7){
    alert ("Aluno aprovado");
}
else if(media >= 5 && media <= 6.9){
    alert ("Aluno em recuperação");
} 
else{
    alert ("Aluno reprovado.");
}
*/