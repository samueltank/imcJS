"use strict";

export default function colorMsg(result, element) {
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