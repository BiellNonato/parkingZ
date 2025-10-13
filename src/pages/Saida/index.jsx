import React, { useState } from "react";
import { Alert } from "react-native";
import { Button, SaidaContainer, Image, InputSaida, Subtitle, Title, TitleButton } from "./style";

export default function Saida({ navigation }) {
    const [placa, setPlaca] = useState("");

    async function handleSaida() {
        if (!placa) {
            Alert.alert("Erro", "Digite a placa do veículo.");
            return;
        }

        try {
            // Primeiro busca o veículo pelo ID ou placa
            const resGet = await fetch(`https://<SEU-MOCKAPI-URL>/veiculos`);
            const data = await resGet.json();
            const veiculo = data.find(v => v.placa.toUpperCase() === placa.toUpperCase());

            if (!veiculo) {
                Alert.alert("Erro", "Veículo não encontrado.");
                return;
            }

            // Deleta veículo
            const resDelete = await fetch(`https://68ebe9a476b3362414cf0a7f.mockapi.io/estacionamento/Veiculos/${veiculo.id}`, {
                method: "DELETE"
            });

            if (resDelete.ok) {
                Alert.alert("Sucesso", "Veículo saiu do estacionamento.");
                setPlaca("");
                navigation.navigate("Veiculos");
            } else {
                throw new Error("Falha ao remover veículo");
            }
        } catch (error) {
            console.error(error);
            Alert.alert("Erro", "Não foi possível remover o veículo.");
        }
    }

    return (
        <SaidaContainer>
            <Image source={require('../../assets/Guardiões.png')} />
            <Title>ParkingZ</Title>
            <Subtitle>Saída</Subtitle>
            <InputSaida
                placeholder="Placa:"
                value={placa}
                onChangeText={setPlaca}
            />
            <Button onPress={handleSaida}>
                <TitleButton>Sair</TitleButton>
            </Button>
        </SaidaContainer>
    );
}
