"use strict";

let texto;

export function classificarIMC(result) {
  if(result <= 18.5) {
    texto = "e você está abaixo do peso";
  } else if(result <= 25) {
    texto = "e seu peso está normal!";
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