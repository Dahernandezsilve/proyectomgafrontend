import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet, Image, StatusBar,
} from 'react-native'
import * as Font from 'expo-font'
import SamsungOne from '../fonts/SamsungOne-400.ttf'
import useApi from '../hooks/useApi/useApi'
import ElCeibillalImg from '../img/ElCeibillal.png'
import ElCeibillalImgV2 from '../img/ElCeibillalV2.png'

const styles = StyleSheet.create({
  backgroundImage: {
    height: 260,
    marginBottom: 20,
    position: 'absolute',
    right: 0,
    top: -100,
    width: 260,
    zIndex: 1,
  },
  button: {
    backgroundColor: '#35599F',
    borderRadius: 5,
    marginTop: 20,
    paddingVertical: 10,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'SamsungOne',
    fontSize: 16,
    textAlign: 'center',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#2B4985',
    flex: 1,
    justifyContent: 'center',
  },
  formContainer: {
    alignItems: 'center',
    marginTop: 20,
    width: '80%',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    width: '100%',
  },
  logo: {
    height: 300,
    marginBottom: 1,
    width: 300,
  },
})

const LoginAdministrator = ({ navigation }) => {
  const [response,, handleRequest] = useApi()
  const [correo, setCorreo] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [, setHaveAccess] = useState(false)
  const loadFonts = async () => {
    await Font.loadAsync({
      SamsungOne,
    })
  }
  useEffect(() => {
    loadFonts()
  }, [])

  const handleLogin = () => {
    handleRequest('POST', '/login', { user: correo, password: contrasena })
  }

  const navigateToAdminScreen = () => {
    handleLogin(correo, contrasena)
  }

  useEffect(() => {
    if (response.message !== null || response.message !== undefined) {
      console.log(response)
      if (response.data !== null || response.data !== undefined) {
        if (response.data && response.data.length > 0) {
          if (response.message === 'Good Job' && response.data[0].rol === 'admin') {
            setHaveAccess(true)
            navigation.navigate('Home')
          } else {
            setHaveAccess(false)
          }
        }
      }
    }
  }, [response])

  /* {"data": [{"direccion": "11av zona10", "idTrabajador": "1", "nombre": "Diego Hernandez",
   "puesto": "Servicio de limpieza", "rol": "trabajador", "telefono": "123213123"}], "error": 202,
    "message": "Good Job"} */

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2B4985" />
      <StatusBar barStyle="dark-content" backgroundColor="#2B4985" />
      <Image source={ElCeibillalImgV2} style={styles.backgroundImage} />
      <View style={styles.formContainer}>
        <Image source={ElCeibillalImg} style={styles.logo} />
        <TextInput
          style={styles.input}
          placeholder="Correo"
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={text => setCorreo(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          onChangeText={text => setContrasena(text)}
        />
        <TouchableOpacity style={styles.button} onPress={navigateToAdminScreen}>
          <Text style={styles.buttonText}>Acceder</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

LoginAdministrator.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}

export default LoginAdministrator
