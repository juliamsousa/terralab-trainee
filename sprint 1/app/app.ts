import { Negociacao } from "./models/negociacao";

const negociacao = new Negociacao(new Date(), 10, 100);

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

console.log (negociacao.volume);