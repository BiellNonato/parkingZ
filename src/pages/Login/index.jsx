import React, { useState } from "react";
import { Alert } from "react-native";
import { LoginContainer, Titulo, Imagem, Subtittle, InputEmail, InputSenha, InputContainer, Button, TitleButton, IconsContainer, Line, SocialIcons, Image } from "./style";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleLogin() {
    if (!email || !senha) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    try {
      // Substitua pela URL do seu MockAPI
      const response = await fetch("https://68ebe9a476b3362414cf0a7f.mockapi.io/estacionamento/users");
      const usuarios = await response.json();

      const usuarioEncontrado = usuarios.find(
        (u) => u.email === email && u.senha === senha
      );

      if (usuarioEncontrado) {
        Alert.alert("Sucesso", "Login realizado com sucesso!");
        navigation.navigate("Veiculos");
      } else {
        Alert.alert("Erro", "Email ou senha incorretos.");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Não foi possível conectar à API.");
    }
  }

  return (
    <LoginContainer>
      <Imagem source={require('../../assets/gojo.png')} />
      <Titulo>ParkingZ</Titulo>
      <Subtittle>Login</Subtittle>
      <InputContainer>
        <InputEmail placeholder="Email:" value={email} onChangeText={setEmail} />
        <InputSenha placeholder="Senha:" secureTextEntry value={senha} onChangeText={setSenha} />
      </InputContainer>
      <Button onPress={handleLogin}><TitleButton>Entrar</TitleButton></Button>
      <IconsContainer>
        <SocialIcons><Image source={require('../../assets/facebook.png')} /></SocialIcons>
        <SocialIcons><Image source={require('../../assets/instagram.png')} /></SocialIcons>
        <SocialIcons><Image source={require('../../assets/x.png')} /></SocialIcons>
      </IconsContainer>
      <Line />
    </LoginContainer>
  )
}
