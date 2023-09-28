import React from "react";
import useApi from '../../hooks/useApi/useApi'
import styles from './styles'
import { useState, useEffect} from "react";
import { View, StatusBar, ScrollView} from "react-native";
import { HeaderInformation, CardGaleraAdmin, NoInfo } from "../../components/";


const MeasurementsHistory = ( 
    {
        navigation,
    },
) => {

    const navigateToGaleras = async () => {
        navigation.navigate('Creacion')
    }

    const titles = ['Mis mediciones', 'Nueva medicion']
    const [activeTab, setActiveTab] = useState(titles[0])
    const [response, , handleRequest] = useApi()
    const [showNoInfo, setShowNoInfo] = useState(false)
    const [registers, setRegisters] = useState()

    const galera = ['25/09/2023', 'Esteban Escalante', 'Raul Vasquez']
    const cantidadAlimento = ['4356 7890', '9234 5632', '1208 6684']
    const pesado = ['Oratorio', 'Cuilapa', 'Barberena']
    const decesos = ['22', '22', '22']

    useEffect(() => {
        setShowNoInfo(registers === undefined || registers.length === 0)
    }, [registers])

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
                console.log("NADA");
                return null
              })}
            </>
          )
        }
    
        return null
      }

    return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="#fff" />
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <HeaderInformation
        title="Mediciones"
        lotes={titles}
        customTitles={titles}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        showLote={false}
        />
        <ScrollView>
        <View style={styles.container}>
            
        {galera.map((nombre, index) => (
            <CardGaleraAdmin
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                ca="#FFFFFF"
                msgCA=""
                numberCA={null}
                customValues={{
                galera: nombre,
                cantidadAlimento: cantidadAlimento[index],
                pesado: pesado[index],
                decesos: decesos[index],
                navigateToGaleras,

                }}
                customTitles={["Fecha\u00A0de\u00A0medicion", 'Lote', 'No. Galera', 'Cantidad\u00A0de\u00A0pollos', 'Tipo de poblacion', 'Edad de los pollos']}
            />
            ))}
        </View>
        </ScrollView>
    </View>
    )
}

export default MeasurementsHistory;