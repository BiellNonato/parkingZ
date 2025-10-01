import { FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
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
