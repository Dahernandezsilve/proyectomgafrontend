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
import SliderContainer from './src/components/SliderContainer';

function HomeScreen({ navigation }) {
  const [response, loading, handleRequest] = useApi()
  const [galeras, setGaleras] = useState([])
  
  const handleObtainGaleras = () => {
    handleRequest('POST', '/galeras', { numLote: 20 })
    console.log('Respuesta', response)
  }

  const navigateToGaleras =  async () => {
    navigation.navigate('Creacion');
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
  const [response, loading, handleRequest] = useApi()
  const [registro, setRegistro] = useState({
    cantidadAlimento: 200,
    decesos: 2,
    observaciones: "Some observations",
    idGalera: 20,
    pesado: 20.00
  })
  
  const handleRegistrar = (observacionesf) => {
    handleRequest('POST', '/makeRegister', { cant_alimento: registro.cantidadAlimento, deceso: registro.decesos, observacion: observacionesf, id_gale: registro.idGalera, pesa: registro.pesado })
    console.log(response);
  }
  
  return (
    <View style={{backgroundColor: '#d3d3d3'}}>
      <StatusBar barStyle="light-content" backgroundColor="#fff" />
      <StatusBar barStyle="dark-content" backgroundColor="#fff" /> 
      <View style={{ height: 2, width: '100%', backgroundColor: '#2B4985'}} />          
        <ScrollView contentContainerStyle={{ alignItems: 'center' }}>     
          <SliderContainer title='Cantidad de pollos pesados: ' minimumValue={20} maximumValue={100} step={1} medida='pollos' fixed='0'  />  
          <SliderContainer title='Cantidad de alimento proporcionado: '  minimumValue={0} maximumValue={20} step={1} medida='qq' fixed='0' registro={registro} setRegistro={setRegistro} info='cantidadAlimento' />
          <SliderContainer title='Peso medido: '  minimumValue={0} maximumValue={200} step={1} medida='lbs' fixed='0' />
          <SliderContainer title='Cantidad de decesos: '  minimumValue={0} maximumValue={3000} step={1} medida='pollos' fixed='0' registro={registro} setRegistro={setRegistro} info='decesos' />
          <CommentsComponent handleRegistrar={handleRegistrar} registro={registro}/>
          <ModalComponent />
        </ScrollView>
    </View>
  );
}

const Stack = createNativeStackNavigator();


function App() {

  const renderHeader = () => <HeaderGalley lotes={['Lote 1', 'Lote 2']}/>;
  const renderInformation = () => <HeaderInformation />

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{header: renderHeader}}
          />
        <Stack.Screen 
          name="Galeras"
          component={DetailsScreen}
          />
        <Stack.Screen
          name="Creacion"
          component={CreacionScreen}
          options={{header: renderInformation}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}




export default App;
