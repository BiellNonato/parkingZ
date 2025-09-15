import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
// import Login from './src/pages/Login';
//import Cadastro from './src/pages/Cadastro';
// import Entrada from './src/pages/Entrada'
import Saida from './src/pages/Saida';


const ContainerApp = styled.SafeAreaView`
flex: 1;
`

export default function App() {
  return (
   <ContainerApp>
    <StatusBar hidden/>
    {/* <Login /> */}
    {/* <Cadastro/> */}
    {/* <Entrada/> */}
    <Saida/>
   </ContainerApp>
  );
}
