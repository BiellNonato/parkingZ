import { CadastroContainer,TitlleGuaraná,Image, SubTittleShaw } from "./style";

export default function Cadastro() {

    return (
     <CadastroContainer>
        <Image source={require('../../assets/hornet-hollow-knigh.png')}></Image>
        <TitlleGuaraná>ParkingZ</TitlleGuaraná>
        <SubTittleShaw>Cadastro</SubTittleShaw>
     </CadastroContainer>


    )

}