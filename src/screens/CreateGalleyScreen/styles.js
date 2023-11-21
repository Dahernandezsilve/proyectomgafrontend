import { StyleSheet, Dimensions } from 'react-native';
import { SamsungOne } from '../../fonts/SamsungOne-400.ttf'


const windowWidth = Dimensions.get('window').width


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  formGroup: {
    marginBottom: windowWidth * 0.02,
    paddingTop: windowWidth * 0.05,
    paddingLeft: windowWidth * 0.05,
    paddingRight: windowWidth * 0.05,
    paddingBottom: windowWidth * 0.05,
    marginLeft: windowWidth * 0.05,
    marginRight: windowWidth * 0.05,
    marginTop: windowWidth * 0.02,
    backgroundColor: '#f0f0f0',
  },
  workerTitle: {
    color: '#FFFFFF',
    fontSize: windowWidth * 0.15,
    fontWeight: 'bold',
  },
  bottomTabNavigator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  // Nuevos estilos para los formularios agregados
  label: {
    fontSize: windowWidth * 0.04,
    fontWeight: 'bold',
  },
  input: {
    height: windowWidth * 0.05,
    borderColor: 'gray',
    borderWidth: windowWidth * 0.05,
    paddingLeft: windowWidth * 0.05,
    marginTop: windowWidth * 0.05,
  },
    button: {
        backgroundColor: 'green',
        padding: windowWidth * 0.03,
        borderRadius: windowWidth * 0.03,
        alignItems: 'center',
      },
      buttonText: {
        color: 'white',
        fontSize: windowWidth * 0.04,
        fontWeight: 'bold',
      },
});

export default styles;
