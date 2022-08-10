# Questões Práticas de Git

![git e github logo](Arte-em-acao-2.png)

## Atividades: 

<ol>
  <li>
    A essa altura, você já deve ter criado a sua conta do GitLab, não é? Crie um repositório público na sua conta, que vai se chamar Atividade Prática e por fim sincronize esse repositório em sua máquina local.
  </li>
  <br>
  <li>
    Dentro do seu reposotorio, crie um arquivo chamado README.md e leia o artigo como fazer um readme.md bonitão e deixe esse README.md abaixo bem bonitão: README.md onde o trainne irá continuamente responder as perguntas em formas de commit. 
  </li>
  <br>
  <li>
    Inserção de código, exemplo de commit de feature. 
    Crie nesse repositório um arquivo que vai se chamar calculadora.js, abra esse arquivo em seu editor de códigos favoritos e adicione o seguinte código:
  <br>

  ```javascript
  const args = process.argv.slice(2);
  console.log(parseInt(args[0]) + parseInt(args[1]));
  ```
  <br>

  Descubra o que esse código faz através de pesquisas na internet, também
  descubra como executar um código em javascript e dado que o nome do nosso arquivo é calculadora.js e você entendeu o que o código faz, escreva abaixo como executar esse código em seu terminal:
  </li>


<hr>

## <b>RESPOSTA:</b>
O código do arquivo <i>calculadora.js</i> consiste em, como o próprio nome diz, uma calculadora simples que realiza a operação de soma entre dois inteiros.

Através do comando abaixo, é possível receber dois parâmetros digitados na linha de comando e armazená-los em um vetor denominado args.

```javascript
const args = process.argv.slice(2);
```
No segundo trecho os argumentos são convertidos para inteiro, somados e o resultado é escrito no console.
```javascript
console.log(parseInt(args[0]) + parseInt(args[1]));
```
### Exemplos de execução

```bash
$ node calculadora.js 34.32 342.12
376
```
```bash
$ node calculadora.js 10 5
15
```
```bash
$ node calculadora.js a b
NaN
```
<hr>
<br>
  <li>
    Agora que você já tem um código feito e a resposta aqui, você precisa subir isso para seu repositório. Sem usar git add . descubra como adicionar apenas um arquivo ao seu histórico de commit e adicione calculadora.js a ele.
  </li>
<br>

Que tipo de commit esse código deve ter de acordo ao conventional commit.
Que tipo de commit o seu README.md deve contar de acordo ao conventional commit. Por fim, faça um push desse commit.


  <li>
    Copie e cole o código abaixo em sua calculadora.js:
    <br>


  ```javascript
  const soma = () => {
      console.log(parseInt(args[0]) + parseInt(args[1]));
  };

  const args = process.argv.slice(2);

  soma();
  ```

  Descubra o que essa mudança representa em relação ao conventional commit e faça o devido commit dessa mudança. 
  </li>
<li>  
João entrou em seu repositório e o deixou da seguinte maneira:
<br>

```javascript
const soma = () => {
    console.log(parseInt(args[0]) + parseInt(args[1]));
};

const sub = () => {
    console.log(parseInt(args[0]) - parseInt(args[1]));  
}

const args = process.argv.slice(2);

switch (args[0]) {
    case 'soma':
        soma();
    break;

    case 'sub':
        sub();
    break;

    default:
        console.log('does not support', arg[0]);
}
```

Depois disso, realizou um git add . 
e um commit com a mensagem: "Feature: added subtraction"
faça como ele e descubra como executar o seu novo código.

Nesse código, temos um pequeno erro, encontre-o e corrija 
para que a soma e divisão funcionem.

Por fim, commit sua mudança. 
<hr>

## <b>RESPOSTA:</b>
O código não funcionava pois os índices de args utilizados nas funções soma e sub estavam incorretos. Ao invés de utilizar os índices 0 e 1, os índices corretos são 1 e 2, uma vez que o índice 0 armazena qual o tipo da operação e não um valor numérico.

### Exemplos de execução

```bash
$ node calculadora.js 'soma' 1 2
3
```

```bash
$ node calculadora.js 'sub' 1 2
-1
```

```bash
$ node calculadora.js 'div' 1 2
does not support div
```

<hr>
</li>

<li>
Por causa de joãozinho, você foi obrigado a fazer correções
na sua branch principal! O produto foi pro saco e a empresa perdeu
muito dinheiro porque não conseguiu fazer as suas contas, graças a isso
o seu chefe ficou bem bravo e mandou você dar um jeito disso nunca acontecer.

Aprenda a criar uma branch, e desenvolva a feature de divisão nessa branch. 
</li>

<li>
Agora que a sua divisão está funcionando e você garantiu que
não afetou as outras funções, você está apto a fazer um merge request
Em seu gitlab, descubra como realizá-lo de acordo com o gitflow.
</li>

<li>
João quis se redimir dos pecados e fez uma melhoria em seu código,
mas ainda assim, continuou fazendo um push na master, faça a seguinte alteração no código e fez o commit com a mensagem:

"refactor: calculator abstraction"

```javascript
var x = args[0];
var y = args[2];
var operator = args[1];

function evaluate(param1, param2, operator) {
  return eval(param1 + operator + param2);
}

if ( console.log( evaluate(x, y, operator) ) ) {}
```

Para piorar a situação, joão não te contou como executar esse novo código, enquanto você não descobre como executá-lo lendo o código, 
e seu chefe não descobriu que tudo está comprometido, faça um revert 
através do seu gitlab para que o produto volte ao normal o quanto antes!
</li>

<li>
Descubra como executar esse novo código e que operações ele é capaz de realizar. Deixe sua resposta aqui, e explique o que essas funções javascript fazem. 
</li>
</ol>


## Materiais

[Uma introdução ao Git e Gitflow - TerraLAB](http://www2.decom.ufop.br/terralab/uma-introducao-ao-git-e-gitflow/)

[Terraclub](https://drive.google.com/file/d/1_gOa9KG_6nHswQ7xNafjpUQE1i9nLN5B/view)

[Conventional Commits - Um guia sobre como escrever commits](https://www.conventionalcommits.org/pt-br/v1.0.0/)