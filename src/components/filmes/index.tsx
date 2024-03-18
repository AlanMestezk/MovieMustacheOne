import { View, Text, Image,TouchableOpacity } from "react-native"
import { GlobalStyle }                        from "../../styles/GlobalStyles"
import { FilmesStyles }                       from "./FilmesStyles"
import { useState }                           from "react"

interface FilmsProps{

    data:{
        
        id     : number
        nome   : string,
        sinopse: string,
        foto   : string
    }
    
}

export const Filmes: React.FC<FilmsProps> = ({data})=>{

    const [showSinopse, setShowSinopse] = useState<boolean>(false)

    const handleShowSinopse = ()=>{

        setShowSinopse(!showSinopse)
    }

    return(

        <View style={FilmesStyles.container}>

            <Text style={FilmesStyles.nameFilm}>{data.nome}</Text>

            <Image
                source={{uri: data.foto}}
                style={FilmesStyles.image}
            />

            {
                showSinopse ?
                <Text style={FilmesStyles.sinope}>{data.sinopse}</Text> : ''
            }

            <TouchableOpacity style={FilmesStyles.btnSinope} onPress={handleShowSinopse}>
                <Text style={FilmesStyles.textBtn}>
                    {
                        showSinopse ?
                        "Esconder sinopse" : "Ver sinopse" 
                    }
                </Text>
                
            </TouchableOpacity>

        </View>
    )
}