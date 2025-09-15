import { Button, EntradaContainer, Image, InputEntrada, Subtitle, Title, TitleButton } from "./style";

export default function Entrada() {
  return (
    <EntradaContainer>
      <Image source={require('../../assets/sherma.png')}></Image>
      <Title>ParkingZ</Title>
      <Subtitle>Entrada</Subtitle>
      <InputEntrada placeholder="placa:"></InputEntrada>
      <Button>
        <TitleButton>Entrar</TitleButton>
      </Button>
    </EntradaContainer>


  )
}