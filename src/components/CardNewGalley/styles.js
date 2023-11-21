import { StyleSheet, Dimensions } from 'react-native'
import { SamsungOne } from '../../fonts/SamsungOne-400.ttf'

const windowWidth = Dimensions.get('window').width


const styles = StyleSheet.create({
    card: {
      backgroundColor: '#FFFFFF',
      padding: windowWidth * 0.04,
      borderRadius: windowWidth * 0.04,
      margin: windowWidth * 0.025,
    },
    text: {
      fontFamily: SamsungOne,
      fontSize: windowWidth * 0.04,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    buttonContainer: {
      flexDirection: 'row',
      marginTop: windowWidth * 0.04,
    },
    button: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: windowWidth * 0.03,
      borderRadius: windowWidth * 0.02,
      marginHorizontal: windowWidth * 0.015,
    },
    redButton: {
      backgroundColor: 'red',
    },
    greenButton: {
      backgroundColor: 'green',
  },
  disabledButton: {
    opacity: 0.6, // Opacidad reducida cuando está deshabilitado
  },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
});
  
export default styles