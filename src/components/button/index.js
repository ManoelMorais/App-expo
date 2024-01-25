import React from "react";

import { Text, TouchableOpacity } from "react-native";
import funcaoEstilosP from './estilosButton'
export default function Botao({pequeno = false, invertido = false,  valor, acao, estilos}){
  const estilosP = funcaoEstilosP(pequeno, invertido)
  return <TouchableOpacity onPress={acao} style={[estilosP.botao, estilos]}>
    <Text style={estilosP.valor}>{valor}</Text>
  </TouchableOpacity>
}