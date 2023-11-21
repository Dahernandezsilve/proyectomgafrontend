/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import {
  View, ScrollView, StatusBar,
} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import PropTypes from 'prop-types'
import {
  SelectDate,
  SelectOption, TrafficLight, CardGaleraAdmin, NoInfo, HeaderInformation, BottomTabNavigation,
} from '../../components'
import useApi from '../../hooks/useApi/useApi'
import styles from './styles'

const formatDate = dateString => {
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const formattedDate = `${year}-${month}-${day}`
  return formattedDate
}

const ReportScreenAdmin = (
  {
    navigation,
  },
) => {
  const lotes = ['1', '2', '3', '4']
  const [activeTab, setActiveTab] = useState(lotes[0])
  const [response, , handleRequest] = useApi()
  const [WorkersPerLote, setWorkersPerLote] = useState([])
  const [, setGaleras] = useState([])
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
  const [workers, setWorkers] = useState([])
  const [, setInfoWorkers] = useState()
  const [registers, setRegisters] = useState()
  const [registersActive, setRegistersActive] = useState(false)
  const [topValue, setTopValue] = useState(0)
  const [middleValue, setMiddleValue] = useState(0)
  const [bottomValue, setBottomValue] = useState(0)
  const [showNoInfo, setShowNoInfo] = useState(false)
  const [activeTabb, setActiveTabb] = useState(0)

  const handleDateChange = (event, date) => {
    setSelectedDate(date)
    setShowDatePicker(false)
  }

  const handleSelectDatePress = () => {
    setShowDatePicker(!showDatePicker)
  }

  const handleObtainGaleras = async () => {
    try {
      const response = await handleRequest('POST', '/galeras')
      // Haz algo con la respuesta aquí si es necesario
    } catch (error) {
      console.error('Error al obtener las galeras:', error)
    }
  }

  const handleObtainWorkers = async () => {
    try {
      // eslint-disable-next-line no-shadow
      const response = await handleRequest('GET', '/obtainTrabajadores')
      console.log('Trabajadores son:', response)
      // Haz algo con la respuesta aquí si es necesario
    } catch (error) {
      console.error('Error al obtener los trabajadores:', error)
    }
  }

  // eslint-disable-next-line no-shadow
  const handleObtainWorkersPerLote = async activeTab => {
    const body = {
      id_lote: parseInt(activeTab, 10),
    }

    console.log('body', body)

    // Realiza una solicitud POST a la ruta de Flask
    const response = await handleRequest('POST', '/wperLote', body)

    console.log('Mensaje:', response)
    console.log('Lote es: ', activeTab)

    // Si la respuesta es un array con al menos un elemento, mapea el nombre del trabajador
    if (Array.isArray(response.data) && response.data.length > 0) {
      const workerNames = response.data.map(worker => worker.nombre_trabajador)
      console.log('Nombres de los trabajadores:', workerNames)

      setWorkersPerLote(workerNames)
    } else {
      console.error('La respuesta no contiene datos de trabajadores válidos.')
    }
  }

  const handleObtainRegistersDate = (dateElected, optionSelected, tabActive) => {
    console.log('Response: ', response)
    if (dateElected.length !== 0) {
      const answer = formatDate(dateElected)
      if (optionSelected !== null && optionSelected !== undefined) {
        if (optionSelected.nombre !== 'No seleccionar') {
          handleRequest('POST', '/obtainRegistersDate', { date: answer, idTrabajador: optionSelected.idTrabajador, idLote: tabActive })
          setRegistersActive(true)
        }
        if (optionSelected.nombre === 'No seleccionar') {
          handleRequest('POST', '/obtainRegistersDate', { date: answer, idLote: tabActive })
          setRegistersActive(true)
        }
      } else {
        handleRequest('POST', '/obtainRegistersDate', { date: answer, idLote: tabActive })
        setRegistersActive(true)
      }
    }
  }

  const navigateToGaleras = async () => {
    navigation.navigate('Creacion')
  }

  const verifyCA = ({ p, ca, tipo }) => {
    if (ca === 0 || ca === null || ca < 0) {
      return 'gray'
    }

    const thresholds = {
      hembra: [
        [0.98, 0.94],
        [1.35, 1.22],
        [1.54, 1.48],
        [1.59, 1.57],
        [1.84, 1.78],
        [1.98, 1.92],
        [2.13, 2.05],
      ],
      macho: [
        [1.00, 0.95],
        [1.24, 1.20],
        [1.39, 1.34],
        [1.47, 1.44],
        [1.70, 1.65],
        [1.82, 1.77],
        [1.95, 1.89],
      ],
      mixto: [
        [0.99, 0.95],
        [1.30, 1.21],
        [1.47, 1.41],
        [1.54, 1.51],
        [1.77, 1.71],
        [1.90, 1.85],
        [2.04, 1.98],
      ],
    }

    const index = Math.floor((p - 1) / 7)

    if (index < 0 || index >= thresholds[tipo].length) {
      return 'red'
    }

    const [greenThreshold, orangeThreshold] = thresholds[tipo][index]

    if (ca > greenThreshold) {
      return 'green'
    } if (ca > orangeThreshold) {
      return 'orange'
    }
    return 'red'
  }

  useEffect(() => {
    if (response.data !== undefined && response.data !== null) {
      if (typeof response.data.ca !== 'undefined') {
        setGaleras(response.data)
      }
      if (Array.isArray(response.data) && response.data.length > 0 && 'nombre' in response.data[0]) {
        setWorkers(response.data)
        setInfoWorkers(response.data)
      }
      if (registersActive && response.data.length === 0) {
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
  }, [])

  useEffect(() => {
    handleObtainWorkersPerLote(activeTab)
  }, [activeTab])

  useEffect(() => {
    setTopValue(0)
    setBottomValue(0)
    setMiddleValue(0)
    handleObtainRegistersDate(selectedDate, selectedOption, activeTab)
  }, [selectedDate, selectedOption, activeTab])

  useEffect(() => {
    if (response.data !== undefined && response.data !== null) {
      if (Array.isArray(response.data) && response.data.length > 0 && 'cantidadAlimento' in response.data[0]) {
        registers.map(inform => {
          if (verifyCA({ p: inform.edadGalera, ca: inform.ca, tipo: inform.tipoPollo }) === 'red') {
            setBottomValue(prevBottomValue => prevBottomValue + 1)
          } else if (verifyCA({ p: inform.edadGalera, ca: inform.ca, tipo: inform.tipoPollo }) === 'green') {
            setTopValue(prevTopValue => prevTopValue + 1)
          } else if (verifyCA({ p: inform.edadGalera, ca: inform.ca, tipo: inform.tipoPollo }) === 'orange') {
            setMiddleValue(prevMiddleValue => prevMiddleValue + 1)
          }
          return null
        })
      }
    }
  }, [registers])

  useEffect(() => {
    setShowNoInfo(registers === undefined || registers.length === 0)
  }, [registers])

  const RenderContentRegisters = () => {
    if (showNoInfo) {
      return <NoInfo info="No hay información disponible" />
    }

    if (Array.isArray(registers) && registers.length > 0) {
      return (
        <>
          {registers.map(inform => {
            const params = { p: inform.edadGalera, ca: inform.ca, tipo: inform.tipoPollo }
            const resultP = verifyCA(params)
            const caValue = inform.ca === null || inform.ca === 0 ? 'gray' : resultP

            if (resultP !== undefined) {
              return (
                <CardGaleraAdmin
                  key={`${inform.idGalera} ${inform.edad}`}
                  ca={caValue}
                  msgCA="C.A: "
                  numberCA={inform.ca}
                  customValues={{
                    galera: `Galera ${inform.idGalera}`,
                    cantidadAlimento: `${inform.cantidadAlimento} qq`,
                    pesado: `${inform.pesoMedido} lbs`,
                    decesos: inform.decesos,
                    edad: `${inform.edadGalera} días`,
                    observaciones: inform.observaciones,
                    navigateToGaleras,
                  }}
                  customTitles={['Identificador:', 'Alimento:', 'Peso (Pollos):', 'Muertes:', 'Edad:', 'Observaciones:']}
                />
              )
            }

            return null
          })}
        </>
      )
    }

    return null
  }

  const tabs = [
    {
      label: 'Informe', route: 'Home', icon: 'ios-home', method: 'Ionicons',
    },
    {
      label: 'Medición', route: 'Administrador', icon: 'new-message', method: 'Entypo',
    },
    {
      label: 'Granja', route: 'Crear galera', icon: 'book', method: 'Entypo',
    },
    {
      label: 'Personal', route: 'Mi personal', icon: 'people-alt', method: 'MaterialIcons',
    },
  ]

  // const [activeTabb, setActiveTabb] = useState(0)

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="#fff" />
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <HeaderInformation
        title="Informe"
        lotes={lotes}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        showLote
        navigation={navigation}
        shouldNavigate={false}
      />
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.scrollabe}>
          <View style={styles.rowContainer}>
            <View style={{ flexDirection: 'column' }}>
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
              <SelectOption
                selectedOption={selectedOption}
                options={WorkersPerLote}
                setSelectedOption={setSelectedOption}
                activeTab={activeTab}
              />
            </View>
            <TrafficLight
              topValue={topValue} // Valor para el cuadro verde
              middleValue={middleValue} // Valor para el cuadro naranja
              bottomValue={bottomValue}
            />
          </View>
          <RenderContentRegisters />
        </ScrollView>
      </View>
      <View style={styles.bottomTabNavigator}>
        <BottomTabNavigation
          activeTab={activeTabb}
          // setActiveTab={setActiveTabb}
          tabs={tabs}
          navigation={navigation}
        />
      </View>
    </View>
  )
}

ReportScreenAdmin.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
}

export default ReportScreenAdmin
