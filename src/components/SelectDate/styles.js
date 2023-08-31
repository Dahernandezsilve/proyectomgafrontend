import { StyleSheet, Dimensions } from 'react-native'
import { SamsungOne } from '../../fonts/SamsungOne-400.ttf'

const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    elevation: 2,
    marginHorizontal: windowWidth * 0.04,
    marginTop: windowWidth * 0.05, // Ajustar el margen superior según el ancho de la pantalla
    padding: windowWidth * 0.03, // Ajustar el padding según el ancho de la pantalla
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    width: windowWidth * 0.51, // Ajustar el ancho según el ancho de la pantalla
  },
  contentContainer: {},
  selectedDate: {
    color: '#000',
    fontFamily: SamsungOne,
    fontSize: windowWidth * 0.04, // Ajustar el tamaño de fuente según el ancho de la pantalla
    marginTop: windowWidth * 0.02, // Ajustar el margen superior según el ancho de la pantalla
  },
  text: {
    color: '#000',
    fontFamily: SamsungOne,
    fontSize: windowWidth * 0.04, // Ajustar el tamaño de fuente según el ancho de la pantalla
  },
})

export default styles
