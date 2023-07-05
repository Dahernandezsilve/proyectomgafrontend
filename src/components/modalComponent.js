import React, { Component } from 'react'
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  Dimensions,
} from 'react-native'
import * as Font from 'expo-font'
import SamsungOne from '../fonts/SamsungOne-400.ttf'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export class ModalComponent extends Component {
  state = {
    modalVisible: false,
  }

  render() {
    const { modalVisible } = this.state
    return (
      <View style={styles.container}>
        <Modal
          animationType="fade"
          transparent
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.')
            this.setState({ modalVisible: !modalVisible })
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
                onPress={() => this.setState({ modalVisible: !modalVisible })}
              >
                <Text style={styles.textStyle}>Cerrar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={styles.floatingButton}
          onPress={() => this.setState({ modalVisible: true })}
        >
          <Text style={[styles.textStyle, { color: '#2e4a85' }]}>+</Text>
        </Pressable>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    elevation: 2,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
  },
  buttonClose: {
    backgroundColor: '#2e4a85',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginTop: 22,
  },
  floatingButton: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 20,
    border: 10,
    borderColor: '#2e4a85',
    bottom: 20,
    color: '#2e4a85',
    elevation: 3,
    height: 50,
    justifyContent: 'center',
    left: 140,
    position: 'absolute',
    width: 50,
  },
  info: {
    fontFamily: 'SamsungOne',
    fontSize: 22,
    marginBottom: 15,
    textAlign: 'center',
  },
  modalContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
  },
  modalText: {
    borderBottomWidth: 2,
    borderColor: '#2e4a85',
    fontFamily: 'SamsungOne',
    fontSize: 22,
    marginBottom: 15,
    textAlign: 'center',
  },
  modalView: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 5,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    width: windowWidth - 30,
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
  },
  textoGaleraInfo: {
    fontFamily: 'SamsungOne',
    fontSize: 22,
    marginBottom: 5,
    textAlign: 'center',
  },
  tituloGalera: {
    fontFamily: 'SamsungOne',
    fontSize: 24,
  },
})
