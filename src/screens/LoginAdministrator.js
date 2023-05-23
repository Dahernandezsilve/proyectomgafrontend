import React,{useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image } from 'react-native'
import SamsungOne from '../fonts/SamsungOne-400.ttf'
import * as Font from 'expo-font';

const LoginAdministrator = ({navigation}) => {
    
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');


    const navigateToWorkerScreen = () => {
        console.log('Correo:', correo);
        console.log('Contraseña:', contrasena);
        navigation.navigate('Home');
    };

  return (
    <View style={styles.container}>
      <Image source={require('../img/ElCeibillalV2.png')} style={styles.backgroundImage}/>
      <View style={styles.formContainer}>
      <Image source={require('../img/ElCeibillal.png')} style={styles.logo} />
        <TextInput
          style={styles.input}
          placeholder="Correo"
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={(text) => setCorreo(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          onChangeText={(text) => setContrasena(text)}
        />
        <TouchableOpacity style={styles.button} onPress={navigateToWorkerScreen}>
          <Text style={styles.buttonText}>Acceder</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B4985',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    top: -110,
    left: 200,
    width: '50%',
    height: '50%',
  },
  formContainer: {
    width: '80%',
    alignItems: 'center',
  },
  logo: {
    position: 'absolute',
    width: 200,
    height: 200,
    marginBottom: 20,
    top: -140,
    zIndex: 1,
  },
  input: {
    width: '100%',
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    top: 60,
  },
  button: {
    width: '100%',
    backgroundColor: '#35599F',
    paddingVertical: 10,
    borderRadius: 5,
    top: 70,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'SamsungOne',
    textAlign: 'center',
  },
});

export default LoginAdministrator;
