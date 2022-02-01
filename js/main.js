'use strict'; /* -Ai, maldito, me ajuda ai */
/* Declaração das variáveis */
const btn      = document.getElementById("calcular");
let peso       = document.getElementById("peso");
let InpPeso    = document.getElementById("InpPeso");
let nome, altura, result, resultTxt, texto, msg;

/* Ouvintes */
btn.addEventListener("click", ProcessarResultado);
peso.addEventListener('input', function() {
  InpPeso.value = this.value;
});

/* Funções */
function ProcessarResultado() {
  /* Método de cálculo */
  nome      = document.getElementById("nome").value;
  altura    = document.getElementById("altura").value;
  peso      = document.getElementById("peso").value;
  resultTxt = document.getElementById("resultado");
  msg       = document.getElementById("menssagem");
    
  if(camposvalidos()) {
    result = calcularIMC(altura, peso);
    texto  = classificarIMC(result);
    msg    = colorMsg(result, msg);

    console.log(msg);
    resultTxt.textContent = `${nome.toUpperCase()}, seu IMC é ${result.toFixed(2)} ${texto}.`;
    resultTxt.appendChild(msg);
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

function colorMsg(result, element) {
  element.setAttribute("class", "");
  if(result > 18.5 && result <= 25) {
    element.innerHTML = "PARABÉNS!";
    element.classList.add("verde");
  } else if(result > 40) {
    element.classList.add("vermelho");
    element.innerHTML = "CUIDADO!";
  } else {
    element.innerHTML = "";
  }
  return element;
}