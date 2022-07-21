export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        // criando uma nova lista com spread operator
        // desse modo a lista original não é alterada pois é apenas uma referencia
        // return [...this.negociacoes];
        // o metodo read only nao permite alterar o array, apenas ler
        return this.negociacoes;
    }
}
