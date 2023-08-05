import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const CommentsComponent = ({ handleRegistrar }) => {
  const [comentario, setComentario] = useState('');
  const navigation = useNavigation();

  const handleComentarioChange = text => {
    setComentario(text);
  };

  const handleComplete = async () => {
    handleRegistrar();
    await navigateBack();
  };

  const navigateBack = async () => {
    navigation.goBack();
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
        <Button
          title="Completar"
          style={{ borderRadius: 5 }}
          color="#2e4a85"
          onPress={handleComplete}
        />
      </View>
    </View>
  );
};

CommentsComponent.propTypes = {
  handleRegistrar: PropTypes.func.isRequired,
};

export default CommentsComponent;
