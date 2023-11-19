import { StyleSheet, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  buttonT: {
    color: "#2e4a85",
    borderRadius: 4,
    elevation: 2,
    margin: windowWidth * 0.02,
    padding: windowWidth * 0.06,
    width: windowWidth * 0.6,
  },
  buttonAsignar: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFF',
    display: 'flex',
    flexDirection: 'row', // Agregado para alinear el texto y el icono horizontalmente
    justifyContent: 'space-between', // Agregado para agregar espacio entre el texto y el icono
    padding: 10,
    width: windowWidth * 0.9, // Utiliza el 90% del ancho de la pantalla
  },
  buttonContainer: {
    marginBottom: windowWidth * 0.05,
    marginLeft: windowWidth * 0.05,
    width: windowWidth * 0.9,
  },
  card: {
    height: 10,
    width: 10,
  },
  container: {
    backgroundColor: '#FFF',
    marginBottom: windowWidth * 0.001,
    marginLeft: windowWidth * 0.05,
    width: windowWidth * 0.9,
  },
  input: {
    borderWidth: 1,
    height: 40,
    margin: 12,
    padding: 10,
  },
  inputsContainer: {
    backgroundColor: '#798281',
    display: 'flex',
    flex: 1,
    width: windowWidth * 0.9, // Utiliza el 90% del ancho de la pantalla
  },
  text: {
    fontSize: windowWidth * 0.05,
    marginBottom: windowWidth * 0.025,
    marginLeft: windowWidth * 0.05,
    marginTop: windowWidth * 0.025,
  },
})

export default styles
