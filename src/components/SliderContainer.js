import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, ToastAndroid } from 'react-native';
import Slider from '@react-native-community/slider';
import SamsungOne from '../fonts/SamsungOne-400.ttf'
import * as Font from 'expo-font';

const windowWidth = Dimensions.get('window').width;

const SliderContainer = ({title, minimumValue, maximumValue, step, medida, fixed, registro, setRegistro, info}) => {
    const [value, setValue] = useState(0.0);

    return (
      <View style={styles.container}>
        <View style={styles.valueContainer}>
          <TextInput style={styles.valueText} >{value.toFixed(fixed)}</TextInput>
        </View>
        <Text style={[styles.title, {textAlign: 'left'}]}>{title}</Text>
        <Slider
        style={styles.slider}
        minimumValue={minimumValue}
        maximumValue={maximumValue}
        step={step}
        value={value}
        minimumTrackTintColor="#2e4a85"
        maximumTrackTintColor="#2e4a85"
        thumbTintColor="#2e4a85"
        thumbStyle={styles.sliderThumb}
        trackStyle={[styles.sliderTrack, {width: 10}]}
        onValueChange={(newValue) => {
          if (newValue !== undefined){
            setValue(newValue)
          }          
        }}
        />
        <View style={styles.sliderTextContainer}>
          <Text style={styles.sliderText}>{`${minimumValue} ${medida}`}</Text>
          <Text style={[styles.sliderText, {textAlign: 'right'}]}>{`${maximumValue} ${medida}`}</Text>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 10,
      width: '90%',
      marginTop: 10,
      alignSelf: 'center', // Alinea horizontalmente el componente
    },
    slider: {
      width: '100%',
      height: 25, // altura del slider
      borderRadius: 5, // radio de las esquinas
      overflow: 'hidden', // para recortar el borde del slider si se excede su tamaño
    },
    sliderThumb: {
      width: 20, // ancho del botón que se arrastra para cambiar el valor del slider
      height: 20, // altura del botón
      backgroundColor: '#007AFF', // color del botón
      borderRadius: 10, // radio del botón
    },
    sliderTrack: {
      height: 100,
      width: '90%',
    },        
    valueContainer: {
      backgroundColor: '#EFEFEF', // Color gris claro
      padding: 5,
      borderRadius: 5,
      marginTop: 10,
      width: '95%',
      alignItems: 'center',
      alignSelf: 'center',
    },
    valueText: {
      fontSize: 20,
    },
    title: {
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 10,
      fontSize: 20,
      textAlign: 'left',
    },
    sliderTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingLeft: 5,
        paddingRight: 5,
        marginTop: 5,
      },
      sliderText: {
        fontSize: 16,
        color: '#444444',
      },
  });

  export default SliderContainer
  