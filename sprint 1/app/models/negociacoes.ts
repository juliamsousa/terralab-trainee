import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  private negociacoes: Array<Negociacao> = [];

  adiciona(negociacao: Negociacao): void {
    this.negociacoes.push(negociacao);
  }

  lista(): ReadonlyArray<Negociacao> {
    // criando uma nova lista com spread operator
    // desse modo a lista original não é alterada pois é apenas uma referencia
    // return [...this.negociacoes];
    // o metodo read only nao permite alterar o array, apenas ler
    return this.negociacoes;
  }
}