import React, { useState, useEffect, useContext } from 'react'
import {
  View, Text, TextInput, TouchableOpacity, StatusBar,
} from 'react-native'
import * as Font from 'expo-font'
import PropTypes from 'prop-types'
import { GlobalContext } from '../../GlobalContext/GlobalContext.js'
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
  const { token, setToken } = useContext(GlobalContext)
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
        if(response.session_token !== null){
          console.log("Token: ",response.session_token)
          setToken(response.session_token)
        }
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
