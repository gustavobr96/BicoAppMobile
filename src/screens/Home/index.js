import React, {useState, useEffect} from 'react';
import {Plataform, RefreshControl} from 'react-native';
import {Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {request, PERMISSIONS } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';

import {
    Container,
    Scroller,
    HeaderArea,

    HeaderTitle,
    SearchButtom,

    LocationArea,
    LocationFinder,
    LocationInput,

    LoadingIcon,
    ListArea

} from './styles';

import ProfissionaisItem from '../../components/ProfissionaisItem';

import SearchIcon from '../../assets/search.svg';
import MyLocationIcon from '../../assets/my_location.svg';
import Api from '../../Api';

export default () => {
    
    const navigation = useNavigation();

    const [locationText, setLocationText] = useState('');
    const [coords, setCoords] = useState(null);
    const [loading, setLoagind] = useState(false);
    const [list, setList] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const handleLocationFinder = async () => {
        setCoords(null);
        let result = await request(
            Platform.OS === 'ios' ?
              PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
              :
              PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
        );

        if(result == 'granted'){
 
            setLoagind(true);
            setLocationText('');
            setList([]);
   

            Geolocation.getCurrentPosition((info)=>{
               setCoords(info.coords);
               getProfissionais();
            });
        }
    }


    const getProfissionais = async () => {
         setLoagind(true);
         setList([]);

         let lat = null;
         let lng = null;
         
         if(coords){
             lat = coords.latitude;
             lng = coords.longitude;
         }

         let res = await Api.getProfissionais(lat,lng);
         console.log(res);
         if(res.error == ''){
            if(res.loc){
               setLocationText(res.loc);
            }
            setList(res.data);

         }else{
             alert("Erro: "+ res.error);
         }

         setLoagind(false);
    }

    useEffect(()=> {
        getProfissionais();
    },[]);

    const onRefresh = () => {
        setRefreshing(false);
        getProfissionais();

    }


    return (
        <Container>
            <Scroller refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
            }>
                  <HeaderArea>
                     <HeaderTitle numberOfLines={2}>Encontre um profissional agora</HeaderTitle>
                     <SearchButtom onPress={()=>navigation.navigate('Search')}>
                         <SearchIcon width="26" height="26" fill="#FFFFFF"/>
                     </SearchButtom>
                  </HeaderArea>

                  <LocationArea>
                      <LocationInput
                        placeholder="Onde você está ?"
                        placeholderTextColor="#FFFFFF"
                        value={locationText}
                        onChangeText={t=>setLocationText(t)}
                      />
                      <LocationFinder onPress={handleLocationFinder}>
                          <MyLocationIcon width="24" height="26" fill="#FFFFFF"/>
                      </LocationFinder>
                  </LocationArea>

                {loading && 
                  <LoadingIcon size="large" color="#FFFFFF" />
                }
                
                <ListArea>
                    {list.map((item, k)=>(
                        <ProfissionaisItem key={k} data={item}/>
                    ))}
                </ListArea>


            </Scroller>
        </Container>
    );
}
