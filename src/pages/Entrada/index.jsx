import { Button, EntradaContainer, Image, InputEntrada, Subtitle, Title, TitleButton } from "./style";
import { useNavigation } from "@react-navigation/native";
export default function Entrada() {
  const navigation = useNavigation()
  return (
    <EntradaContainer>
      <Image source={require('../../assets/sherma.png')}></Image>
      <Title>ParkingZ</Title>
      <Subtitle>Entrada</Subtitle>
      <InputEntrada placeholder="placa:"></InputEntrada>
      <Button>
        <TitleButton onPress={() => navigation.navigate("Veiculos")}>Entrar</TitleButton>
      </Button>
    </EntradaContainer>


  )
}