import React from "react";
import { StatusBar } from 'expo-status-bar';
<<<<<<< HEAD
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

=======
import styled from 'styled-components/native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Veiculos from './src/pages/Veiculos';
>>>>>>> b7471d7973b585d9181bb28061eed2b5553cfd6b
import Login from './src/pages/Login';
import Veiculos from './src/pages/Veiculos';
import Cadastro from './src/pages/Cadastro';
import Entrada from './src/pages/Entrada';
import Saida from './src/pages/Saida';

<<<<<<< HEAD
const Stack = createNativeStackNavigator();
=======

const RootStack = createNativeStackNavigator({
  initialRouteName: "Home",
screens: {
  Home: Login,
  Cadastro: Cadastro,
  Entrada: Entrada,
  Saida: Saida,
  Veiculos: Veiculos
}  
})

const Navigation = createStaticNavigation(RootStack)



const ContainerApp = styled.SafeAreaView`
flex: 1;
`
>>>>>>> b7471d7973b585d9181bb28061eed2b5553cfd6b

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden />
<<<<<<< HEAD
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Veiculos" component={Veiculos} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Entrada" component={Entrada} />
        <Stack.Screen name="Saida" component={Saida} />
      </Stack.Navigator>
    </NavigationContainer>
=======
      <Navigation />
    </ContainerApp>
>>>>>>> b7471d7973b585d9181bb28061eed2b5553cfd6b
  );
}
