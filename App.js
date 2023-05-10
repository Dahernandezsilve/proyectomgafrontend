import * as React from 'react';
import { useState } from 'react';
import { Button, View, Text, ScrollView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SliderComponent} from './src/components/sliderComponent';
import { ModalComponent } from './src/components/modalComponent';
import CardGalera from './src/components/CardGalera';
import HeaderGalley from './src/components/headerGalley';
import HeaderInformation from './src/components/headerInformation';
import TextCard from './src/components/TextCard';
import CommentsComponent from './src/components/commentsComponent';
import useApi from './src/hooks/useApi/useApi'

function HomeScreen({ navigation }) {
  const [response, loading, handleRequest] = useApi()
  const [galeras, setGaleras] = useState([])
  
  const handleObtainGaleras = () => {
    handleRequest('POST', '/galeras', { numLote: 20 })
    console.log('Respuesta', response)
  }

  const navigateToGaleras =  async () => {
    navigation.navigate('Galeras');
    await handleObtainGaleras()
  };

  React.useEffect(() => {
    if(response.data === undefined || response.data === null) {
      console.log('No ha pasado')
    } else {
      setGaleras(response.data)
    }
  }, [response])


  React.useEffect(() => {
    handleObtainGaleras()    
  }, [])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#D3D3D3' }}>
      <StatusBar barStyle="light-content" backgroundColor="#fff" />
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <TextCard number='10000'/>
        {
          galeras.map(galer => <CardGalera  key={galer.idGalera} galera={`Galera ${galer.idGalera}`} ca='green' navigateToGaleras={navigateToGaleras} />)
        }
      </ScrollView>
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Ir a creacion de Galeras"
        onPress={() => navigation.navigate('Creacion')}
      />
    </View>
  );
}

function CreacionScreen({ navigation }) {
  return (
    <View style={{flex: 1, backgroundColor: '#d3d3d3'}}>
      <HeaderInformation/>
      <View style={{ height: 2, width: '100%', backgroundColor: '#2B4985' }} />
      <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
          <Button
            title="Ir a Home"
            onPress={() => navigation.navigate('Home')}
          />
          <View style={{flex: 4, backgroundColor: 'white', padding: 10,borderRadius: 10, width: '90%',height: 150,marginBottom:10}}>
          <Text>Cantidad de pollos pesados</Text>
        <SliderComponent></SliderComponent>
        </View>
        <View style={{flex: 4, backgroundColor: 'white', padding: 10,borderRadius: 10, width: '90%',height: 150,marginBottom:10}}>
          <Text>Cantidad de alimento proporcionado</Text>
          <SliderComponent></SliderComponent>
        </View>
        <View style={{flex: 4, backgroundColor: 'white', padding: 10,borderRadius: 10, width: '90%',height: 150,marginBottom:10}}>
          <Text>Peso medido</Text>
          <SliderComponent></SliderComponent>
        </View>
        <CommentsComponent/>
        <ModalComponent></ModalComponent>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();


function App() {

  const renderHeader = () => <HeaderGalley lotes={['Lote 1', 'Lote 2']}/>;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}
            options={{header: renderHeader}}
          />
        <Stack.Screen name="Galeras" component={DetailsScreen} />
        <Stack.Screen name="Creacion" component={CreacionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




export default App;
