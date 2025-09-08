import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import Login from './src/pages/Login';


const ContainerApp = styled.SafeAreaView`
flex: 1;
`

export default function App() {
  return (
   <ContainerApp>
    <StatusBar hidden/>
    <Login />
   </ContainerApp>
  );
}
