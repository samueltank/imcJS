'use strict'; /* -Ai, maldito, me ajuda ai */
/* Declaração das variáveis */
const btn = document.getElementById("calcular");
let nome, altura, peso, result, resultTxt, texto, msg;

/* Ouvintes */
btn.addEventListener("click", ProcessarResultado);

/* Funções */
function ProcessarResultado(event) {
  /* Método de cálculo */

  nome      = document.getElementById("nome").value;
  altura    = document.getElementById("altura").value;
  peso      = document.getElementById("peso").value;
  resultTxt = document.getElementById("resultado");
  msg       = document.getElementById("menssagem");
  console.log(msg);

  if(camposvalidos()) {
    result = calcularIMC(altura, peso);
    texto  = classificarIMC(result);

    resultTxt.innerHTML = `${nome.toUpperCase()}, seu IMC é ${result.toFixed(2)} ${texto}. ${msg}`;

    event.preventDefault();
  }
}

function camposvalidos() {
  return document.getElementById("form").reportValidity();
}

function calcularIMC(altura, peso) {
  return (peso / (altura ^ 2));
}

function classificarIMC(result) {
  if(result <= 18.5) {
    texto = "e você está abaixo do peso";
  } else if(result <= 25) {
    texto = "e você está com o peso na normalidade";
  } else if(result <= 30) {
    texto = "e você sofre de sobrepeso";
  } else if(result <= 35) {
    texto = "e você sobre de obesidade tipo I";
  } else if(result <= 40) {
    texto = "e você sofre de obesidade tipo II";
  } else {
    texto = "e você sofre de obesidade tipo III";
  }
  return texto;
}

function colorMsg(result) {
  if(result <= 25) {
    return 0;
  } else if(result >= 40) {
    return 1;
  }
}


// nome !== "" && altura !== "" && peso !== "";