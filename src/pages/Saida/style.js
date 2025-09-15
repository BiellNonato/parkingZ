import styled from "styled-components/native";

export const SaidaContainer = styled.View`
flex: 1;
gap: 20;
background-color: black;
`

export const Image = styled.Image`
justify-self: center;
align-self: center;
width: 250;
height: 300;
margin-top: 50;
border-radius: 30px;
border-top-left-radius: 60px;
`
export const Title = styled.Text`
justify-self: center;
align-self: center;
font-size: 30;
color: white;

`

export const Subtitle = styled.Text`
justify-self: center;
align-self: center;
font-size: 20;
color: white;
`
export const InputSaida = styled.TextInput`
justify-self: center;
align-self: center;
border-radius: 10px;
width: 292;
height: 41;
background-color:  #D9D9D9;
color: black;
`

export const Button = styled.TouchableOpacity`
margin-top: 30px;
justify-self: center;
align-self: center;
border-radius: 10px;
width: 120;
height: 41;
background-color:  #D9D9D9;
`
export const TitleButton = styled.Text`
margin-top: 8px;
justify-self: center;
align-self: center;
font-size: 15;
color: black;
`