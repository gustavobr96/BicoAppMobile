import React, {useEffect, useContext} from 'react';
import {Container, LoadingIcon} from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import LogoInicial from '../../assets/logo.svg';
import {UserContext} from '../../contexts/UserContext';
import API from '../../Api';

export default () => {

    const navigation = useNavigation();
    const {dispatch: userDispatch } = useContext(UserContext);
    
    
    useEffect(()=> {
        const checkToken = async () => {
             const token = await AsyncStorage.getItem('token');
             if(token){
                 // validar token --> let res = await Api.checkToken(token);
                 //if(res.token){
                 if(token){
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

                 }else{
                   navigation.navigate('SignIn');
                 }

                 

             }else{
                 navigation.navigate('SignIn');
             }

        }
        checkToken();
    }, []);

    return (
       <Container>
          <LogoInicial width="100%" height="150"/>
          <LoadingIcon size="large" color="#FFFFFF"/>
       </Container>
    );
}