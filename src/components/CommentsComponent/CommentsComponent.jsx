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
    <View testID="container" style={styles.container}>
      <View testID="comentariosContainer" style={styles.comentariosContainer}>
        <TextInput
          testID="input"
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
  setValue: PropTypes.func.isRequired, // setRegistro must be a required function
  value: PropTypes.string.isRequired, // code must be a required string
}

export default CommentsComponent
