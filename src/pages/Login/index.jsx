import { LoginContainer, Titulo, Image, Subtittle, InputEmail, InputSenha, InputContainer, Button, TitleButton, IconsContainer, } from "./style";



export default function Login() {
  return (
    <LoginContainer>
      <Image source={require('../../assets/gojo.png')}></Image>
      <Titulo>ParkingZ</Titulo>
      <Subtittle>Login</Subtittle>
      <InputContainer>
        <InputEmail placeholder="Email:"></InputEmail>
        <InputSenha placeholder="Senha:"></InputSenha>
      </InputContainer>
      <Button>
        <TitleButton>Entrar</TitleButton>
      </Button>
    </LoginContainer>
    
  )
}


