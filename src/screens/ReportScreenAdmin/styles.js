import { StyleSheet, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  optionsContainer: {
    flex: 1,
    flexDirection: 'column',
    marginRight: windowWidth * 0.02, // Utiliza un porcentaje del ancho de la ventana
  },
  rowContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: windowWidth * 0.02, // Utiliza un porcentaje del ancho de la ventana
    zIndex: 2,
  },
  scrollViewContainer: {
    alignItems: 'center',
    marginBottom: windowWidth * 0.04, // Utiliza un porcentaje del ancho de la ventana
  },
})

export default styles
