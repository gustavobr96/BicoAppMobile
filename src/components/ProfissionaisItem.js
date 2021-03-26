import React from 'react';
import styled from 'styled-components/native';

import Stars from '../components/Stars';


const Area = styled.TouchableOpacity`
    background-color: #FFFFFF;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 15px;
    flex-direction: row;
`;

const Avatar = styled.Image`
    width: 88px;
    height: 88px;
    border-radius: 20px;
`;

const InfoArea = styled.View`
    margin-left: 20px;
    justify-content: space-between;
`;

const UserProfissao = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;
const UserName = styled.Text`
    font-size: 17px;
    margin-bottom: 10px;
`;
const SeeProfileButton = styled.View`
    width: 85px;
    height: 26px;
    border: 1px solid #140054;
    border-radius: 10px;
    align-items: center;
`;

const SeeProfileButtonText = styled.Text`
    font-size: 13px;
    color: #140054;
`;

export default ({data}) => {
    return (
       <Area>
         <Avatar source={{uri: data.avatar}}/>
         <InfoArea>
             <UserProfissao>{data.cargo}</UserProfissao>
             <UserName>{data.name}</UserName>
             <Stars stars={data.stars} showNumber={true}/>
                
             <SeeProfileButton>
                 <SeeProfileButtonText>Ver Perfil</SeeProfileButtonText>
             </SeeProfileButton>
         </InfoArea>
       </Area>
    );
}