import { LoginContainer, Titulo, Imagem, Subtittle, InputEmail, InputSenha, InputContainer, Button, TitleButton, IconsContainer, Line, SocialIcons, Image } from "./style";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation()
  return (
    <LoginContainer>
      <Imagem source={require('../../assets/gojo.png')}></Imagem>
      <Titulo>ParkingZ</Titulo>
      <Subtittle>Login</Subtittle>
      <InputContainer>
        <InputEmail placeholder="Email:"></InputEmail>
        <InputSenha placeholder="Senha:"></InputSenha>
      </InputContainer>
      <Button>
        <TitleButton onPress={() => navigation.navigate("Veiculos")}>Entrar</TitleButton>
      </Button>
      <IconsContainer>
        <SocialIcons>
          <Image source={require('../../assets/facebook.png')}></Image>
        </SocialIcons>
        <SocialIcons> <Image source={require('../../assets/instagram.png')}></Image></SocialIcons>
        <SocialIcons> <Image source={require('../../assets/x.png')}></Image></SocialIcons>
      </IconsContainer>
      <Line></Line>
    </LoginContainer>

  )
}


