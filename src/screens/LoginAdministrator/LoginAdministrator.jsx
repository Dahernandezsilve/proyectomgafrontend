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

export const handleLogin = async (correo, contrasena) => {
  try {
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: correo, password: contrasena }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error occurred during login:', error);
    return null;
  }
};


const LoginAdministrator = ({ navigation }) => {
  const { setToken } = useContext(GlobalContext)
  const [response,, handleRequest] = useApi()
  const [correo, setCorreo] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [, setHaveAccess] = useState(false)

  

  const navigateToAdminScreen = () => {
    handleLogin(correo, contrasena)
  }

  useEffect(() => {
    if (response.message !== null || response.message !== undefined) {
      // eslint-disable-next-line no-console
      if (response.data !== null || response.data !== undefined) {
        if (response.session_token !== null) {
          setToken(response.session_token)
        }
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
  }, [navigation, response])

  /* {"data": [{"direccion": "11av zona10", "idTrabajador": "1", "nombre": "Diego Hernandez",
   "puesto": "Servicio de limpieza", "rol": "trabajador", "telefono": "123213123"}], "error": 202,
    "message": "Good Job"} */

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
