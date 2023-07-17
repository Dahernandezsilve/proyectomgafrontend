import { StyleSheet } from 'react-native'
import SamsungOne from '../../fonts/SamsungOne-400.ttf'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    elevation: 2,
    marginHorizontal: 15,
    marginTop: 20,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    width: 230,
    zIndex: 1,
    // Ajuste de zIndex para asegurar que el contenedor esté por encima de otros componentes
  },
  optionButton: {
    marginBottom: 5,
    marginTop: 5,
    padding: 10,
  },
  optionsContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    elevation: 2,
    marginTop: 20,
    paddingHorizontal: 10,
    position: 'absolute', // Añadido para superponer las opciones
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    top: '100%',
    width: '100%',
    zIndex: 2,
  },
  selectedOptionText: {
    fontSize: 15,
  },
  text: {
    color: '#000',
    fontFamily: 'SamsungOne',
    fontSize: 15,
    textAlign: 'center',
    width: '100%',
  },
})

export default styles
