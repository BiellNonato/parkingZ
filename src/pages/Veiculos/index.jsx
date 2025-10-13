import React, { useState, useRef, useCallback } from "react";
import { FlatList, Text, Alert, Animated, TouchableWithoutFeedback } from "react-native";
import { Ionicons } from "@expo/vector-icons";
<<<<<<< HEAD
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
  const slideAnim = useRef(new Animated.Value(300)).current; // Modal fora da tela

  // Recarrega a lista sempre que a tela ganhar foco
  useFocusEffect(
    useCallback(() => {
      async function fetchVeiculos() {
        try {
          const res = await fetch(
            "https://68ebe9a476b3362414cf0a7f.mockapi.io/estacionamento/Veiculos"
          );
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
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true
    }).start();
  };

  const closeModal = () => {
    Animated.timing(slideAnim, {
      toValue: 300,
      duration: 200,
      useNativeDriver: true
    }).start(() => setModalVisible(false));
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
          <Ionicons name="menu" size={28} color="#000" />
        </MenuIcon>
        <Titulo>Lista de Veículos</Titulo>
      </Header>

      {veiculos.length === 0 ? (
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          Nenhum veículo registrado
        </Text>
      ) : (
        <FlatList
          data={veiculos}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}

      {/* Modal de Navegação Profissional */}
      {modalVisible && (
        <TouchableWithoutFeedback onPress={closeModal}>
          <Overlay>
            <Animated.View style={{ transform: [{ translateY: slideAnim }] }}>
              <ModalBox>
                <TituloModal>Menu</TituloModal>
                <SubTitulo>Escolha uma opção</SubTitulo>

                <Botao
                  onPress={() => {
                    closeModal();
                    navigation.navigate("Entrada");
                  }}
                >
                  <TextoBotao>🚗 Entrada Veiculo</TextoBotao>
                </Botao>

                <Botao
                  onPress={() => {
                    closeModal();
                    navigation.navigate("Saida");
                  }}
                >
                  <TextoBotao>🅿 Saída</TextoBotao>
                </Botao>

                <Botao
                  onPress={() => {
                    closeModal();
                    navigation.navigate("Cadastro");
                  }}
                >
                  <TextoBotao>📝 Cadastro</TextoBotao>
                </Botao>

                <Botao
                  onPress={() => {
                    closeModal();
                    navigation.navigate("Login");
                  }}
                >
                  <TextoBotao>🔒 Logout</TextoBotao>
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
=======
import { Container, Header, MenuIcon, Titulo, Row, IconBox, Info, Placa, CalendarIcon, Data, Card, TituloHeader, TitleButton, Button, Dowbar } from "./style";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const veiculos = [
    { id: "1", placa: "NEI-0613", data: "28/04/2025 10:15" },
    { id: "2", placa: "LVJ-8358", data: "28/04/2025 12:15" },
    { id: "3", placa: "LVG-6358", data: "28/04/2025 17:15" },
    { id: "4", placa: "LVH-6398", data: "28/04/2025 19:15" },
];


export default function Veiculos() {
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
            <Ionicons name="chevron-forward" size={20} color="#ffff" />
        </Card>
    );

    const [isOpen, setIsOpen] = useState(false)
    const navigation = useNavigation()
    return (
        <Container>
            <TituloHeader>ParkingZ</TituloHeader>
            <Header>
                <MenuIcon>

                    <Ionicons onPress={() => setIsOpen(!isOpen)} name="menu" size={29} color="#ffff" />

                    {isOpen && (

                        <Dowbar>
                            <Button onPress={() => navigation.navigate("Saida")}>
                                <TitleButton>Saida</TitleButton>
                            </Button>
                            <Button onPress={() => navigation.navigate("Entrada")}>
                                <TitleButton>Entrada</TitleButton>
                            </Button>
                        </Dowbar>


                    )
                    }
                </MenuIcon>

                <Titulo>lista de veiculos</Titulo>
            </Header>

            <FlatList
                data={veiculos}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
        </Container>
    );
}
