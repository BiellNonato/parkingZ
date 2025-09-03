import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/Login/Login';
import styled from 'styled-components/native';


const ContainerApp = styled.safeAreaView`
flex: 1;
`

export default function App() {
  return (
   <ContainerApp>
    <StatusBar hidden/>
    <Login/>
   </ContainerApp>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
