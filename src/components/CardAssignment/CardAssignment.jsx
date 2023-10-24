/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import {
  View, Button, Text, TouchableWithoutFeedback, Animated, useWindowDimensions, Modal, ScrollView
} from 'react-native'
import CardPersonal from '../CardPersonal'
import PropTypes from 'prop-types'
import styles from './styles'
import useApi from '../../hooks/useApi/useApi'

const CardAssignment = ({
  customValues, customTitles, selectedGalera
}) => {
  const [opacityValue] = useState(new Animated.Value(1))
  const [modalVisible, setModalVisible] = useState(false)
  const [workers, setWorkers] = useState()
  const [workerName, setWorkerName] = useState()
  const [response, , handleRequest] = useApi()
  const windowWidth = useWindowDimensions().width

  const handleObtainWorkers = () => {
    try {
      // eslint-disable-next-line no-shadow
      handleRequest('GET', '/obtainTrabajadores')
      // Haz algo con la respuesta aquí si es necesario
    } catch (error) {
      console.error('Error al obtener los trabajadores:', error)
    }
  }

  const handleWorkerSelection = (name) => {
    // Realiza alguna acción con el nombre del trabajador seleccionado
    //console.log("Nombre del trabajador seleccionado:", name);
    setWorkerName(name);
  };

  useEffect(() => {
    console.log('Trabajadores: ', workers)
  }, [workers])

  useEffect(() => {
    if (response.data !== undefined && response.data !== null) {
      if (response.data.length > 0) {
        setWorkers(response.data)
      }
    }
  }, [response])

  useEffect(() => {
    handleObtainWorkers()
  }, [])

  useEffect(() => {
    //console.log("Actualizando trabajador: ", workerName);
  }, [workerName]);
  

  const onPressIn = () => {
    Animated.timing(opacityValue, {
      toValue: 0.5,
      duration: 100,
      useNativeDriver: true,
    }).start()
  }

  const onPressOut = () => {
    Animated.timing(opacityValue, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start()
  }

  const handlePress = () => {
    setModalVisible(true);
    //console.log("Este es el numero de galera seleccionada: ", selectedGalera);
    //console.log("Esta el trabajador: ", workerName);
  };

  const handlePressButton = () => {
    console.log("Mandando galera: ", selectedGalera)
    console.log("Mandando trabajador: ", workerName)
    closeModal()
  }

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableWithoutFeedback onPressIn={onPressIn} onPressOut={onPressOut} onPress={handlePress} testID="card-galera">
        <Animated.View
          style={
            [styles.container, { width: windowWidth - windowWidth * 0.1, opacity: opacityValue }]
          }
        >
          <View style={styles.caContainer}>
          </View>
          <View style={[styles.galeraContainer, styles.row]}>
            <View style={styles.column}>
              {customTitles.map((title, index) => (
                <Text key={index} style={styles.title}>
                  {title}
                </Text>
              ))}
            </View>
            <View style={[styles.column, styles.valuesContainer]}>
              {Object.entries(customValues).map(([key, value]) => (
                <Text key={key} style={[styles.info, styles.rightAlignedText]}>
                  {value}
                </Text>
              ))}
            </View>
          </View>
        </Animated.View>
      </TouchableWithoutFeedback>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
      <ScrollView style={styles.scrollabe}>
        <View style={styles.modalContainer}>
        <View style={styles.centeredView}>
              <View style={styles.modalView}>
              <View style={styles.rectangle}>
                  <Text style={styles.modalText}>Asignar trabajador: </Text>
              </View>
              {workers !== undefined && workers.length > 0 ? (
            workers.map(worker => (
              <CardPersonal
                key={worker.id_trabajador}
                customValues={{
                  nombre: worker.nombre,
                  telefono: worker.telefono,
                  direccion: worker.direccion,
                  puesto: worker.puesto,
                }}
                img={worker.img}
                customTitles={['Nombre:', 'Telefono:', 'Direccion:', 'Puesto:']}
                isTouchable={true}
                workerSelected={worker.nombre}
                onWorkerSelect={handleWorkerSelection}
              />
            ))
                ) : null}

                <View style={styles.buttonContainer}>
                  <Button title="Asignar" onPress={handlePressButton} style={styles.button} />
                </View>
              </View>
              
                
        </View>
          </View>
          </ScrollView>
      </Modal>
    </View>
  )
}

CardAssignment.propTypes = {
  customValues: PropTypes.objectOf(PropTypes.any),
  customTitles: PropTypes.arrayOf(PropTypes.string),
  // eslint-disable-next-line react/require-default-props
  navigateToGaleras: PropTypes.func,
}

CardAssignment.defaultProps = {
  customValues: {},
  customTitles: [],
}

export default CardAssignment
