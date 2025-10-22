import React, { useState } from "react";
import { Alert } from "react-native";
import { CadastroContainer, TitlleGuaraná, Image, SubTittleShaw, InputNome, InputEmail, InputSenha, Button, TitleButton, InputContainer, IconsContainer, SocialIcons, Line, CadastroImage } from "./style";

export default function Cadastro({ navigation }) {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");


 
  async function handleCadastro() {
    if (!nome || !email || !senha) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    try {
     
      const response = await fetch("https://68ebe9a476b3362414cf0a7f.mockapi.io/estacionamento/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome, email, senha }),
      });

      if (response.ok) {
        Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
        navigation.navigate("Login");
      } else {
        Alert.alert("Erro", "Não foi possível cadastrar o usuário.");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Ocorreu um problema na conexão.");
    }
  }

  return (
    <CadastroContainer>
      <Image source={require('../../assets/hornet-hollow-knigh.png')}></Image>
      <TitlleGuaraná>ParkingZ</TitlleGuaraná>
      <SubTittleShaw>Cadastro</SubTittleShaw>
      <InputContainer>
        <InputNome placeholder="Nome:" placeholderTextColor={"black"} value={nome} onChangeText={setNome} />
        <InputEmail placeholder="Email:" placeholderTextColor={"black"}  value={email} onChangeText={setEmail} />
        <InputSenha placeholder="Senha:" placeholderTextColor={"black"}  secureTextEntry value={senha} onChangeText={setSenha} />
      </InputContainer>
      <Button onPress={handleCadastro}>
        <TitleButton>Cadastrar</TitleButton>
      </Button>
      <IconsContainer>
        <SocialIcons>
          <CadastroImage source={require('../../assets/facebook.png')}></CadastroImage>
        </SocialIcons>
        <SocialIcons>
          <CadastroImage source={require('../../assets/instagram.png')}></CadastroImage>
        </SocialIcons>
        <SocialIcons>
          <CadastroImage source={require('../../assets/x.png')}></CadastroImage>
        </SocialIcons>
      </IconsContainer>
      <Line></Line>
    </CadastroContainer>
  );
}
