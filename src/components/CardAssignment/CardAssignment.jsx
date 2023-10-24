/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import {
  View, Button, Text, TouchableWithoutFeedback, Animated, useWindowDimensions, Modal
} from 'react-native'
import CardGaleraAdmin from '../CardGaleraAdmin'
import PropTypes from 'prop-types'
import styles from './styles'
import useApi from '../../hooks/useApi/useApi'

const CardAssignment = ({
  customValues, customTitles,
}) => {
  const [opacityValue] = useState(new Animated.Value(1))
  const [modalVisible, setModalVisible] = useState(false)
  const [workers, setWorkers] = useState()
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
  };

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
        <View style={styles.modalContainer}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
              <Text style={styles.modalText}>Asignar trabajador: </Text>
              <CardGaleraAdmin
              // eslint-disable-next-line react/no-array-index-key
              key={1}
              ca="#FFFFFF"
              msgCA=""
              numberCA={null}
              customValues={{
                galera: 'Javier',
                cantidadAlimento: 'xd',
                pesado: 'saber',
                decesos: 'sd',
              }}
              customTitles={['Nombre:', 'Telefono:', 'Direccion:', 'Puesto:']}/>
            <Button title="Cerrar" onPress={closeModal} />
          </View>
        </View>
      </View>
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