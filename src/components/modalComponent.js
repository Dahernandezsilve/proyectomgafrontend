import React, { Component } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
} from "react-native";

export class ModalComponent extends Component {
  state = {
    modalVisible: false,
  };

  render() {
    const { modalVisible } = this.state;
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setState({ modalVisible: !modalVisible });
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>¡Información de Galeras!</Text>
              <Image
                style={styles.tinyLogo}
                source={require("../components/iconInfo.png")}
              />
              <Text style={[styles.tituloGalera]}>Galera</Text>
              <Text style={[styles.textoGaleraInfo]}>Cantidad de pollos :</Text>
              <Text style={[styles.textoGaleraInfo]}>Tipo de población :</Text>
              <Text style={[styles.textoGaleraInfo]}>Edad de los pollos :</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setState({ modalVisible: !modalVisible })}
              >
                <Text style={styles.textStyle}>Esconder Info</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={styles.floatingButton}
          onPress={() => this.setState({ modalVisible: true })}
        >
          <Text style={[styles.textStyle, {color: '#2e4a85'}]}>+</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    flex: 1,
    margin: 20,
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
    borderRadius: 20,
    padding: 5,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
    width: "20%",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  tituloGalera: {
    fontSize: 24,
    fontWeight: "bold",
    flex: 1,
  },
  textoGaleraInfo: {
    flex: 2,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    left: 140,
    borderRadius: 20,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    border: 10,
    borderColor: '#2e4a85',
    backgroundColor: '#FFF',
    elevation: 3,
    color: '#2e4a85',
  },
});
