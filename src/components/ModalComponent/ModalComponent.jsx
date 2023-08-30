import React, { useState } from 'react'
import {
  Alert,
  Modal,
  Text,
  Pressable,
  View,
} from 'react-native'
import styles from './styles'

const ModalComponent = () => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Información de la galera</Text>
            <Text style={styles.textoGaleraInfo}>Galera</Text>
            <Text style={styles.info}>10</Text>
            <Text style={styles.textoGaleraInfo}>Cantidad de pollos: </Text>
            <Text style={styles.info}>200</Text>
            <Text style={styles.textoGaleraInfo}>Sexo del ave:</Text>
            <Text style={styles.info}>Macho</Text>
            <Text style={styles.textoGaleraInfo}>Edad de los pollos (días):</Text>
            <Text style={styles.info}>15</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={styles.floatingButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={[styles.textStyle, { color: '#2e4a85' }]}>+</Text>
      </Pressable>
    </View>
  )
}

export default ModalComponent
