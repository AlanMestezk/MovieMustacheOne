import { FlatList, Text, View }  from 'react-native';
import { GlobalStyle }           from './src/styles/GlobalStyles';
import { apiConfig }             from './src/services/api';
import { useEffect, useState }   from 'react';
import { Filmes }                from './src/components/filmes';
import { Header }                from './src/components/header';

export default function App() {

  const [filmes, setFilmes] = useState<string[] | any>()

  useEffect(
    ()=>{

      const fetchData = async ()=>{

        try {
          
          const response = await apiConfig.get('/r-api/?api=filmes')
          
          console.log(`Dados da api retornados com sucesso: ${response.data}`)

          setFilmes(response.data)

        } catch (error) {

          console.log(`Não foi possivel retornar os dados da api: ${error}`)
        }
      }

      fetchData()

    }, []
  )


  return (

    <View style={GlobalStyle.container}>

      <View>

        <Header/>

      </View>


      <FlatList
        data={filmes}
        keyExtractor={
          item => item.id.toString()
        }
        renderItem={
          ({item}) => <Filmes data={item}/>
        }
      />
      
    </View>
  );
}

