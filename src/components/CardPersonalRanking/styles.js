import { StyleSheet, Dimensions } from 'react-native'
import { SamsungOne } from '../../fonts/SamsungOne-400.ttf'

const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  caContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    padding: 0,
  },
  checkBoxChecked: {
    alignItems: 'center', // Alinear contenido al centro horizontalmente
    backgroundColor: '#2B4985', // Color de fondo para indicar que está marcado
    borderColor: '#2B4985', // Color del borde
    borderRadius: 5, // Hacer que el cuadro sea redondeado
    borderWidth: 2, // Grosor del borde
    height: windowWidth * 0.037,
    justifyContent: 'center', // Alinear contenido al centro verticalmente
    marginRight: windowWidth * 0.017,
    marginTop: windowWidth * 0.017,
    position: 'absolute', // Establecer posición absoluta
    right: 5, // Ajustar la posición desde la derecha
    top: 5, // Ajustar la posición desde la parte superior
    width: windowWidth * 0.037,
  },
  circle: {
    width: windowWidth * 0.07,
    height: windowWidth * 0.07,
    borderRadius: 75,
    borderWidth: 2, // Ancho del borde
    borderColor: 'gray', // Color del borde
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleText: {
    textAlign: 'center',
  },
  column: {
    flex: 0.7,
  },
  column2: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    elevation: 2,
    flexDirection: 'row',
    marginBottom: windowWidth * 0.005,
    marginHorizontal: windowWidth * 0.05,
    marginTop: windowWidth * 0.025,
    padding: 21,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  galeraContainer: {
    flex: 1,
    marginLeft: windowWidth * 0.04,
  },
  info: {
    fontFamily: SamsungOne,
    fontSize: windowWidth * 0.037,
  },
  positionContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    paddingRight: windowWidth * 0.05,
    flex: windowWidth * 0.00025,
  },
  rightAlignedText: {
    textAlign: 'right',
  },
  row: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  smallText: {
    fontFamily: SamsungOne,
    fontSize: windowWidth * 0.04,
    marginBottom: windowWidth * 0.01,
  },
  square: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'gray',
    borderRadius: windowWidth * 0.01,
    borderWidth: 2,
    elevation: 2,
    height: windowWidth * 0.15,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    width: windowWidth * 0.2,
  },
  title: {
    fontFamily: SamsungOne,
    fontSize: windowWidth * 0.037,
  },
})

export default styles
