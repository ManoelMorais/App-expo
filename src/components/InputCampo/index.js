import React from "react";

import { TextInput } from "react-native";

import estilosP from "./estilosCampo"

export default function InputCampo({ valor, acao, estilos }) {

  const atualiza = (novoValor, acaoRetorno) => {
    const verificaInteiro = novoValor.match(/^[0-9]$/);
    if (!verificaInteiro) return;

    const removeZeroEsquerda = novoValor.replace(/^0+/, "");
    acaoRetorno(removeZeroEsquerda)
  }

  const numeroEmTexto = String(valor)

  return <TextInput
    style={[estilosP.campo, estilos]}
    keyboardType="number-pad"
    selectTextOnFocus
    onChangeText={(novoValor) => { acao(novoValor) }}
    value={numeroEmTexto}
  />
}
