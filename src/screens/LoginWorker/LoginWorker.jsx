import React, { useState, useEffect, useContext } from 'react'
import {
  View, Text, TextInput, TouchableOpacity, StatusBar,
} from 'react-native'
import * as Font from 'expo-font'
import PropTypes from 'prop-types'
import { GlobalContext } from '../../GlobalContext/GlobalContext'
import SamsungOne from '../../fonts/SamsungOne-400.ttf'
import useApi from '../../hooks/useApi/useApi'
import ElCeibillalImg from '../../img/ElCeibillalSvg'
import ElCeibillalImgV2 from '../../img/ElCeibillalV2Svg'
import styles from './styles'

const loadFonts = async () => {
  await Font.loadAsync({
    SamsungOne,
  })
}

const LoginWorker = ({ navigation }) => {
  const { setToken } = useContext(GlobalContext)
  const [response, , handleRequest] = useApi()
  const [codigo, setCodigo] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    loadFonts()
  }, [])

  const handleLogin = () => {
    if (codigo === '') {
      setError('El campo de código no puede estar vacío.')
      return
    }

    handleRequest('POST', '/login', { password: codigo })
  }

  const navigateToWorkerScreen = (correo, contrasena) => {
    handleLogin(correo, contrasena)
  }

  // Restablecer estados cuando se genera la acción "regresar"
  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', () => {
      setCodigo('')
      setError('')
    })

    return unsubscribe
  }, [navigation])

  useEffect(() => {
    console.log('response', response)
    if (response.data !== null || response.data !== undefined) {
      if (response.session_token !== null) {
        setToken(response.session_token)
      }
      console.log('response', response)
      if (response.error === 404) {
        setError('Código incorrecto.')
      }
      if (response.data && response.data.length > 0) {
        if (response.message === 'Good Job' && response.data[0].rol === 'trabajador') {
          setError('')
          navigation.navigate('HomeWorker')
        }
      }
    }
  }, [response, setToken, navigation, error, setError])

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
        {/* Mostrar el mensaje de error en rojo */}
        <Text style={styles.errorText}>{error}</Text>
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
    addListener: PropTypes.func.isRequired,
  }).isRequired,
}

export default LoginWorker
