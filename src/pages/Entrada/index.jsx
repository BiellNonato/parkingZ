import React, { useState } from "react";
import { Alert } from "react-native";
import { Button, EntradaContainer, Image, InputEntrada, Subtitle, Title, TitleButton } from "./style";
<<<<<<< HEAD

export default function Entrada({ navigation }) {
  const [placa, setPlaca] = useState("");

  async function handleEntrada() {
    if (!placa) {
      Alert.alert("Erro", "Digite a placa do veículo.");
      return;
    }

    try {
      // Substitua pelo seu MockAPI
      const res = await fetch("https://68ebe9a476b3362414cf0a7f.mockapi.io/estacionamento/Veiculos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ placa, data: new Date().toISOString() })
      });

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

=======
import { useNavigation } from "@react-navigation/native";
export default function Entrada() {
  const navigation = useNavigation()
>>>>>>> b7471d7973b585d9181bb28061eed2b5553cfd6b
  return (
    <EntradaContainer>
      <Image source={require('../../assets/sherma.png')} />
      <Title>ParkingZ</Title>
      <Subtitle>Entrada</Subtitle>
<<<<<<< HEAD
      <InputEntrada
        placeholder="Placa:"
        value={placa}
        onChangeText={setPlaca}
      />
      <Button onPress={handleEntrada}>
        <TitleButton>Entrar</TitleButton>
=======
      <InputEntrada placeholder="placa:"></InputEntrada>
      <Button>
        <TitleButton onPress={() => navigation.navigate("Veiculos")}>Entrar</TitleButton>
>>>>>>> b7471d7973b585d9181bb28061eed2b5553cfd6b
      </Button>
    </EntradaContainer>
  );
}
