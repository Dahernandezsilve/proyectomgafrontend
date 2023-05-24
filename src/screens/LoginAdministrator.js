import React,{useEffect, useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image, StatusBar } from 'react-native'
import SamsungOne from '../fonts/SamsungOne-400.ttf'
import * as Font from 'expo-font';
import useApi from "../hooks/useApi/useApi"

const LoginAdministrator = ({navigation}) => {
    const [response, loading, handleRequest] = useApi()
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('')
    const [haveAccess, setHaveAccess] = useState(false)

    const handleLogin = (correo, contrasena) => {
      handleRequest('POST', '/login', { user: correo, password: contrasena })
    }

    const navigateToWorkerScreen = async (correo, contrasena) => {
      await handleLogin(correo, contrasena)
      //console.log(response)
      //console.log('Correo:', correo);
      //console.log('Contraseña:', contrasena);
      if (haveAccess) {
        setHaveAccess(false)
        navigation.navigate('Home');
      }
    }
    
    // {"data": [{"direccion": "11av zona10", "idTrabajador": "1", "nombre": "Diego Hernandez", "puesto": "Servicio de limpieza", "rol": "trabajador", "telefono": "123213123"}], "error": 202, "message": "Good Job"}

    useEffect(() => {
      //console.log(response)
      if (response.message !== null || response.message !== undefined) {
        if (response.message === 'Good Job'){
          setHaveAccess(true)
        } else {
          setHaveAccess(false)
        }
      }
    }, [response, haveAccess])

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2B4985" />
      <StatusBar barStyle="dark-content" backgroundColor="#2B4985" />
      <Image source={require('../img/ElCeibillalV2.png')} style={styles.backgroundImage}/>
      <View style={styles.formContainer}>
      <Image source={require('../img/ElCeibillal.png')} style={styles.logo} />
        <TextInput
          style={styles.input}
          placeholder="Correo"
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={(text) => setCorreo(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          onChangeText={(text) => setContrasena(text)}
        />
        <TouchableOpacity style={styles.button} onPress={navigateToWorkerScreen(correo, contrasena)}>
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

export default LoginAdministrator;
