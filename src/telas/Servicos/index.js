import React from "react";

import { Text, FlatList, StatusBar, View } from "react-native";
import Item from "./Item";

const servicos = [
  {
    id: 1,
    nome: 'Corte de Cabelo',
    preco: 'R$25.00',
    descrição: "Só horario marcado"
  },
  {
    id: 2,
    nome: 'Barba',
    preco: 'R$20.00',
    descrição: "Só horario marcado"
  },
  {
    id: 3,
    nome: 'Tatuagem',
    preco: 'R$50.00',
    descrição: "Só horario marcado"
  }
]

export default function Servicos() {
  return (
    <View>
        <Text>Serviços</Text>
        <FlatList
          data={servicos}
          removeClippedSubviews={false}
          renderItem={({ item }) => <Item {...item} />}
          keyExtractor={({ id }) => String(id)}
        />
      <StatusBar />
    </View>
  )
}
