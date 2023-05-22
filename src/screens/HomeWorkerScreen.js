import TextCard from "../components/TextCard"
import React, { useState, useEffect } from 'react'
import { View, ScrollView, StatusBar } from 'react-native'
import CardGalera from "../components/CardGalera"
import useApi from "../hooks/useApi/useApi"

const HomeWorkerScreen = ({ navigation }) => {
  const [response, loading, handleRequest] = useApi()
  const [galeras, setGaleras] = useState([])
  
  const handleObtainGaleras = () => {
    handleRequest('POST', '/galeras', { numLote: 20 })
    console.log('Respuesta', response.data)
  }

  const navigateToGaleras =  async () => {
    navigation.navigate('Creacion');
  };

  useEffect(() => {
    if(response.data === undefined || response.data === null) {
      console.log('No ha pasado')
    } else {
      setGaleras(response.data)
    }
  }, [response])


  useEffect(() => {
    handleObtainGaleras()    
  }, [])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#D3D3D3' }}>
      <StatusBar barStyle="light-content" backgroundColor="#fff" />
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView contentContainerStyle={{ alignItems: 'center', marginBottom: 15 }}>
        <TextCard number='10000'/>
        {
          galeras.map(galer => {
          if (parseFloat(galer.ca) > 4.9){
            return <CardGalera  key={galer.idGalera} galera={`Galera ${galer.numeroGalera}`} ca='red' navigateToGaleras={navigateToGaleras} />
          }

          if (parseFloat(galer.ca) < 2.6) {
            return <CardGalera  key={galer.idGalera} galera={`Galera ${galer.numeroGalera}`} ca='green' navigateToGaleras={navigateToGaleras} />
          }

          if (parseFloat(galer.ca) > 2.6 && galer.ca < 4.9) {
            return <CardGalera  key={galer.idGalera} galera={`Galera ${galer.numeroGalera}`} ca='orange' navigateToGaleras={navigateToGaleras} />
          }})
        } 
      </ScrollView>
    </View>
  );
}

export default HomeWorkerScreen