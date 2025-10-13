import styled from "styled-components/native";


export const Container = styled.View`
  flex: 1;
  background-color: #5d97c3;
`;

export const Header = styled.View`
  flex-direction: row;
  background-color: #3047c2;
  padding: 12px 16px;
  align-items: center;
  gap: 50px;
`;

export const MenuIcon = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
`;

export const TituloHeader = styled.Text`
  font-size: 30px;
  color: white;
  text-align: center;
  font-weight: bold;
  margin-bottom: 12px;
`;

export const Titulo = styled.Text`
  font-size: 20px;
  color: white;
  justify-self: center;
  align-self: center;
  font-family: monospace;
`;


export const Card = styled.View`
width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom-width: 1px;
  border-bottom-color: black;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  margin-vertical: 10px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconBox = styled.Image`
  width: 45px;
  height: 45px;
  margin-right: 12px;
`;

export const Info = styled.View``;

export const Placa = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: white;
  font-family: monospace;
`;

export const CalendarIcon = styled.Image`
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;

export const Data = styled.Text`
  font-size: 14px;
  color: white;
  font-family: monospace;
`;


export const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.6);
  justify-content: flex-end;
`;

export const ModalBox = styled.View`
  width: 100%;
  padding: 20px;
  background-color: #ffffff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const TituloModal = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 6px;
  text-align: center;
`;

export const SubTitulo = styled.Text`
  font-size: 16px;
  margin-bottom: 20px;
  text-align: center;
  color: #555;
`;

export const Botao = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px;
  margin-vertical: 6px;
  border-radius: 12px;
  background-color: #3047c2;;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
`;

export const TextoBotao = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
  margin-left: 8px;
`;

export const Fechar = styled.TouchableOpacity`
  margin-top: 10px;
  align-items: center;
`;

export const TextoFechar = styled.Text`
  color: #555;
  font-size: 14px;
`;
