import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  View, TextInput, Button,
} from 'react-native'
import styles from './styles'

const CommentsComponent = ({
  handleRegistrar, setRegistro, code,
}) => {
  const [comentario, setComentario] = useState('')

  const handleComentarioChange = text => {
    setComentario(text)
    setRegistro(prevRegistro => ({
      ...prevRegistro,
      [code]: text,
    }))
  }

  return (
    <View style={styles.container}>
      <View style={styles.comentariosContainer}>
        <TextInput
          style={styles.input}
          placeholder="Comentarios u observaciones"
          value={comentario}
          onChangeText={handleComentarioChange}
          multiline
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Completar"
          style={{ borderRadius: 5 }}
          color="#2e4a85"
          onPress={() => {
            handleRegistrar()
          }}
        />
      </View>
    </View>
  )
}

// Agrega la validación de propiedades
CommentsComponent.propTypes = {
  handleRegistrar: PropTypes.func.isRequired, // handleRegistrar debe ser una función requerida
  setRegistro: PropTypes.func.isRequired, // setRegistro debe ser una función requerida
  code: PropTypes.string.isRequired, // code debe ser una cadena (string) requerida
}

export default CommentsComponent
