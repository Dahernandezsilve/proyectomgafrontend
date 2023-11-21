import { StyleSheet, Dimensions } from 'react-native'
import { SamsungOne } from '../../fonts/SamsungOne-400.ttf'

const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  formGroup: {
    backgroundColor: '#f0f0f0',
    borderRadius: windowWidth * 0.02,
    marginLeft: windowWidth * 0.05,
    marginRight: windowWidth * 0.05,
    marginTop: windowWidth * 0.05,
    paddingBottom: windowWidth * 0.05,
    paddingLeft: windowWidth * 0.05,
    paddingRight: windowWidth * 0.05,
    paddingTop: windowWidth * 0.05,
  },
  workerTitle: {
    color: '#FFFFFF',
    fontSize: windowWidth * 0.15,
    fontWeight: 'bold',
  },
  bottomTabNavigator: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
  },
  // Nuevos estilos para los formularios agregados
  label: {
    fontSize: windowWidth * 0.04,
    fontWeight: 'bold',
    marginTop: windowWidth * -0.01,
  },
  selectInfo: {
    backgroundColor: '#B5B6B5',
    borderRadius: windowWidth * 0.02,
    marginTop: windowWidth * 0.02,
    padding: 0,
  },
  input: {
    borderColor: '#B5B6B5',
    borderRadius: windowWidth * 0.001,
    borderWidth: windowWidth * 0.05,
    height: windowWidth * 0.05,
    marginTop: windowWidth * 0.02,
    paddingLeft: windowWidth * 0.05,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: windowWidth * 0.02,
    marginLeft: windowWidth * 0.05,
    marginRight: windowWidth * 0.05,
    marginTop: windowWidth * 0.05,
    padding: windowWidth * 0.03,
  },
  buttonText: {
    color: 'white',
    fontSize: windowWidth * 0.04,
    fontWeight: 'bold',
  },
})

export default styles
