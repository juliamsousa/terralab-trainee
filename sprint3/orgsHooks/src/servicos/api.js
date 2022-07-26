import produtores from '../mocks/produtores';
import topo from '../mocks/topo';

export const carregaProdutores = () => {
  // retorna produtores ordenados de acordo com menor distancia do cliente
  const compareFunction = (produtorA, produtorB) => {
    return produtorA.distancia - produtorB.distancia;
  };
  produtores.lista.sort(compareFunction);
  return produtores;
};

export const carregaTopo = () => {
  return topo;
};
