import React, { Component } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  Dimensions
} from "react-native"
import SamsungOne from '../fonts/SamsungOne-400.ttf'
import * as Font from 'expo-font'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export class ModalComponent extends Component {
  state = {
    modalVisible: false,
  };

  render() {
    const { modalVisible } = this.state;
    return (
      <View style={styles.container}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setState({ modalVisible: !modalVisible });
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Información de la galera</Text>
              <Text style={[styles.textoGaleraInfo]}>Galera</Text>
              <Text style={[styles.info]}>10</Text>
              <Text style={[styles.textoGaleraInfo]}>Cantidad de pollos: </Text>
              <Text style={[styles.info]}>200</Text>
              <Text style={[styles.textoGaleraInfo]}>Sexo del ave:</Text>
              <Text style={[styles.info]}>Macho</Text>
              <Text style={[styles.textoGaleraInfo]}>Edad de los pollos (días):</Text>
              <Text style={[styles.info]}>15</Text>
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
          <Text style={[styles.textStyle, { color: "#2e4a85" }]}>+</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    width: windowWidth - 30,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 4,
    elevation: 2,
    paddingTop: 5,
    paddingLeft: 10,
    paddingBottom: 5,
    paddingRight: 10,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2e4a85",
  },
  textStyle: {
    color: "white",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    borderBottomWidth: 2,
    borderColor: '#2e4a85',
    fontSize:  22,
    fontFamily: 'SamsungOne',
    textAlign: "center",
  },
  tituloGalera: {
    fontSize: 24,
    fontFamily: 'SamsungOne'
  },
  textoGaleraInfo: {
    marginBottom: 5,
    fontSize:  22,
    fontFamily: 'SamsungOne',
    textAlign: "center",
  },
  info: {
    marginBottom: 15,
    fontSize:  22,
    fontFamily: 'SamsungOne',
    textAlign: "center",
  },
  floatingButton: {
    position: "absolute",
    bottom: 20,
    left: 140,
    borderRadius: 20,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    border: 10,
    borderColor: "#2e4a85",
    backgroundColor: "#FFF",
    elevation: 3,
    color: "#2e4a85",
  },
});
