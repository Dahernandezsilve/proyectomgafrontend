import { StyleSheet, Dimensions } from 'react-native'
import { SamsungOne } from '../../fonts/SamsungOne-400.ttf'

const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  button: {
    marginBottom: windowWidth * 0.75, // Agregar margen superior al botón
  },
  buttonContainer: {
    marginTop: windowWidth * 0.05, // o cualquier otro valor de margen superior que desees
  },
  caContainer: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  centeredView: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  column: {
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
  modalContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center', // Aquí puedes definir el color de fondo del modal
  },
  modalText: {
    color: '#2B4985',
    fontFamily: SamsungOne,
    fontSize: windowWidth * 0.05,
    marginBottom: windowWidth * 0.05,
    textAlign: 'center',
  },
  modalView: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 5,
    margin: windowWidth * 0.04,
    padding: windowWidth * 0.10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  rectangle: {
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderColor: '#2B4985',
    marginTop: windowWidth * 0.000005,
    paddingHorizontal: windowWidth * 0.05,
    paddingVertical: windowWidth * 0.0000005,
  },
  rightAlignedText: {
    textAlign: 'right',
  },
  row: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginBottom: windowWidth * 0.01,
  },
  scrollable: {
    marginBottom: 20000,
  },
  smallText: {
    fontFamily: SamsungOne,
    fontSize: windowWidth * 0.04,
    marginBottom: windowWidth * 0.01,
  },
  square: {
    backgroundColor: 'red',
    borderRadius: windowWidth * 0.01,
    elevation: 2,
    height: windowWidth * 0.15,
    marginBottom: windowWidth * 0.02,
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
