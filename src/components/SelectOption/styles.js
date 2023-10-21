import { StyleSheet, Dimensions } from 'react-native'
import { SamsungOne } from '../../fonts/SamsungOne-400.ttf'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    elevation: 2,
    marginHorizontal: windowWidth * 0.04,
    marginTop: windowHeight * 0.02, // Ajustar el margen superior según la altura de la pantalla
    padding: windowWidth * 0.03, // Ajustar el padding según el ancho de la pantalla
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    width: windowWidth * 0.51, // Ajustar el ancho según el ancho de la pantalla
    zIndex: 1,
    // Ajuste de zIndex para asegurar que el contenedor esté por encima de otros componentes
  },
  optionButton: {
    marginBottom: windowHeight * 0.015, // Ajustar el margen inferior según la altura de la pantalla
    marginTop: windowHeight * 0.015, // Ajustar el margen superior según la altura de la pantalla
    padding: windowWidth * 0.0001, // Ajustar el padding según el ancho de la pantalla
  },
  optionsContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    elevation: 2,
    marginTop: windowHeight * 0.055, // Ajustar el margen superior según la altura de la pantalla
    paddingHorizontal: windowWidth * 0.02,
    position: 'absolute', // Añadido para superponer las opciones
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    width: '100%',
    zIndex: 2,
  },
  selectedOptionText: {
    fontSize: windowWidth * 0.04,
    paddingTop: 0,
    padding: windowWidth * 0.02,
    textAlign: 'center',
  },
  text: {
    color: '#000',
    fontFamily: SamsungOne,
    fontSize: windowWidth * 0.04, // Ajustar el tamaño de fuente según el ancho de la pantalla
    textAlign: 'center',
    width: '100%',
  },
})

export default styles
