import React from 'react';
import styled from 'styled-components/native';

const InputArea =  styled.View `
    width: 100%;
    height: 60px;
    flex-direction: row;
    border-radius: 30px;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
    background-color: #a6c1e8;
`;

const Input = styled.TextInput`
   flex:1;
   font-size: 16px;
   color: #140054;
   margin-left:10px;

`;


export default ({IconSvg, placeholder,value,onChangeText,password}) => {
   return(
       <InputArea>
         <IconSvg width="24" height="24" fill="#140054"/>
         <Input
             placeholder={placeholder}
             placeholderTextColor="#140054"
             value={value}
             onChangeText={onChangeText}
             secureTextEntry={password}
         />
       </InputArea>
   );
}