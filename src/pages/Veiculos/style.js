import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #5d97c3;
`;


export const Header = styled.View`
  flex-direction: row;
  background-color: #3047c2;
  padding: 12px 16px;
  gap: 60;
`

export const MenuIcon = styled.TouchableOpacity`
width: 30;
`

export const TituloHeader = styled.Text`
justify-self: center;
align-self: center;
font-size: 30px;
padding: 10px;
color: white;
`

export const Titulo = styled.Text`
font-size: 20px;
color: white;
font-family: monospace;
`
export const Card = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom-width: 1px;
  border-bottom-color: black;
  justify-self: center;
`

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-self: center;
 
`

export const IconBox = styled.Image`
  width: 45px;
  height: 45px;
  margin-right: 12px;
`

export const Info = styled.View`
`;

export const Placa = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: white;
  font-family: monospace;
`

export const CalendarIcon = styled.Image`
  width: 16px;
  height: 16px;
  margin-right: 6px;
`

export const Data = styled.Text`
  font-size: 14px;
  color: white;
  font-family: monospace;
`

export const ImageBox = styled.Image`

`
