import { CadastroContainer, TitlleGuaraná, Image, SubTittleShaw, InputNome, InputEmail, InputSenha, Button, TitleButton, InputContainer, IconsContainer, SocialIcons, Line, CadastroImage } from "./style";

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