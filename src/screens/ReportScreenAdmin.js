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

  
  const verifyCA = ({p, ca, tipo}) => {
    if (p<=7 && p>0){
      if (tipo==='hembra'){
        if (ca>0.98){
          return 'green'
        } else if (ca>0.94 && ca<=0.98){
          return 'orange'
        } else if (ca<=0.94 || ca===null){
          return 'red'
        }
      } else if (tipo==='macho'){
        if (ca>1.00){
          return 'green'
        } else if (ca>0.95 && ca<=1.00){
          return 'orange'
        } else if (ca<=0.95 || ca===null){
          return 'red'
        }
      } else if (tipo==='mixto'){
        if (ca>0.99){
          return 'green'
        } else if (ca>0.95 && ca<=0.99){
          return 'orange'
        } else if (ca<=0.95 || ca===null){
          return 'red'
        }
      }
    } else if (p>7 && p<=14) {
      if (tipo==='hembra'){
        if (ca>1.35){
          return 'green'
        } else if (ca>1.22 && ca<=1.35){
          return 'orange'
        } else if (ca<=1.22 || ca===null){
          return 'red'
        }
      } else if (tipo==='macho'){
        if (ca>1.24){
          return 'green'
        } else if (ca>1.20 && ca<=1.24){
          return 'orange'
        } else if (ca<=1.20 || ca===null){
          return 'red'
        }
      } else if (tipo==='mixto'){
        if (ca>1.30){
          return 'green'
        } else if (ca>1.21 && ca<=1.30){
          return 'orange'
        } else if (ca<=1.21 || ca===null){
          return 'red'
        }
      }
    } else if (p>14 && p<=21) {
      if (tipo==='hembra'){
        if (ca>1.54){
          return 'green'
        } else if (ca>1.48 && ca<=1.54){
          return 'orange'
        } else if (ca<=1.48 || ca===null){
          return 'red'
        }
      } else if (tipo==='macho'){
        if (ca>1.39){
          return 'green'
        } else if (ca>1.34 && ca<=1.39){
          return 'orange'
        } else if (ca<=1.34 || ca===null){
          return 'red'
        }
      } else if (tipo==='mixto'){
        if (ca>1.47){
          return 'green'
        } else if (ca>1.41 && ca<=1.47){
          return 'orange'
        } else if (ca<=1.41 || ca===null){
          return 'red'
        }
      }
    } else if (p>21 && p<=28){
      if (tipo==='hembra'){
        if (ca>1.59){
          return 'green'
        } else if (ca>1.57 && ca<=1.59){
          return 'orange'
        } else if (ca<=1.57 || ca===null){
          return 'red'
        }
      } else if (tipo==='macho'){
        if (ca>1.47){
          return 'green'
        } else if (ca>1.44 && ca<=1.47){
          return 'orange'
        } else if (ca<=1.44 || ca===null){
          return 'red'
        }
      } else if (tipo==='mixto'){
        if (ca>1.54){
          return 'green'
        } else if (ca>1.51 && ca<=1.54){
          return 'orange'
        } else if (ca<=1.51 || ca===null){
          return 'red'
        }
      }
    } else if (p>28 && p<=35) {
      if (tipo==='hembra'){
        if (ca>1.69){
          return 'green'
        } else if (ca>1.64 && ca<=1.69){
          return 'orange'
        } else if (ca<=1.64 || ca===null){
          return 'red'
        }
      } else if (tipo==='macho'){
        if (ca>1.57){
          return 'green'
        } else if (ca>1.54 && ca<=1.57){
          return 'orange'
        } else if (ca<=1.54 || ca===null){
          return 'red'
        }
      } else if (tipo==='mixto'){
        if (ca>1.64){
          return 'green'
        } else if (ca>1.59 && ca<=1.64){
          return 'orange'
        } else if (ca<=1.59 || ca===null){
          return 'red'
        }
      }
    } else if (p>35 && p<=42) {
      if (tipo==='hembra'){
        if (ca>1.84){
          return 'green'
        } else if (ca>1.78 && ca<=1.84){
          return 'orange'
        } else if (ca<=1.78 || ca===null){
          return 'red'
        }
      } else if (tipo==='macho'){
        if (ca>1.70){
          return 'green'
        } else if (ca>1.65 && ca<=1.70){
          return 'orange'
        } else if (ca<=1.65 || ca===null){
          return 'red'
        }
      } else if (tipo==='mixto'){
        if (ca>1.77){
          return 'green'
        } else if (ca>1.71 && ca<=1.77){
          return 'orange'
        } else if (ca<=1.71 || ca===null){
          return 'red'
        }
      }
    } else if (p>42 && p<=49) {
      if (tipo==='hembra'){
        if (ca>1.98){
          return 'green'
        } else if (ca>1.92 && ca<=1.98){
          return 'orange'
        } else if (ca<=1.92 || ca===null){
          return 'red'
        }
      } else if (tipo==='macho'){
        if (ca>1.82){
          return 'green'
        } else if (ca>1.77 && ca<=1.82){
          return 'orange'
        } else if (ca<=1.77 || ca===null){
          return 'red'
        }
      } else if (tipo==='mixto'){
        if (ca>1.90){
          return 'green'
        } else if (ca>1.85 && ca<=1.90){
          return 'orange'
        } else if (ca<=1.85 || ca===null){
          return 'red'
        }
      }
    } else if (p>49 && p<=56) {
      if (tipo==='hembra'){
        if (ca>2.13){
          return 'green'
        } else if (ca>2.05 && ca<=2.13){
          return 'orange'
        } else if (ca<=2.05 || ca===null){
          return 'red'
        }
      } else if (tipo==='macho'){
        if (ca>1.95){
          return 'green'
        } else if (ca>1.89 && ca<=1.95){
          return 'orange'
        } else if (ca<=1.89 || ca===null){
          return 'red'
        }
      } else if (tipo==='mixto'){
        if (ca>2.04){
          return 'green'
        } else if (ca>1.98 && ca<=2.04){
          return 'orange'
        } else if (ca<=1.98 || ca===null){
          return 'red'
        }
      }
    } else {
      return 'red'
    }
  }


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
      console.log(registers) 

      registers.map((inform) => {
        if (verifyCA({ p: inform.edadGalera, ca: inform.ca, tipo: inform.tipoPollo }) === 'red') {
          setBottomValue((prevBottomValue) => prevBottomValue + 1);
        } else if (verifyCA({ p: inform.edadGalera, ca: inform.ca, tipo: inform.tipoPollo }) === 'green') {
          setTopValue((prevTopValue) => prevTopValue + 1);
        } else if (verifyCA({ p: inform.edadGalera, ca: inform.ca, tipo: inform.tipoPollo }) === 'orange') {
          setMiddleValue((prevMiddleValue) => prevMiddleValue + 1);
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
            registers.map((inform) => {; // Variable temporal para almacenar los valores actualizados)
            const resultP = verifyCA({ p: inform.edadGalera, ca: inform.ca, tipo: inform.tipoPollo });
            if (resultP !== undefined){
              return (
                <CardGaleraAdmin
                key={inform.idRegistro}
                galera={`Galera ${inform.idGalera}`}
                cantidadAlimento={inform.cantidadAlimento}
                pesado={inform.pesoMedido}
                decesos={inform.decesos}
                numberCA={inform.ca}
                observaciones={inform.observaciones}
                ca={resultP}
                edad={inform.edadGalera}
                navigateToGaleras={navigateToGaleras}
              />              
              )
            }
            
            })
          )
        }
      </ScrollView>
    </View>
  );
}

export default ReportScreenAdmin;
