import React, { useState, useRef, useCallback } from "react";
import { FlatList, Text, Alert, Animated, TouchableWithoutFeedback } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
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
  Card,
  TituloHeader,
  Overlay,
  ModalBox,
  TituloModal,
  SubTitulo,
  Botao,
  TextoBotao,
  Fechar,
  TextoFechar
} from "./style";

export default function Veiculos({ navigation }) {
  const [veiculos, setVeiculos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(300)).current;

  useFocusEffect(
    useCallback(() => {
      async function fetchVeiculos() {
        try {
          const res = await fetch("https://68ebe9a476b3362414cf0a7f.mockapi.io/estacionamento/Veiculos");
          const data = await res.json();
          setVeiculos(data);
        } catch (error) {
          console.error(error);
          Alert.alert("Erro", "Não foi possível carregar os veículos.");
        }
      }
      fetchVeiculos();
    }, [])
  );

  const openModal = () => {
    setModalVisible(true);
    Animated.timing(slideAnim, { toValue: 0, duration: 250, useNativeDriver: true }).start();
  };

  const closeModal = () => {
    Animated.timing(slideAnim, { toValue: 300, duration: 200, useNativeDriver: true }).start(() => setModalVisible(false));
  };

  const renderItem = ({ item }) => (
    <Card>
      <Row>
        <IconBox source={require("../../assets/placa.png")} />
        <Info>
          <Placa>{item.placa}</Placa>
          <Row>
            <CalendarIcon source={require("../../assets/calendario.png")} />
            <Data>{new Date(item.data).toLocaleString()}</Data>
          </Row>
        </Info>
      </Row>
      <Ionicons name="chevron-forward" size={20} color="#000" />
    </Card>
  );

  return (
    <Container>
      <TituloHeader>ParkingZ</TituloHeader>
      <Header>
        <MenuIcon onPress={openModal}>
          <Ionicons name="menu" size={28} color="white" />
        </MenuIcon>
        <Titulo>Lista de Veículos</Titulo>
      </Header>

      {veiculos.length === 0 ? (
        <Text style={{ textAlign: "center", marginTop: 20 }}>Nenhum veículo registrado</Text>
      ) : (
        <FlatList data={veiculos} keyExtractor={(item) => item.id} renderItem={renderItem} contentContainerStyle={{ paddingBottom: 20 }} />
      )}

      {modalVisible && (
        <TouchableWithoutFeedback onPress={closeModal}>
          <Overlay>
            <Animated.View style={{ transform: [{ translateY: slideAnim }] }}>
              <ModalBox>
                <TituloModal>Menu</TituloModal>
                <SubTitulo>Escolha uma opção</SubTitulo>

                <Botao onPress={() => { closeModal(); navigation.navigate("Entrada"); }}>
                  <TextoBotao>Entrada Veiculo</TextoBotao>
                </Botao>

                <Botao onPress={() => { closeModal(); navigation.navigate("Saida"); }}>
                  <TextoBotao>Saída Veiculo</TextoBotao>
                </Botao>

                <Botao onPress={() => { closeModal(); navigation.navigate("Cadastro"); }}>
                  <TextoBotao>Cadastro usuario</TextoBotao>
                </Botao>

                <Botao onPress={() => { closeModal(); navigation.navigate("Login"); }}>
                  <TextoBotao>Logout</TextoBotao>
                </Botao>

                <Fechar onPress={closeModal}>
                  <TextoFechar>Fechar</TextoFechar>
                </Fechar>
              </ModalBox>
            </Animated.View>
          </Overlay>
        </TouchableWithoutFeedback>
      )}
    </Container>
  );
}
