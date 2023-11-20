import React, {
  useState, useCallback, useEffect, useContext,
} from 'react'
import {
  View, Button, Text, ScrollView,
} from 'react-native'
import PropTypes from 'prop-types'
import {
  BottomTabNavigation, HeaderCalculator, SliderComponentRefactor, DropdownMenu,
} from '../../components'
import styles from './styles'
import { GlobalContext } from '../../GlobalContext/GlobalContext'
import useApi from '../../hooks/useApi/useApi'

const Calculator = ({ navigation }) => {
  const lotes = []
  const {
    refresh, setRefresh,
  } = useContext(GlobalContext)
  const [activeTab, setActiveTab] = useState(lotes[1])
  const [pesado, setPesado] = useState(0)
  const [lastPesado, setLastPesado] = useState(0)
  const [alimento, setAlimento] = useState(0)
  const [activeTabb] = useState(1)
  const [response, , handleRequest] = useApi()
  const [galeras, setGaleras] = useState([])
  const [galerasNumbers, setGalerasNumbers] = useState([{ label: 'Seleccionar opción', numeroGalera: null }])
  const [selectedOption, setSelectedOption] = useState([{ label: 'Seleccionar galera' }])
  const [resultado, setResultado] = useState(0)

  const tabs = [
    {
      label: 'Informe', route: 'Home', icon: 'ios-home', method: 'Ionicons',
    },
    {
      label: 'Medición', route: 'Calculator', icon: 'new-message', method: 'Entypo',
    },
    {
      label: 'Granja', route: 'Crear galera', icon: 'book', method: 'Entypo',
    },
    {
      label: 'Personal', route: 'PersonalScreen', icon: 'people-alt', method: 'MaterialIcons',
    },
  ]

  const handleObtainGaleras = async () => {
    await handleRequest('GET', '/galerasWorker')
  }

  const handleObtainLastPesado = async () => {
    await handleRequest('POST', '/obtainInfoEnsayo', { id_gale: selectedOption[0].idGalera })
  }

  useEffect(() => {
    console.log('Toda', response)
    if (response?.data !== undefined) {
      const firstData = response.data
      if (firstData.length > 0) {
        if (firstData[0].idGalera !== undefined && firstData[0].idGalera !== null) {
          // eslint-disable-next-line no-plusplus
          for (let i = 0; i < firstData.length; i++) {
            firstData[i].loading = false
          }
          console.log(firstData)
          setGaleras(firstData)
          const infoList = firstData.map(galer => ({
            label: `Lote ${galer.idLote} - Galera ${galer.numeroGalera}`,
            numeroGalera: galer.numeroGalera,
            idLote: galer.idLote,
            idGalera: galer.idGalera,
          }))
          setGalerasNumbers([{ label: 'Seleccionar galera', numeroGalera: null }, ...infoList])
        }
        if (firstData[0].edad !== undefined && firstData[0].edad !== null) {
          // eslint-disable-next-line no-plusplus
          setLastPesado(firstData[0].pesado)
        }
        if (firstData[0] === 'Vacio') {
          setLastPesado(0)
        }
      }
      if (response.message === 'Esta vacia') {
        setGaleras([])
      }
    }
  }, [response])

  useEffect(() => {
    console.log('galeras', galeras)
  }, [galeras])

  useEffect(() => {
    console.log('lastPesado', lastPesado)
  }, [lastPesado])

  useEffect(() => {
    console.log('pesado', pesado)
  }, [pesado])

  useEffect(() => {
    console.log('alimento', alimento)
  }, [alimento])

  useEffect(() => {
    console.log('galerasNumber', galerasNumbers)
  }, [galerasNumbers])

  useEffect(() => {
    console.log('resultado', resultado)
  }, [resultado])

  useEffect(() => {
    if (galeras) {
      handleObtainGaleras()
    }
  }, [])

  useEffect(() => {
    if (refresh) {
      handleObtainGaleras()
      setRefresh(false)
    }
  }, [refresh])

  const handleCalcular = () => {
    const denominador = pesado - lastPesado
    if (denominador === 0) {
      console.error('Error: La resta de pesado - lastPesado es igual a cero.')
      setResultado(0)
    } else {
      const resultadoCalculado = alimento / denominador
      const resultadoConTresDecimales = parseFloat(resultadoCalculado.toFixed(3))
      setResultado(resultadoConTresDecimales)
    }
  }

  useEffect(() => {
    console.log('set', selectedOption)
    handleObtainLastPesado()
  }, [selectedOption])

  const handleSelect = useCallback(selected => {
    console.log(`Selected option: ${selected}`)
    // Puedes realizar acciones adicionales según la opción seleccionada
  }, [])

  return (
    <View style={styles.container1}>
      <HeaderCalculator
        title="Calcular un C.A."
        lotes={lotes}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <DropdownMenu
        options={galerasNumbers !== undefined ? galerasNumbers : [{ label: 'Nada' }]}
        onSelect={handleSelect}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <View style={styles.textContainer2}>
        <Text style={{ fontSize: 20 }}>{`Último pesado: ${lastPesado}`}</Text>
      </View>
      <ScrollView>
        <View style={styles.container2}>
          <SliderComponentRefactor
            title="Peso total de pollos: "
            minimumValue={0}
            maximumValue={200}
            step={1}
            medida="lbs"
            value={pesado}
            setValue={setPesado}
          />
          <SliderComponentRefactor
            title="Consumo de alimento: "
            minimumValue={0}
            maximumValue={100}
            step={1}
            medida="qq"
            value={alimento}
            setValue={setAlimento}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Calcular"
            style={{ borderRadius: 5 }}
            color="#2e4a85"
            // eslint-disable-next-line react/jsx-no-bind
            onPress={handleCalcular}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={{ fontSize: 30 }}>{`Resultado: ${resultado}`}</Text>
        </View>
      </ScrollView>
      <View style={styles.bottomTabNavigator}>
        <BottomTabNavigation
          activeTab={activeTabb}
          tabs={tabs}
          navigation={navigation}
        />
      </View>
    </View>

  )
}

Calculator.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}

export default Calculator
