// é necessario adicionar o js ao final para que funcione
import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController
/**
 * isso é um erro
 * essa propriedade é criada dinamicamente e nao corresponde
 * a quantidade referente a negociacao
 * 
 * esse erro só é percebido em runtime, desse modo o Typescript ajuda no dev
 * 
 * o TS é um superset de JS e ajuda a capturar erros em devtime
 *  */ 

// com o TS adicionado esse erro passa a ser previsto em devtime
// negociacao.quantidad = 10;

const form = document.querySelector(".form");

form.addEventListener("submit", e => {
  e.preventDefault();
  controller.adiciona();
})