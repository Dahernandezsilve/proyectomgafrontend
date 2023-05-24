import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Button,
  StatusBar
} from "react-native"
import SamsungOne from '../fonts/SamsungOne-400.ttf'
import * as Font from 'expo-font';

const ChoiceScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2B4985" />
      <StatusBar barStyle="dark-content" backgroundColor="#2B4985" />
      <View style={styles.formContainer}>
        <Image source={require("../img/ElCeibillal.png")} style={styles.logo} />
      </View>

      <Image
        source={require("../img/ElCeibillalV2.png")}
        style={styles.logoEsquina}
      />

      <View style={styles.containerBoton}>
        <TouchableOpacity
          style={styles.botonTrabajador}
          onPress={() => navigation.navigate("Trabajador")}
        >
          <Text style={styles.buttonTextTrabajador}>Trabajador</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botonAdministrador}
          onPress={() => navigation.navigate("Administrador")}
        >
          <Text style={styles.buttonText}>Administador</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2B4985",
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    position: "absolute",
    top: -110,
    left: 200,
    width: "50%",
    height: "50%",
  },
  formContainer: {
    width: "80%",
    alignItems: "center",
  },
  logo: {
    position: "absolute",
    width: 500,
    height: 500,
    marginBottom: 20,
    top: -200,
    zIndex: 1,
  },
  logoEsquina: {
    position: "absolute",
    width: 300,
    height: 300,
    marginBottom: 20,
    top: -100,
    right: 0,
    zIndex: 1,
  },
  input: {
    width: "100%",
    backgroundColor: "white",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    top: 60,
  },
  button: {
    width: "100%",
    backgroundColor: "#35599F",
    paddingVertical: 10,
    borderRadius: 5,
    top: 70,
    borderColor: "white",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontFamily: 'SamsungOne',
    textAlign: "center",
  },
  buttonTextTrabajador: {
    color: "#2B4985",
    fontSize: 16,
    fontFamily: 'SamsungOne',
    textAlign: "center",
  },
  containerBoton: {
    width: "50%",
    padding: 20,
    margin: 15,
    top: 200,
  },
  botonTrabajador: {
    width: "100%",
    backgroundColor: "white",
    paddingVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#fff",
    top: 70,
    margin: 10,
  },
  botonAdministrador: {
    width: "100%",
    backgroundColor: "#2B4985",
    paddingVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#fff",
    top: 70,
    margin: 10,
  },
  imagenArbol: {
    rotation: 180,
  },
});

export default ChoiceScreen;
