import React,{useState, useEffect} from 'react';
import { View, Text, Button, Dimensions, ScrollView} from 'react-native';
import {
    CardAssignment, HeaderInformation
  } from '../../components'

import styles from './styles';
import useApi from '../../hooks/useApi/useApi'


const windowWidth = Dimensions.get('window').width

const GalleyAssignment = ({ navigation }) => {

  const submenu = ['Mi granja', 'Asignacion', 'Crear galera']
  const [activeTab, setActiveTab] = useState(submenu[1])

  const lotes = ['1', '2', '3', '4']
  const [verLotes, setLotes] = useState(lotes[0])
  const [response, , handleRequest] = useApi()
  const [galleysPerLote, setGalleysPerLote] = useState([]); // Estado para almacenar los datos de las galeras


  // eslint-disable-next-line no-shadow
  const handleObtainGalleysPerLote = async verLotes => {
    const body = {
      numLote: parseInt(verLotes, 10),
    }

    console.log('body', body)

    // Realiza una solicitud POST a la ruta de Flask
    const response = await handleRequest('POST', '/galeras', body)

    //console.log('Mensaje:', response)
    if (Array.isArray(response.data) && response.data.length > 0) {
      const galleysData = response.data.map(galley => ({
        numeroGalera: galley.numeroGalera,
        typeChicken: galley.typeChicken,
        existence: galley.existence
      }));
      //console.log('Datos de las galeras:');
      //console.log(galleysData);

      // Accede solo al número de galera
      const numerosGalera = galleysData.map(galley => galley.numeroGalera);
      //console.log('Números de Galera:');
      //console.log(numerosGalera);

      setGalleysPerLote(galleysData); // Asegúrate de tener una función setWorkersPerLote para establecer los datos en tu estado
    } 
    //console.log("Datos:", galleysPerLote)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        await handleObtainGalleysPerLote('1'); // Llama a la función con el valor de lote deseado
      } catch (error) {
        console.error('Error al obtener galeras:', error);
      }
    };
    fetchData(); // Llama a la función al montar el componente
  }, []); 

  const renderedGalleys = galleysPerLote.map((galley, index) => (
    <CardAssignment
      key={index}
      customValues={{
        galera: galley.numeroGalera,
        tipoPoblacion: galley.typeChicken,
        cantidadPollos: galley.existence.toString(),
      }}
      customTitles={['No. Galera:', 'Tipo de población:', 'Cantidad de pollos:']}
    />
  ));

  return (
    <>
      <HeaderInformation
        title="Granja"
        customTitles={['Mi granja', 'Asignacion', 'Crear galera']}
        lotes={submenu}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        showLote={false}
        navigation={navigation}
        shouldNavigate={true}
      />
      
        <View style={styles.rectangle}>
          <Text style={[styles.info, { fontSize: windowWidth * 0.055 }]}>Lote 1</Text>
        </View>
      
      <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={{ margin: 0, padding: 0 }}>

        {renderedGalleys}
      
          <Button
      title="Probar Obtención de Lotes"
      onPress={() => handleObtainGalleysPerLote('1')} // Pasa un valor de lote de prueba aquí
        />
      </ScrollView>
    </>
  );
};

export default GalleyAssignment;