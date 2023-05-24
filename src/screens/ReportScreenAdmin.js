import TextCard from "../components/TextCard"
import React, { useState, useEffect } from 'react'
import { View, ScrollView, StatusBar, Button, Text } from 'react-native'
import useApi from "../hooks/useApi/useApi"
import DateTimePicker from '@react-native-community/datetimepicker'
import SelectDate from "../components/SelectDate"
import SelectOption from "../components/SelectOption"
import TrafficLight from "../components/TrafficLight"
import CardGaleraAdmin from "../components/CardGaleraAdmin"
import NoInfo from "../components/NoInfo"

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
}

const ReportScreenAdmin = ({ navigation, activeTab , setActiveTab}) => {
  const [response, loading, handleRequest] = useApi()
  const [galeras, setGaleras] = useState([])
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
  const [workers, setWorkers] = useState([])
  const [inforWorkers, setInfoWorkers] = useState()
  const [registers, setRegisters] = useState();
  const [registersActive, setRegistersActive] = useState(false)
  const [topValue, setTopValue] = useState(0);
  const [middleValue, setMiddleValue] = useState(0);
  const [bottomValue, setBottomValue] = useState(0);


  const handleDateChange = (event, date) => {
    setSelectedDate(date);
    setShowDatePicker(false);
  }

  const handleSelectDatePress = () => {
    setShowDatePicker(!showDatePicker);
  };

  const handleObtainGaleras = () => {
    handleRequest('POST', '/galeras', { numLote: 20 })
  }

  const handleObtainWorkers = () => {
    handleRequest('GET', '/obtainTrabajadores')
  }

  const handleObtainRegistersDate = (dateElected, selectedOption, activeTab) => {
    if (dateElected.length !== 0){
      const answer = formatDate(dateElected)
      if (selectedOption !== null && selectedOption !== undefined) {
        if(selectedOption.nombre !== 'No seleccionar') {
          handleRequest('POST', '/obtainRegistersDate', { date: answer, idTrabajador: selectedOption.idTrabajador, idLote: activeTab})
          setRegistersActive(true)
          console.log(response)
        }
      } else { 
        console.log('lote activo',activeTab)
        handleRequest('POST', '/obtainRegistersDate', { date: answer, idLote: activeTab  })
        setRegistersActive(true)  
      }
    }
  }

  const navigateToGaleras =  async () => {
    navigation.navigate('Creacion');
  };

  useEffect(() => {
    console.log('lote', activeTab)
    if(response.data === undefined || response.data === null) {
    } else {
      if (typeof response.data.ca !== undefined) {
        setGaleras(response.data)
      } 
      if (Array.isArray(response.data) && response.data.length > 0 && 'nombre' in response.data[0]) {
        setWorkers(response.data)
        setInfoWorkers(response.data)
      }
      if (registersActive && response.data.length === 0){
        setRegisters()
        setRegisters(response.data)
        setRegistersActive(false)
      }
      if (Array.isArray(response.data) && response.data.length > 0 && 'cantidadAlimento' in response.data[0]) {
        setRegisters(response.data)
      }
    }
  }, [response])

  useEffect(() => {
    handleObtainGaleras()
    handleObtainWorkers()
    console.log('registers',registers)
  }, [])

  useEffect(() => {
    setTopValue(0)
    setBottomValue(0)
    setMiddleValue(0)
    handleObtainRegistersDate(selectedDate, selectedOption, activeTab)
  }, [selectedDate, selectedOption, activeTab])

  useEffect(() => {
    if(response.data === undefined || response.data === null) {
    } else {
      if (Array.isArray(response.data) && response.data.length > 0 && 'cantidadAlimento' in response.data[0]) {
      console.log('inform', registers)
      registers.map((inform) => {
        if (parseFloat(inform.ca) > 4.9) {
          setBottomValue((prevBottomValue) => prevBottomValue + 1);
        } else if (parseFloat(inform.ca) < 2.6) {
          setTopValue((prevTopValue) => prevTopValue + 1);
        } else if (parseFloat(inform.ca) > 2.6 && inform.ca < 4.9) {
          setMiddleValue((prevMiddleValue) => prevMiddleValue + 1);
        } else if (inform.ca === null) {
          setBottomValue((prevBottomValue) => prevBottomValue + 1);
        }
      });    
    }
  }
  }, [registers])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#ECECEC' }}>
      <StatusBar barStyle="light-content" backgroundColor="#fff" />
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView contentContainerStyle={{ alignItems: 'center', marginBottom: 15 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', zIndex: 2 }}>
          <View style={{ flexDirection: 'column'}}>
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
            <SelectOption selectedOption={selectedOption} options={workers} setSelectedOption={setSelectedOption} />
          </View>
          <TrafficLight
            topValue={topValue}  // Valor para el cuadro verde
            middleValue={middleValue}  // Valor para el cuadro naranja
            bottomValue={bottomValue}  // Valor para el cuadro rojo
          />
        </View>
        {
          registers === undefined || registers.length === 0 ? (
            <NoInfo info='No hay información disponible' />
          ) : (
            registers.map((inform) => {; // Variable temporal para almacenar los valores actualizados

              if (parseFloat(inform.ca) > 4.9) {
                return (
                  <CardGaleraAdmin
                    key={inform.idRegistro}
                    galera={`Galera ${inform.idGalera}`}
                    cantidadAlimento={inform.cantidadAlimento}
                    pesado={inform.pesoMedido}
                    decesos={inform.decesos}
                    numberCA={inform.ca}
                    observaciones={inform.observaciones}
                    ca='red'
                    navigateToGaleras={navigateToGaleras}
                  />
                );
              }

              if (parseFloat(inform.ca) < 2.6) {
                return (
                  <CardGaleraAdmin
                    key={inform.idRegistro}
                    galera={`Galera ${inform.idGalera}`}
                    ca='green'
                    cantidadAlimento={inform.cantidadAlimento}
                    pesado={inform.pesoMedido}
                    decesos={inform.decesos}
                    numberCA={inform.ca}
                    observaciones={inform.observaciones}
                    navigateToGaleras={navigateToGaleras}
                  />
                );
              }

              if (parseFloat(inform.ca) > 2.6 && inform.ca < 4.9) {
                return (
                  <CardGaleraAdmin
                    key={inform.idRegistro}
                    galera={`Galera ${inform.idGalera}`}
                    ca='orange'
                    cantidadAlimento={inform.cantidadAlimento}
                    pesado={inform.pesoMedido}
                    decesos={inform.decesos}
                    numberCA={inform.ca}
                    observaciones={inform.observaciones}
                    navigateToGaleras={navigateToGaleras}
                  />
                );
              }

              if (inform.ca === null) {
                return (
                  <CardGaleraAdmin
                    key={inform.idRegistro}
                    galera={`Galera ${inform.idGalera}`}
                    ca='red'
                    cantidadAlimento={inform.cantidadAlimento}
                    pesado={inform.pesoMedido}
                    decesos={inform.decesos}
                    numberCA={inform.ca}
                    observaciones={inform.observaciones}
                    navigateToGaleras={navigateToGaleras}
                  />
                );
              }
            })
          )
        }
      </ScrollView>
    </View>
  );
}

export default ReportScreenAdmin;
