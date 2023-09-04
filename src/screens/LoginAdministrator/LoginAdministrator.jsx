import React, { useEffect, useState, useContext } from 'react'
import PropTypes from 'prop-types'
import {
  View, Text, TextInput, TouchableOpacity, StatusBar,
} from 'react-native'
import { GlobalContext } from '../../GlobalContext/GlobalContext'
import useApi from '../../hooks/useApi/useApi'
import ElCeibillalImg from '../../img/ElCeibillalSvg'
import ElCeibillalImgV2 from '../../img/ElCeibillalV2Svg'
import styles from './styles'

const LoginAdministrator = ({ navigation }) => {
  const { setToken } = useContext(GlobalContext)
  const [response, , handleRequest] = useApi()
  const [correo, setCorreo] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [error, setError] = useState('')

  const navigateToAdminScreen = () => {
    setError('')

    if (!correo || !contrasena) {
      setError('Por favor, completa todos los campos.')
      return
    }

    handleRequest('POST', '/login', { user: correo, password: contrasena })
  }

  // Restablecer estados cuando se realiza la acción de "regresar"
  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', () => {
      setCorreo('')
      setContrasena('')
      setError('')
    })

    return unsubscribe
  }, [navigation])

  useEffect(() => {
    if (response.message !== null || response.message !== undefined) {
      if (response.data !== null || response.data !== undefined) {
        if (response.session_token !== null) {
          setToken(response.session_token)
        }
        if (response.message !== 'Good Job') {
          setError('Datos incorrectos.') // Mostrar mensaje de error
        }
        if (response.data && response.data.length > 0) {
          if (response.message === 'Good Job' && response.data[0].rol === 'admin') {
            setError('')
            navigation.navigate('Home')
          }
        }
      }
    }
  }, [response, setToken, navigation])

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2B4985" />
      <StatusBar barStyle="dark-content" backgroundColor="#2B4985" />
      <ElCeibillalImgV2 style={styles.backgroundImage} />
      <View style={styles.formContainer}>
        <ElCeibillalImg style={styles.logo} />
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
        {/* Mostrar el mensaje de error en rojo */}
        <Text style={styles.errorText}>{error}</Text>
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
    addListener: PropTypes.func.isRequired,
  }).isRequired,
}

export default LoginAdministrator
