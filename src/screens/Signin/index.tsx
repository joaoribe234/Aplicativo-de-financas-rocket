import React, {useContext} from 'react';
import { Container, Header, TitleWrapper, Title, SignInTitle, Fotter, FotterWrapper  } from './styles';
import AppleSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg';
import LogoSvg from '../../assets/logo.svg';
import { RFValue } from 'react-native-responsive-fontsize';
import { SigninSocialButton } from '../../components/SigninSocialButton';
import { useAuth } from '../../hooks/auth';

export function Signin(){
    const { user } = useAuth();
    console.log { user };
    return( 
        <Container>
        <Header> 
        <TitleWrapper> 
          <LogoSvg width={RFValue(120)} height={RFValue(68)}  />  
          <Title>Controle suas {'\n'} finançaas de forma {'\n'} muito simples </Title>     
         </TitleWrapper>
         <SignInTitle>Faça seu login  com {'\n'} contas abaixo</SignInTitle>
         </Header>
         <Fotter>
         <FotterWrapper>
         <SigninSocialButton title='entrar com o Google' svg={GoogleSvg}/>
         <SigninSocialButton title='entrar com Apple' svg={AppleSvg}/>
         </FotterWrapper>    
         </Fotter>
        </Container>
    )
}
