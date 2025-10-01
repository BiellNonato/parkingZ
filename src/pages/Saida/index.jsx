import { Button, SaidaContainer, Image, InputSaida, Subtitle, Title, TitleButton, } from "./style";
import { useNavigation } from "@react-navigation/native";
export default function Saida() {
    const navigation = useNavigation()
    return (
        <SaidaContainer>
            <Image source={require('../../assets/Guardiões.png')}></Image>
            <Title>ParkingZ</Title>
            <Subtitle>Saida</Subtitle>
            <InputSaida placeholder="placa:"></InputSaida>
            <Button>
                <TitleButton onPress={() => navigation.navigate("Veiculos")}>Sair</TitleButton>
            </Button>
        </SaidaContainer>


    )
}