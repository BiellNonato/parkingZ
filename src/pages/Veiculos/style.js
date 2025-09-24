import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #5d97c3;
`;


export const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #3047c2;
  padding: 12px 16px;
`

export const MenuIcon = styled.TouchableOpacity`

`

export const Titulo = styled.Text`
font-size: 20px;
color: #000;
font-family: monospace;
`
export const Card = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #5d97c3;
  padding: 12px 16px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`

export const IconBox = styled.Image`
  width: 45px;
  height: 45px;
  margin-right: 12px;
`

export const Info = styled.View``;

export const Placa = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000;
  font-family: monospace;
`

export const CalendarIcon = styled.Image`
  width: 16px;
  height: 16px;
  margin-right: 6px;
`

export const Data = styled.Text`
  font-size: 14px;
  color: #000;
  font-family: monospace;
`
