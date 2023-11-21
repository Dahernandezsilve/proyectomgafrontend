import React, { useState, useEffect} from 'react';
import {
  View, Text, TextInput, ScrollView, TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import {Picker} from '@react-native-picker/picker';
import { CardGaleraAdmin, HeaderInformation, BottomTabNavigation } from '../../components';
import styles from './styles';
import useApi from '../../hooks/useApi/useApi'


const CreateGalleyScreen = ({ navigation }) => {
  const titles = ['Mi granja', 'Finalizar galera','Crear galera']
  const [activeTab, setActiveTab] = useState(titles[2]);
  const [response, , handleRequest] = useApi()
  const [lotes, setLotes] = useState()
  const [selectedLote, setSelectedLote] = useState('0');
  const [no_galera, setGaleraNumber] = useState('');
  const [existencia, setChickenCount] = useState('');
  const [tipo_pollo, setSelectedGender] = useState('macho');


  
  const handleObtainLotes = () => {
    try {
      // eslint-disable-next-line no-shadow
      handleRequest('GET', '/lObtain')
      // Haz algo con la respuesta aquí si es necesario
    } catch (error) {
      console.error('Error al obtener los trabajadores:', error)
    }
    }
    
    const handleCreateGalera = async () => {
        // Aquí puedes utilizar los valores de los estados para realizar alguna acción,
        // como mostrar una alerta con la información digitalizada.
        const galeraInfo = {
          id_lote: selectedLote,
          no_galera,
          existencia,
          tipo_pollo: tipo_pollo,
        };
    
        // Realiza una solicitud POST a la ruta de Flask
        const response = await handleRequest('POST', '/gcreate', galeraInfo);
        console.log('Mensaje:', response);

        // Puedes personalizar el formato del mensaje de alerta según tus necesidades.
        console.log('Información digitalizada:', galeraInfo);

            // Maneja la respuesta del servidor según sea necesario
        if (response.status === 200) {
            console.log('Finalización exitosa');
            // Deshabilita el botón "Finalizar" y habilita el botón "Iniciar"
            setIniciarDisabled(false);
        } else {
            console.error('Error al finalizar:', response.error);
        }
    };
    
   useEffect(() => {
        console.log('response', lotes)
  }, [lotes])

  useEffect(() => {
    if (response.data !== undefined && response.data !== null) {
      if (response.data.length > 0) {
          setLotes(response.data)
      }
    }
  }, [response])

  useEffect(() => {
    handleObtainLotes()
  }, [])
    
  const tabs = [
    {
      label: 'Informe', route: 'Home', icon: 'ios-home', method: 'Ionicons',
    },
    {
      label: 'Medición', route: 'Administrador', icon: 'new-message', method: 'Entypo',
    },
    {
      label: 'Granja', route: 'Finalizar galera', icon: 'book', method: 'Entypo',
    },
    {
      label: 'Personal', route: 'Mi personal', icon: 'people-alt', method: 'MaterialIcons',
    },
  ]
    
  const [activeTabb, setActiveTabb] = useState(2);

  const navigateToGaleras = async () => {
    navigation.navigate('Creacion');
  };

  return (
    <View style={styles.container}>
      <HeaderInformation
        title="Granja"
        customTitles={['Mi granja', 'Finalizar galera', 'Crear galera']}
        lotes={titles}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        showLote={false}
        navigation={navigation}
        shouldNavigate={true}
      />
      <ScrollView>
      
       <View style={styles.container}>
                  
        <View style={styles.formGroup}>
            <Text style={styles.label}>Seleccionar lote:</Text>
            {lotes && (
                <Picker
                selectedValue={selectedLote}
                onValueChange={(itemValue, itemIndex) => setSelectedLote(itemValue)}
                style={styles.picker}
                >
                {lotes
                    .sort((a, b) => a.idLote - b.idLote) // Ordena el array por la propiedad idLote
                    .map((lote) => (
                    <Picker.Item key={lote.idLote} label={`Lote ${lote.idLote}`} value={lote.idLote.toString()} />
                    ))}
                </Picker>
            )}
        </View>         

        <View style={styles.formGroup}>
        <Text style={styles.label}>No. galera:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese el número de galera"
          keyboardType="numeric"
          maxLength={2}
          value={no_galera}
          onChangeText={(text) => setGaleraNumber(text)}
        />
        </View>
                  
        <View style={styles.formGroup}>
            <Text style={styles.label}>Cantidad de pollos:</Text>
            <TextInput
            style={styles.input}
            placeholder="Ingrese la cantidad de pollos"
            keyboardType="numeric"
            maxLength={4}
            value={existencia}
            onChangeText={(text) => setChickenCount(text)}
            />
        </View>

        <View style={styles.formGroup}>
            <Text style={styles.label}>Seleccionar género:</Text>
            <Picker
            selectedValue={tipo_pollo}
            onValueChange={(itemValue, itemIndex) => setSelectedGender(itemValue)}
            style={styles.picker}
            >
            <Picker.Item label="Macho" value="macho" />
            <Picker.Item label="Hembra" value="hembra" />
            </Picker>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleCreateGalera}>
            <Text style={styles.buttonText}>Crear galera</Text>
        </TouchableOpacity>
          
        </View>
      </ScrollView>
      <View style={styles.bottomTabNavigator}>
        <BottomTabNavigation
          activeTab={activeTabb}
          setActiveTab={setActiveTabb}
          tabs={tabs}
          navigation={navigation}
        />
      </View>
    </View>
  );
};

CreateGalleyScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default CreateGalleyScreen;
