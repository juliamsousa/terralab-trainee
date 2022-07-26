![react-native logo](https://reactnative.dev/img/logo-og.png)
# React Native: utilizando e criando Hooks

## Conteúdo das aulas

### Módulo 1 - Projeto

- O que é React Native CLI:
        O React Native CLI é a interface de linha de comando do React Native puro. Command Line Interface é como um programa, mas no terminal. Usando o CLI não teremos as mesmas facilidades do Expo, como o ambiente simplificado, pois teremos que gerar os arquivos nativos direto na nossa máquina.

- Como configurar o ambiente:
        Para que possamos programar com o React Native, tivemos que instalar alguns componentes e programas importantes em nossa máquina: o Node, o JDK, o Android Studio, as SDKs, o Xcode, entre outros.

- Como criar um Emulador ideal:
        Com o intuito de poder visualizar em tempo real nossa aplicação sendo alterada, tivemos de criar um emulador com especificações mínimas para produção de aplicativos - sempre pensando em espaço de disco e memória RAM dedicada.

- Como rodar um Projeto:
        Aprendemos os comandos necessários para rodar nosso projeto, assim como quais as importâncias dos arquivos criados na criação e, não menos importante, como alterar a tela mudando apenas o conteúdo do APP.js.


### Módulo 2 - Estados e ciclo de vida

- Produzir um Componente:
        Criando diferentes partes da tela separadamente, podemos controlá-las separadamente também. Começamos aprendendo como produzir o componente Topo com estilos distintos para cada Texto e imagens disponíveis.

- Criar um Mock:
        Simulando uma API, criamos um Mock para receber dados como se fosse um serviço externo. Dessa forma, podemos aprender a nos comunicar com uma API sem de fato estar utilizando uma!

- Salvar um Estado:
        Imaginando que nossos dados externos mudam, nossa aplicação tem que acompanhar as mudanças dos dados e renderizar na tela as tais mudanças. Para isso, aprendemos a criar um estado que se encarrega de mudar o componente na tela sempre que algum dos dados é alterado.

### Módulo 3 - Hooks
- Modificar a lista de produtores do app Orgs:
Aprendemos o que são os Hooks, uma nova adição do React Native que nos permite a fazer ações de classe dentro dos componentes de função. Vimos um exemplo de Hooks que é o UseEffect e como os componentes de função são mais recomendados. 

- Usar o State do Hook:
Aplicamos o Hook de useState para criar um estado na lista de produtores do app Orgs. 

- Criar uma lista de produtores:
No app Orgs, criamos uma lista de produtores. Renderizamos os textos da lista com o renderItem. Implementamos estilos para mostrar uma lista bem bonita no app!

- Estilizar a lista de produtores:
Estruturamos a lista, adicionando uma View. Depois inserimos as imagens dos produtores, com um accessibilityLabel para permitir que pessoas cegas possam usar o app! Aplicamos estilos de cor, margens, borda arredondada, alinhamento, distância, tamanho da fonte, sombra no cartão.

- Adicionar as estrelas para classificar produtores no App:
Criamos, na pasta src, o componente de estrelas que podem ser clicadas pelo usuário para avaliar os produtores. As propriedades foram a quantidade, tamanho etc. Aplicamos um estilo de tamanho e largura condicionais em função das propriedades das estrelas.

- Refatorar as estrelas:
Para diminuir o tamanho do código, organizamos e enxugamos o componente de estrelas.

### Módulo 4 - Avançando com Hooks
- Criar seu próprio Hook:
Aprendemos a criar um Hook personalizado para o nosso aplicativo, a fim de facilitar a reutilização da função em outros pontos do código.

- Utilizar o Hook Reducer:
Vimos como o useState pode complicar a criação de métodos complexos, portanto, para que não tenhamos problemas com funções extensas, usamos o useReducer, que simplifica lógicas extensas.

- Utilizar o Hook de Memória:
Com o useMemo, temos a possibilidade de escolher os estados que vão ser atualizados de acordo com o método, melhorando a performance do aplicativo (uma vez que ele não precisa recarregar todos os estados sempre que algum deles mudar).

### Materiais Adicionais

https://www.alura.com.br/artigos/como-fazer-a-migracao-do-expo-para-react-native-cli

https://www.alura.com.br/artigos/configurando-o-ambiente-react-native

https://pt-br.reactjs.org/docs/react-component.html

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort