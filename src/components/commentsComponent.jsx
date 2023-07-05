import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  View, TextInput, Button, StyleSheet,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 5,
    elevation: 2,
    flex: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  comentariosContainer: {
    borderRadius: 5,
    elevation: 2,
    flex: 1,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  container: {
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 2,
    height: 150,
    marginBottom: 20,
    marginTop: 15,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    width: '90%',
  },
  input: {
    backgroundColor: '#F5F5F5',
    height: '100%',
    padding: 10,
    textAlign: 'center',
  },
})

const CommentsComponent = ({ handleRegistrar }) => {
  const [comentario, setComentario] = useState('')
  const navigation = useNavigation()

  const handleComentarioChange = text => {
    setComentario(text)
  }

  const handleCompletar = () => {
    // Aquí puedes realizar alguna acción con el comentario ingresado
    console.log(comentario)
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
            navigation.goBack()
          }}
        />
      </View>
    </View>
  )
}

CommentsComponent.propTypes = {
  handleRegistrar: PropTypes.func.isRequired,
}

export default CommentsComponent
