

function clicou(){
    document.getElementById("Agradecimento.");
    console.log(document.getElementById("Agradecimento.").innerHTML = "<b>Obrigado por clicar.</b>");
    //alert("Obrigado por clicar.");
}

function redirecionar(){
    //window.open abre uma nova aba;
    //window.open("https://github.com/GuilhermeVenturim/aula_javascript"); 
    //window.location.href abre na mesma aba.
    window.location.href = "https://github.com/GuilhermeVenturim/aula_javascript";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui.";
    elemento.innerHTML = "Passe o mouse aqui.";
}

function load(){
alert("Página carregada.");
}

    function funcaoChange(elemento){
        console.log(elemento.value)
    }
/*
function soma(n1, n2){
    return n1 + n2;
}
*/

/*
var validar = 0;
function validaIdade(idade){
     validar;
    if (idade >= 18){
    validar = true;
}else{
    validar = false
}
return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));

//alert(soma(5, 10));
*/

/*
function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

/*
var d = new Date();
alert(d.getHours()+1);
alert(d.getDay()+1);
alert(d.getMonth()+1);
alert(d.getFullYear()+1);
*/

/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
}
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    count = count + 1;
}
*/

/*
var idade = prompt("Qual sua idade?");
var idade = 18;
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}
*/

/*
var frutas = [{nome: "maçã", cor:"vermelha"}, {nome: "uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].cor);
*/

/*
var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva");
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" * "))
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista[1]);
//alert(lista[1]);
//console.log(lista.reverse());

/*
var nome = "Guilherme Venturim";
var n1 = 5;
var n2 = 10;
var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
console.log(nome);
console.log(n1 + n2);
console.log(frase.toLowerCase());
//console.log(frase.replace("Japão", "Brasil"));
*/

//OLD

/*
var d = new Date();
alert(d);
*/

/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
}
*/

/*
var count = 5;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
};
*/

/*
var idade = prompt("Qual sua idade?");
var idade = 18;
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}
*/

/*
var frutas = [{nome: "maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/
/*
var fruta = {nome: "maçã", cor:"vermelha"}
console.log(fruta);
alert(fruta.cor);
*/

//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();

//console.log(lista);
//console.log(lista.toString());
//console.log(listajoin(" = "));

//var nome = "Guilherme Venturim";
//var n1 = 5;
//var n2 = 3;
//var frase = "Meu javascript";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);

//console.log(nome);
//console.log(n1 * n2);
//console.log(frase.replace("Meu", "Nosso"));
//alert(frase.replace("Meu", "Nosso"))