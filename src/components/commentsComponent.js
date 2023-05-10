import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CommentsComponent = ({handleRegistrar}) => {
  const [comentario, setComentario] = useState('');
  const navigation = useNavigation()

  const handleComentarioChange = (text) => {
    setComentario(text);
  };

  const handleCompletar = () => {
    // Aquí puedes realizar alguna acción con el comentario ingresado
    console.log(comentario);
  };

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
        <Button title="Completar" color='#2e4a85' onPress={() => {
          handleRegistrar()
          navigation.goBack()
          }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    marginTop: 15,
    borderRadius: 10,
    width: '90%', 
    height: 150, 
    alignSelf: 'center',
  },
  comentariosContainer: {
    marginBottom: 10,
    flex: 1,
  },
  input: {
    backgroundColor: '#F5F5F5',
    height: '100%',
    padding: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    flex: 0,
  },
});

export default CommentsComponent;
