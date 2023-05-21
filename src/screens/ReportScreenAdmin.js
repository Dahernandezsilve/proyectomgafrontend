import TextCard from "../components/TextCard"
import React, { useState, useEffect } from 'react'
import { View, ScrollView, StatusBar, Button } from 'react-native'
import CardGalera from "../components/CardGalera"
import useApi from "../hooks/useApi/useApi"
import DateTimePicker from '@react-native-community/datetimepicker'
import SelectDate from "../components/SelectDate"
import SelectOption from "../components/SelectOption"

const ReportScreenAdmin = ({ navigation }) => {
  const [response, loading, handleRequest] = useApi()
  const [galeras, setGaleras] = useState([])
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [showDatePicker, setShowDatePicker] = useState(false) // Variable de estado para controlar la visibilidad del DateTimePicker
  const [selectedOption, setSelectedOption] = useState(null);

  
  const handleDateChange = (event, date) => {
    console.log("Fecha seleccionada:", date);
    setSelectedDate(date);
    setShowDatePicker(false); // Cerrar el DateTimePicker después de seleccionar una fecha
  }

  const handleSelectDatePress = () => {
    // Mostrar u ocultar el DateTimePicker al presionar el SelectDate
    setShowDatePicker(!showDatePicker);
  };

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
      <SelectDate onPress={handleSelectDatePress} selectedDate={selectedDate} />
        {showDatePicker && (
          <DateTimePicker
            value={selectedDate}
            mode="date"
            placeholder="Seleccionar fecha"
            format="DD-MM-YYYY"
            onChange={handleDateChange}
          />
        )}
      <SelectOption selectedOption={selectedOption} options={['Messi', 'El Chavo', 'Ramón']} setSelectedOption={setSelectedOption} />
      <TextCard number={10000} ></TextCard>
      {
        galeras.map(galer => {
          if (parseFloat(galer.ca) > 4.9) {
            return <CardGalera  key={galer.idGalera} galera={`Galera ${galer.numeroGalera}`} ca='red' navigateToGaleras={navigateToGaleras} />
          }
          if (parseFloat(galer.ca) < 2.6) {
            return <CardGalera  key={galer.idGalera} galera={`Galera ${galer.numeroGalera}`} ca='green' navigateToGaleras={navigateToGaleras} />
          }
          if (parseFloat(galer.ca) > 2.6 && galer.ca < 4.9) {
            return <CardGalera  key={galer.idGalera} galera={`Galera ${galer.numeroGalera}`} ca='orange' navigateToGaleras={navigateToGaleras} />
          }
        })}
      </ScrollView>
    </View>
  );
}

export default ReportScreenAdmin;
