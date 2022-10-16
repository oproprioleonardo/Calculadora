let elementos = "";
let sinais = ["+", "-", "x", "/", "^", "%"]

function clicarNum(element) {
    let num = element.innerHTML;
    elementos += num;
    exibirNaTela();
}

function conta(element) {
    let ultimo = elementos[elementos.length - 1];
    let sinal = element.innerHTML;
    if (sinal != "√" && sinais.includes(ultimo)) return;
    if (ultimo == ".") elementos += "0";
    ultimo = elementos[elementos.length - 1];
    if (sinal == "√") {
        if (!isNaN(ultimo)) elementos += "x";
        sinal += "("
    }
    elementos += sinal;
    exibirNaTela();
}

function ponto() {
    let num;
    for (let i = elementos.length - 1; i >= 0; i--) {
        if (!isNaN(elementos[i]) || elementos[i] == ".") num = elementos[i] + num;
        else break;
    }
    if (num == "") elementos += "0.";
    else if (!num.includes(".")) elementos += "."
    exibirNaTela();
}

function resultado() {
    let expressao = elementos;
    let ultimoCaracter = expressao[expressao.length - 1];
    if (isNaN(ultimoCaracter) && ultimoCaracter != ")") expressao = expressao.substring(0, expressao.length - 1);
    expressao = expressao.replace("√", "Math.sqrt").replace("x", "*").replace("^", "**");
    let number;

    try {
        number = eval(expressao);
    } catch {
        elementos = "";
        alert("A expressão matemática estava incorreta.")
    }
    
    if (!isNaN(number) && isFinite(number))
        elementos = number.toString();
    else {
        elementos = "";
        alert("A expressão matemática estava incorreta.")
    }
    exibirNaTela();
}


function exibirNaTela() {
    document.getElementById("conta").innerHTML = elementos;
}

function ac() {
    elementos = "";
    exibirNaTela();
}

function apagar() {
    elementos = elementos.substring(0, elementos.length - 1);
    exibirNaTela();
}