import React, {useState, useContext} from 'react';
import {Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage'

import {UserContext} from '../../contexts/UserContext';
import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold
} from './styles';

import Api from '../../Api';


import SignInput from '../../components/SignInput';

import AppLogo from '../../assets/logo.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg'

export default () => {
   const {dispatch: userDispatch } = useContext(UserContext);
   const navigation = useNavigation();

   const [emailField, setEmailField] = useState(''); 
   const [passwordField, setPasswordField] = useState(''); 
   
   const handleSignClick = async () => {
     if(emailField != '' && passwordField != ''){
         /*let json = await Api.signIn(emailField,passwordField);
           if(json.token){
            alert('DEU CERTO');
           }else{
              alert('E-mail e/ou senha errados!');
           }*/
           if(emailField == 'teste.com' && passwordField == '1234'){
               await AsyncStorage.setItem('token','82c7bae2-cb31-42f4-b9db-757f47c0c274');
               //await AsyncStorage.setItem('token',json.token);
               userDispatch({
                  type: 'setAvatar',
                  payload: {
                     //avatar: json.data.avatar
                     avatar: 'https://i.ibb.co/HqZxwJZ/pp.jpg'
                  }
               });

               navigation.reset({
                  routes:[{name:'MainTab'}]
               });
           }
           else{
             alert('E-mail e/ou senha errados!');
           }
     }else{
        alert("Preencha os campos!");
     }
   }


   const handleMessageButtonClick = () => {
      navigation.reset({
         routes: [{name: 'SignUp'}]
      });
   }

  

    return (
       <Container>
         <AppLogo  width="100%" height="150"/>

         <InputArea>
             <SignInput  
                IconSvg={EmailIcon}
                placeholder="Digite seu e-mail"
                value={emailField}
                onChangeText={t=>setEmailField(t)}
             />

             <SignInput  
                IconSvg={LockIcon}
                placeholder="Digite sua senha"
                value={passwordField}
                onChangeText={t=>setPasswordField(t)}
                password={true}
             
             />

             <CustomButton onPress={handleSignClick}>
                <CustomButtonText>LOGIN</CustomButtonText>
             </CustomButton>
         </InputArea>

         <SignMessageButton onPress={handleMessageButtonClick}>
              <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
              <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
         </SignMessageButton>

       </Container>
    );
}