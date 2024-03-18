import { View, Text, Image } from "react-native"
import { HeaderStyles }      from "./HeaderStyles"

export const Header: React.FC = ()=>{

    return(
        
        <View style={HeaderStyles.header}>
            
            <View style={HeaderStyles.viewTitle}>

                <Text style={HeaderStyles.text}>Mustache</Text>

                <Image 
                    source={require('../../assets/LogoMM.png')}
                    style={HeaderStyles.image}
                />

                <Text style={HeaderStyles.text}>Moovies</Text>

            </View>

            <View style={HeaderStyles.viewSubtitle}>

                <Text style={HeaderStyles.subtitle}>As melhores indicações de filmes</Text>

            </View>



        </View>
    )
}