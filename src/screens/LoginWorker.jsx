import React, { useState, useEffect } from 'react'
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar,
} from 'react-native'
import * as Font from 'expo-font'
import PropTypes from 'prop-types'
import SamsungOne from '../fonts/SamsungOne-400.ttf'
import useApi from '../hooks/useApi/useApi'
import ElCeibillalImg from '../img/ElCeibillalSvg'
import ElCeibillalImgV2 from '../img/ElCeibillalV2Svg'

const loadFonts = async () => {
  await Font.loadAsync({
    SamsungOne,
  })
}

const styles = StyleSheet.create({
  backgroundImage: {
    height: 270,
    marginBottom: 20,
    opacity: 0.6,
    position: 'absolute',
    right: -80,
    top: -100,
    transform: [{ rotate: '270deg' }],
    width: 270,
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
    width: '80%',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 1,
    padding: 10,
    width: '100%',
  },
  logo: {
    height: 300,
    marginBottom: 1,
    width: 300,
  },
})

const LoginWorker = ({ navigation }) => {
  const [response,, handleRequest] = useApi()
  const [codigo, setCodigo] = useState('')
  const [, setHaveAccess] = useState(false)
  useEffect(() => {
    loadFonts()
  }, [])

  const handleLogin = () => {
    handleRequest('POST', '/login', { password: codigo })
  }

  const navigateToWorkerScreen = (correo, contrasena) => {
    handleLogin(correo, contrasena)
  }

  useEffect(() => {
    if (response.message !== null || response.message !== undefined) {
      console.log(response)
      if (response.data !== null || response.data !== undefined) {
        if (response.data && response.data.length > 0) {
          if (response.message === 'Good Job' && response.data[0].rol === 'trabajador') {
            setHaveAccess(true)
            navigation.navigate('HomeWorker')
          } else {
            setHaveAccess(false)
          }
        }
      }
    }
  }, [response])

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2B4985" />
      <StatusBar barStyle="dark-content" backgroundColor="#2B4985" />
      <ElCeibillalImgV2 style={styles.backgroundImage} />
      <View style={styles.formContainer}>
        <ElCeibillalImg style={styles.logo} />
        <TextInput
          style={styles.input}
          placeholder="Código"
          autoCapitalize="none"
          secureTextEntry
          onChangeText={text => setCodigo(text)}
        />
        <TouchableOpacity style={styles.button} onPress={() => navigateToWorkerScreen(codigo)}>
          <Text style={styles.buttonText}>Acceder</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

LoginWorker.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}

export default LoginWorker
