"use strict"; /* <- Executa o código JS em 'Modo Restricto' */

/* Importação viva: */
import colorMsg from "./colorMSG.js";
import {classificarIMC as classificarIMC} from "./classificarIMC.js";


/* 
 * Declaração das variáveis
 */
const btn      = document.getElementById("calcular");
let peso       = document.getElementById("peso");
let InpPeso    = document.getElementById("InpPeso");
let altura     = document.getElementById("altura");
let inpAltura  = document.getElementById("inpAltura");

let nome, result, texto, resultTxt, msg;

/*
 * EventListeners
 */
btn.addEventListener("click", ProcessarResultado);
peso.addEventListener("input", function() {
  InpPeso.value = this.value;
});
altura.addEventListener("input", function() {
  inpAltura.value = this.value;
});

/* 
 * Funções
 */

// Arrow Fuction:
const camposvalidos = () => {
  return document.getElementById("form").reportValidity();
};
const calcularIMC = () => {
  return (peso / (altura ^ 2));
};

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