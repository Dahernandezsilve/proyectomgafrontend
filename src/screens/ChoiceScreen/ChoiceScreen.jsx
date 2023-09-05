import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native'
import ElCeibillalImg from '../../img/ElCeibillalSvg'
import ElCeibillalImgV2 from '../../img/ElCeibillalV2Svg'
import styles from './styles'

const ChoiceScreen = ({ navigation }) => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" backgroundColor="#2B4985" />
    <StatusBar barStyle="dark-content" backgroundColor="#2B4985" />
    <View style={styles.formContainer}>
      <ElCeibillalImg style={styles.logo} />
    </View>
    <ElCeibillalImgV2 style={styles.logoEsquina} />

    <View style={styles.containerBoton}>
      <TouchableOpacity
        style={styles.botonTrabajador}
        onPress={() => navigation.navigate('Trabajador')}
      >
        <Text style={styles.buttonTextTrabajador}>Trabajador</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.botonAdministrador}
        onPress={() => navigation.navigate('Administrador')}
      >
        <Text style={styles.buttonText}>Administador</Text>
      </TouchableOpacity>
    </View>
  </View>
)

ChoiceScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}

export default ChoiceScreen
