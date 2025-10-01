import { CadastroContainer, TitlleGuaraná, Image, SubTittleShaw, InputNome, InputEmail, InputSenha, Button, TitleButton, InputContainer, IconsContainer, SocialIcons, Line, CadastroImage } from "./style";
import { useNavigation } from "@react-navigation/native";
export default function Cadastro() {
   const navigation = useNavigation()
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
                <TitleButton onPress={() => navigation.navigate("Entrada")}>Cadastrar</TitleButton>
            </Button>
            <IconsContainer>
                <SocialIcons>
                    <CadastroImage source={require('../../assets/facebook.png')}></CadastroImage>
                </SocialIcons>
                <SocialIcons>
                    <CadastroImage source={require('../../assets/instagram.png')}></CadastroImage>
                </SocialIcons>
                <SocialIcons>
                    <CadastroImage source={require('../../assets/x.png')}></CadastroImage>
                </SocialIcons>
            </IconsContainer>
            <Line></Line>
        </CadastroContainer>


    )

}