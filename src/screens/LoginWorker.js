import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image, StatusBar } from 'react-native'
import SamsungOne from '../fonts/SamsungOne-400.ttf'
import * as Font from 'expo-font';
import useApi from "../hooks/useApi/useApi"

const LoginWorker = ({navigation}) => {
  const [response, loading, handleRequest] = useApi()
  const [codigo, setCodigo] = useState('')
  const [haveAccess, setHaveAccess] = useState(false)

  const handleLogin = (correo, contrasena) => {
    handleRequest('POST', '/login', { user: correo, password: codigo })
  }

  const navigateToWorkerScreen = (correo, contrasena) => {
    handleLogin(correo, contrasena)
  }

  useEffect(() => {
    if (response.message !== null || response.message !== undefined) {
      console.log(response)
      if (response.data !== null || response.data !== undefined){
        if (response.data && response.data.length > 0) {
          if (response.message === 'Good Job' && response.data[0].rol === 'trabajador') {
            setHaveAccess(true);
            navigation.navigate('HomeWorker');
          } else {
            setHaveAccess(false);
          }
        }
      }
      
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2B4985" />
      <StatusBar barStyle="dark-content" backgroundColor="#2B4985" />
      <Image source={require('../img/ElCeibillalV2.png')} style={styles.backgroundImage}/>
      <View style={styles.formContainer}>
      <Image source={require('../img/ElCeibillal.png')} style={styles.logo} />
        <TextInput
          style={styles.input}
          placeholder="Código"
          autoCapitalize="none"
          secureTextEntry
          onChangeText={(text) => setCodigo(text)}
        />
        <TouchableOpacity style={styles.button} onPress={() => navigateToWorkerScreen('diher',codigo)}>
          <Text style={styles.buttonText}>Acceder</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B4985',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    position: "absolute",
    width: 300,
    height: 300,
    marginBottom: 20,
    top: -100,
    right: -50,
    zIndex: 1,
  },
  formContainer: {
    width: '80%',
    alignItems: 'center',
  },
  logo: {
    position: 'absolute',
    width: 300,
    height: 300,
    marginBottom: 20,
    top: -150,
    zIndex: 1,
  },
  input: {
    width: '100%',
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    top: 130,
  },
  button: {
    width: '100%',
    backgroundColor: '#35599F',
    paddingVertical: 10,
    borderRadius: 5,
    top: 140,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'SamsungOne',
    textAlign: 'center',
  },
});

export default LoginWorker;
