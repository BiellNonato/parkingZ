import React, { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Button,
  EntradaContainer,
  Image,
  InputEntrada,
  Subtitle,
  Title,
  TitleButton
} from "./style";

export default function Entrada() {
  const navigation = useNavigation();
  const [placa, setPlaca] = useState("");

  async function handleEntrada() {
    if (!placa.trim()) {
      Alert.alert("Erro", "Digite a placa do veículo.");
      return;
    }

    try {
      const res = await fetch(
        "https://68ebe9a476b3362414cf0a7f.mockapi.io/estacionamento/Veiculos",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            placa: placa.toUpperCase(),
            data: new Date().toISOString()
          })
        }
      );

      if (res.ok) {
        Alert.alert("Sucesso", "Veículo registrado com sucesso!");
        setPlaca("");
        navigation.navigate("Veiculos");
      } else {
        throw new Error("Falha ao registrar veículo");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Não foi possível registrar o veículo.");
    }
  }

  return (
    <EntradaContainer>
      <Image source={require("../../assets/sherma.png")} />
      <Title>ParkingZ</Title>
      <Subtitle>Entrada</Subtitle>

      <InputEntrada
        placeholder="Placa:" placeholderTextColor={"black"} 
        value={placa}
        onChangeText={setPlaca}
        autoCapitalize="characters"
        maxLength={8}
      />

      <Button onPress={handleEntrada}>
        <TitleButton>Entrar</TitleButton>
      </Button>
    </EntradaContainer>
  );
}
