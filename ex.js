//ex 1

let nome ="Mylena";
console.log(nome);

//ex 2

let cor1 = "Verde";
let cor2 = "Vermelho";

if(cor1 == cor2) {
    console.log("As cores são iguais");
}else{
    console.log("As cores estão diferentes");
}

//ex 3

let num1 = 10;
let num2 = 15;

if(num1 < num2) {
    console.log("num1 é menor que num2");
}

//ex 4

let idade = 17;

if(idade >= 18) {
    console.log("Parabéns!");
}else {
    console.log("Você tem menos de 18 anos");
}

//ex 5

let votar = 16;

if(votar >= 16) {
    console.log("Você já pode votar");
}else{
    console.log("Você ainda não pode votar")
}


//ex 6

let numero = 89;

if (numero >= 50 && numero <= 100) {
    console.log("O número está entre 50 e 100.");
} else {
    console.log("O número não está entre 50 e 100.");
}


//ex 1 médio

let name = "Mylena";
let number = "17";

if (number <=18) {
    console.log("Você é maior de idade.");
} else {
console.log("Você é menor de idade.");
}

//ex 2 
let n1 = 25;
let n2 = 75;

if (n1 > n2) {
    console.log("O número maior é: 75");
} else if (n2 > n1) {
    console.log("O maior número é: 25");
} else {
console.log("Ambos números são iguais");
}

//ex 3
let texto = "Melancia";

if (texto.length > 5) {
    console.log("A texto tem 5 ou mais caracteres.");
} else {
    console.log("O texto tem 5 ou mais caracteres.");
}

// ex 4
let numero1 = 8;
let numero2 = 64;

if (numero1 % 2 === 0 && numero2 % 2 === 0) {
    console.log("Os dois números são pares.");
} else {
    console.log("Um ou nenhum dos números são pares.");
}

//ex 5
let Java = "Eu não conhecia JavaScript";

if (Java.includes("JavaScript")) {
    console.log("A frase contém a palavra JavaScript.");
} else {
    console.log("A frase não contém a palavra JavaScript.");
}
