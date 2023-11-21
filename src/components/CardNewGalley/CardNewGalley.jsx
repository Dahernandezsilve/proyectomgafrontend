import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import useApi from '../../hooks/useApi/useApi';

const CustomCard = ({ dataList, idGalley }) => {
  const [finishedId, setFinishedId] = useState(null);
  const [response, , handleRequest] = useApi();
  const [iniciarDisabled, setIniciarDisabled] = useState(true);
  const [finalizarDisabled, setFinalizarDisabled] = useState(false);

  const renderGaleraText = () => {
    return dataList.join(' - ');
  };

  const handleFinishPress = async (galeraId) => {
    setIniciarDisabled(false);
    setFinalizarDisabled(true);
    
    try {
      const body = {
        id_gale: galeraId,
      };

      console.log('body', body);

      // Realiza una solicitud POST a la ruta de Flask
      const response = await handleRequest('POST', '/finishGale', body);
      console.log('Mensaje:', response);

      // Maneja la respuesta del servidor según sea necesario
      if (response.status === 200) {
        console.log('Finalización exitosa');
        // Deshabilita el botón "Finalizar" y habilita el botón "Iniciar"
        setIniciarDisabled(false);
      } else {
        console.error('Error al finalizar:', response.error);
      }
    } catch (error) {
      console.error('Error al finalizar:', error);
    }
  };

  const handleIniciarPress = () => {
    setIniciarDisabled(true);
    setFinalizarDisabled(false);
    // Lógica para manejar el evento de presionar el botón "Iniciar"
    console.log('Botón "Iniciar" presionado');
  };

  return (
    <View style={styles.card}>
      <Text style={styles.text}>{renderGaleraText()}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.redButton, finalizarDisabled && styles.disabledButton]}
          onPress={() => handleFinishPress(idGalley)}
          disabled={finalizarDisabled}
        >
          <Text style={styles.buttonText}>Finalizar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomCard;
