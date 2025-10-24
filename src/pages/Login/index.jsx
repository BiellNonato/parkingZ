import React, { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  LoginContainer,
  Titulo,
  Imagem,
  Subtittle,
  InputEmail,
  InputSenha,
  InputContainer,
  Button,
  TitleButton,
  RegisterLink,
  RegisterText,
  Line,

} from "./style";


export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleLogin() {
    if (!email.trim() || !senha.trim()) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    try {
      const response = await fetch(
        "https://68ebe9a476b3362414cf0a7f.mockapi.io/estacionamento/users"
      );
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
      <Imagem source={require("../../assets/gojo.png")} />
      <Titulo>ParkingZ</Titulo>
      <Subtittle>Login</Subtittle>

      <InputContainer>
        <InputEmail
          placeholder="Email:" placeholderTextColor={"black"}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <InputSenha
          placeholder="Senha:" placeholderTextColor={"black"}
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
      </InputContainer>

      <Button onPress={handleLogin}>
        <TitleButton>Entrar</TitleButton>
      </Button>

      <RegisterLink onPress={() => navigation.navigate("Cadastro")}>
        <RegisterText>Não tem conta? Cadastre-se</RegisterText>
      </RegisterLink>


      <Line />
    </LoginContainer>
  );
}
