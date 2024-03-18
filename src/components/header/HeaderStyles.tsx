import { StyleSheet } from "react-native";

export const HeaderStyles = StyleSheet.create(

    {
        header:{
            backgroundColor: '#398ef0cc',
            alignItems: 'center',
            justifyContent: 'center',
            padding:5,
            shadowColor: '#000000',
            shadowOffset: {
                width: 1,
                height: 1,
            },
            shadowOpacity: 0.10,
            shadowRadius: 3.84,
            elevation: 5,
            borderRadius: 10,
            margin: 6
        },
        viewTitle:{
            flexDirection: 'row',
        },
        text:{
            fontSize: 30,
            padding: 8,
            fontWeight: 'bold',
            color: 'aliceblue'
        },
        image:{
            width: 70,
            height: 90
        },
        viewSubtitle:{
            padding: 5
        },
        subtitle:{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'aliceblue'
        }
    }
)