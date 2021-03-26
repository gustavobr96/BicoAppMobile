import AsyncStorage from '@react-native-community/async-storage';

const BASE_API = 'https://api.b7web.com.br/devbarber/api';


export default {
    checkToken: async (token) => {
        const req = await fetch(`${BASE_API}/auth/refresh`,{
            method: 'POST',
            headers:{
                 Accept: 'application/json',
                 'Content-Type' : 'application/json'
            },
            body: JSON.stringify({token})
        });
        const json = await req.json();
        return json;
    },
    signIn: async () => {
         const req = await fetch(`${BASE_API}/auth/login`,{
             method: 'POST',
             headers:{
                  Accept: 'application/json',
                  'Content-Type' : 'application/json'
             },
             body: JSON.stringify({email,password})
         });
         const json = await req.json();
         return json;
    },
    signUp: async (name,email, password) => {
        const req = await fetch(`${BASE_API}/user`,{
            method: 'POST',
            headers:{
                 Accept: 'application/json',
                 'Content-Type' : 'application/json'
            },
            body: JSON.stringify({name,email,password})
        });
        const json = await req.json();
        return json;
    },
    getProfissionais: async (lat=null, lng=null) =>{
        const token = await AsyncStorage.getItem('token');
        //const req =  await fetch(`${BASE_API}/profissionais?token=${token}`;
        console.log('teste');
        const req = 
             {
                data:
                [   
                  
                  {
                    id: 9,
                    avatar: "https://i.ibb.co/K2rCs9p/gustavo.png",
                    name: "Gustavo Barreto",
                    cargo: "Analista de Sistemas",
                    stars: "4.9"
                  },
                  
                  {
                    id: 8,
                    avatar: "https://i.ibb.co/tqpt7F7/well.png",
                    name: "Wellington Barea",
                    cargo: "Front-End",
                    stars: "4.9"

                  },
                  {
                    id: 4,
                    avatar: "https://i.ibb.co/Qvsx836/nagai.png",
                    name: "Bruno Nagai",
                    cargo: "Marceneiro",
                    stars: "4.9"

                  },

                  {
                    id: 1,
                    avatar: "https://i.ibb.co/6mdvbGm/denis.png",
                    name: "Denis Fernando",
                    cargo: "Desenvolvedor",
                    stars: "3.2"

                  },
                  {
                    id: 2,
                    avatar: "https://i.ibb.co/4TyQt5r/gabriel.png",
                    name: "Gabriel Souza",
                    cargo: "Desenvolvedor",
                    stars: "4.2"

                  }
                  ,
                  {
                    id: 3,
                    avatar: "https://i.ibb.co/sFyqDdk/junim.png",
                    name: "Junior Silva",
                    cargo: "Mecânico",
                    stars: "4.6"

                  }
                  ,
                 
            
                  {
                    id: 5,
                    avatar: "https://i.ibb.co/xJHzRK5/porco.png",
                    name: "Maike Pacanhella",
                    cargo: "Pintor",
                    stars: "2.2"

                  }
                  ,
                  {
                    id: 6,
                    avatar: "https://i.ibb.co/nBCDCFx/Screenshot-1.png",
                    name: "Danrley Crivelli",
                    cargo: "Encânador",
                    stars: "3.7"

                  }
                  ,
                  {
                    id: 7,
                    avatar: "https://i.ibb.co/vq9WZm1/tom.png",
                    name: "Everton Barreto",
                    cargo: "Funileiro",
                    stars: "4.1"

                  }
                  
                
               
                ],
                error: "",
                loc: "Santo Anastácio"

             }

        

        return req;
    }

};