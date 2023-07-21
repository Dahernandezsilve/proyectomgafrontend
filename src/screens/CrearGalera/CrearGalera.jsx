import React from 'react'
import PropTypes from 'prop-types'
import {
  View, Text, Button, TextInput,
} from 'react-native'

import styles from './styles'

const CrearGalera = () => (

  <View style={styles.container}>
    <View style={styles.inputsContainer}>
      <View>
        <Text style={styles.text}>Crea una nueva galera</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="No.Galera : "
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Tipo de población : "
      />
      <TextInput
        style={styles.input}
        placeholder="Cantidad de pollos : "
        keyboardType="numeric"
      />

      <View style={styles.buttonContainer}>
        <Button
          style={styles.buttonAsignar}
          title="Asignar trabajador"
        />
      </View>

    </View>
    <View style={styles.buttonContainer}>
      <Button
        style={styles.button}
        title="Completar"
      />
    </View>

  </View>
)

CrearGalera.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}

export default CrearGalera
