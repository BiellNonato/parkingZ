import React, { useState } from "react";
import { FlatList, Modal, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { 
  Container, 
  Header, 
  MenuIcon, 
  Titulo, 
  Row, 
  IconBox, 
  Info, 
  Placa, 
  CalendarIcon, 
  Data, 
  Card 
} from "./style";

import styled from "styled-components/native";

const veiculos = [
  { id: "1", placa: "NEI-0613", data: "28/04/2025 10:15" },
  { id: "2", placa: "LVN-8358", data: "28/04/2025 12:15" },
  { id: "3", placa: "LVN-6358", data: "28/04/2025 17:15" },
  { id: "4", placa: "LVN-6398", data: "28/04/2025 19:15" },
];

export default function Veiculos({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = ({ item }) => (
    <Card>
      <Row>
        <IconBox source={require("../../assets/placa.png")} />
        <Info>
          <Placa>{item.placa}</Placa>
          <Row>
            <CalendarIcon source={require("../../assets/calendario.png")} />
            <Data>{item.data}</Data>
          </Row>
        </Info>
      </Row>
      <Ionicons name="chevron-forward" size={20} color="#000" />
    </Card>
  );

  return (
    <Container>
      <Header>
        <MenuIcon onPress={() => setModalVisible(true)}>
          <Ionicons name="menu" size={28} color="#000" />
        </MenuIcon>
        <Titulo>lista de veiculos</Titulo>
      </Header>

      <FlatList
        data={veiculos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      {/* Modal */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <Overlay>
          <ModalBox>
            <TituloModal>Bem-vindo!</TituloModal>
            <SubTitulo>Escolha uma opção</SubTitulo>

            <Botao onPress={() => { setModalVisible(false); navigation.navigate("Login"); }}>
              <TextoBotao>Login</TextoBotao>
            </Botao>

            <Botao onPress={() => { setModalVisible(false); navigation.navigate("Cadastro"); }}>
              <TextoBotao>Cadastro</TextoBotao>
            </Botao>

            <Fechar onPress={() => setModalVisible(false)}>
              <TextoFechar>Fechar</TextoFechar>
            </Fechar>
          </ModalBox>
        </Overlay>
      </Modal>
    </Container>
  );
}