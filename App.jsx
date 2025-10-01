import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Veiculos from './src/pages/Veiculos';
import Login from './src/pages/Login';
import Cadastro from './src/pages/Cadastro';
import Entrada from './src/pages/Entrada'
import Saida from './src/pages/Saida';


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

export default function App() {
  return (
    <ContainerApp>
      <StatusBar hidden />
      <Navigation />
    </ContainerApp>
  );
}
