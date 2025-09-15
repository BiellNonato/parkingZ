import { Button, SaidaContainer, Image, InputSaida, Subtitle, Title, TitleButton, } from "./style";

export default function Saida() {
    return (
        <SaidaContainer>
            <Image source={require('../../assets/Guardiões.png')}></Image>
            <Title>ParkingZ</Title>
            <Subtitle>Saida</Subtitle>
            <InputSaida placeholder="placa:"></InputSaida>
            <Button>
                <TitleButton>Sair</TitleButton>
            </Button>
        </SaidaContainer>


    )
}