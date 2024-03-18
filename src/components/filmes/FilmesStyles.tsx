import { StyleSheet } from "react-native";

export const FilmesStyles = StyleSheet.create(
    {
        container:{
            
            backgroundColor:'#398ef0cc',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 12,
            margin: 20
        },
        nameFilm:{
            fontSize: 22,
            fontWeight: 'bold',
            color: 'aliceblue',
            marginBottom: 12
        },
        image:{
            width: 340,
            height: 200,
            resizeMode: 'contain'
        },
        sinope:{
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 12,
            color: 'aliceblue',
            marginBottom: 12
        },
        btnSinope:{
            
            width: 300,
            height: 30,
            alignItems: 'center',
            justifyContent: 'center',
            margin: 15
        },
        textBtn:{
            color: 'aliceblue',
            fontWeight: 'bold',
            fontSize: 20,
        }
    }
)