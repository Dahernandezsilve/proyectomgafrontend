import React from 'react'
import PropTypes from 'prop-types'
import {
  View, TextInput,
} from 'react-native'
import styles from './styles'

const CommentsComponent = ({
  setValue, value,
}) => {
  const handleComentarioChange = text => {
    setValue(text)
  }

  return (
    <View style={styles.container}>
      <View style={styles.comentariosContainer}>
        <TextInput
          style={styles.input}
          placeholder="Comentarios u observaciones"
          value={value}
          onChangeText={handleComentarioChange}
          multiline
        />
      </View>

    </View>
  )
}

// Agrega la validación de propiedades
CommentsComponent.propTypes = {
  setValue: PropTypes.func.isRequired, // setRegistro debe ser una función requerida
  value: PropTypes.string.isRequired, // code debe ser una cadena (string) requerida
}

export default CommentsComponent
