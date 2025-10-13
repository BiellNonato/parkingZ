import React from "react";
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from './src/pages/Login';
import Veiculos from './src/pages/Veiculos';
import Cadastro from './src/pages/Cadastro';
import Entrada from './src/pages/Entrada';
import Saida from './src/pages/Saida';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Veiculos" component={Veiculos} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Entrada" component={Entrada} />
        <Stack.Screen name="Saida" component={Saida} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
