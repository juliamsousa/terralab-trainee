// criacao do modulo negociacao
export class Negociacao {
    // o modificador (_) é uma convencao para atributos private
    // o proprio constructor cria as propriedades implicitamente
    // tornando public readonly reduzimos a quantidade de getters
    // é possivel acessar o dado mas nao modifica-lo
    // o método readonly protege apenas contra atrobuições ( = ), mas outros metodos podem ser utilizados para modificar os dados
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        // criada uma nova referencia a data para que ela seja protegida
        // com isso alteracoes serao feitas na copia e nao na original
        // Programaçao Defensiva
        const data = new Date(this._data.getTime());
        return data;
    }
    // os getters nao sao mais necessarios por causa do modificador readonly
    // get quantidade() {
    //   return this._quantidade;
    // }
    // get valor() {
    //   return this._valor;
    // }
    get volume() {
        return this.quantidade * this.valor;
    }
}
