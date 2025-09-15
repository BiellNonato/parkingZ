import { CadastroContainer, TitlleGuaraná, Image, SubTittleShaw, InputNome, InputEmail, InputSenha, Button, TitleButton,InputContainer } from "./style";

export default function Cadastro() {

    return (
        <CadastroContainer>
            <Image source={require('../../assets/hornet-hollow-knigh.png')}></Image>
            <TitlleGuaraná>ParkingZ</TitlleGuaraná>
            <SubTittleShaw>Cadastro</SubTittleShaw>
            <InputContainer>
                <InputNome placeholder="Nome:"></InputNome>
                <InputEmail placeholder="Email:"></InputEmail>
                <InputSenha placeholder="Senha:"></InputSenha>
            </InputContainer>

            <Button>
                <TitleButton>Cadastrar</TitleButton>
            </Button>
        </CadastroContainer>


    )

}