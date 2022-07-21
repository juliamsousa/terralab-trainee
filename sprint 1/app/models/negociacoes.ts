import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  // private negociacoes: Array<Negociacao> = [];
  // shorthand do TS que permite criar o mesmo que a linha acima
  private negociacoes: Negociacao[] = [];

  adiciona(negociacao: Negociacao): void {
    this.negociacoes.push(negociacao);
  }

  // 
  // shorthand que cria o mesmo que o escrito acima readonly Negociacao[]
  lista(): ReadonlyArray<Negociacao> {
    // criando uma nova lista com spread operator
    // desse modo a lista original não é alterada pois é apenas uma referencia
    // return [...this.negociacoes];
    // o metodo read only nao permite alterar o array, apenas ler
    return this.negociacoes;
  }
}