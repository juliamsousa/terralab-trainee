import React, {useReducer, useMemo} from 'react';
import {TouchableOpacity, View, Text, Image, StyleSheet} from 'react-native';
import Estrelas from '../componentes/Estrelas';

const distanciaMetros = d => {
  return `${d}m`;
};

export default function Produtor({nome, imagem, distancia, estrelas}) {
  const [selecionado, inverterSelecionado] = useReducer(
    selected => !selected,
    false,
  );

  // o hook useMemo faz com que uma funcao nao fique repetindo sem necessidade
  const distanciaTexto = useMemo(() => distanciaMetros(distancia), [distancia]);

  return (
    <TouchableOpacity style={estilos.cartao} onPress={inverterSelecionado}>
      <Image source={imagem} acessibilityLabel={nome} style={estilos.image} />
      <View style={estilos.informacoes}>
        <View>
          <Text style={estilos.nome}>{nome}</Text>
          <Estrelas
            quantidade={estrelas}
            editavel={selecionado}
            grande={selecionado}
          />
        </View>
        <Text style={estilos.distancia}>{distanciaTexto}</Text>
      </View>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  cartao: {
    backgroundColor: '#F6F6F6',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: 'row',
    // elevation é uma propriedade unica do android
    elevation: 4,
    // sombra para iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },
  informacoes: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16,
  },
  nome: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  distancia: {
    fontSize: 12,
    lineHeight: 19,
  },
});
