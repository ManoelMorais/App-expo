import React, { useState } from "react";
import estilos from "./estiloitem";

import { Text, View } from "react-native";

import Botao from "../../../components/button"
import InputCampo from "../../../components/InputCampo";
export default function Item({ nome, preco, descrição }) {
  const [ quantidade, setQuantidade ] = useState(1);

  return (
    <>
      <View style={estilos.informacao}>
        <Text style={estilos.nome}>{nome}</Text>
        <Text style={estilos.descricao}>{descrição}</Text>
        <Text style={estilos.preco}>{preco}</Text>
      </View>
      <View style={estilos.carrinho}>
        <View>
          <View style={estilos.valor}>
            <Text style={estilos.descricao}>Quantidade:</Text>
            <InputCampo estilos={estilos.quantidade} valor={quantidade} acao={setQuantidade} />
          </View>
          <View style={estilos.valor}>
            <Text style={estilos.descricao}>Preço:</Text>
            <Text style={estilos.preco}>0</Text>
          </View>
        </View>
        <Botao  valor="Adicionar" acao={() => {}}/>
      </View>
      <View style={estilos.divisor} />
    </>
  );
}
