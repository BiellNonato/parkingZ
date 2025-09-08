import { LoginContainer, Titulo,Image, Subtittle, InputEmail, InputSenha } from "./style";



export default function Login(){
    return(
        <LoginContainer>
          <Image source={require('../../assets/gojo.png')}></Image>
          <Titulo>ParkingZ</Titulo>
          <Subtittle>Login</Subtittle>
          <InputEmail>Email:</InputEmail>
          <InputSenha>Senha:</InputSenha>
        </LoginContainer>
    )
}


