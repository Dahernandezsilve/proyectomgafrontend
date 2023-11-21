import { StyleSheet, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  bottomTabNavigator: {
    backgroundColor: '#fff',
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0, // Ajusta el color de fondo según tus necesidades
    zIndex: 3,
  },
  selectOp: {
    zIndex: 5,
  },
  containerColumn: {
    flexDirection: 'row',
  },
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
  scrollabe: {
    marginBottom: windowWidth * 0.20,
  },
  tabNavigator: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
  },
  textContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomRightRadius: 0,
    borderColor: 'gray',
    borderRadius: 5,
    borderRightWidth: 0,
    borderTopRightRadius: 0,
    borderWidth: 1,
    marginLeft: windowWidth * 0.04,
    marginTop: windowWidth * 0.05,
    padding: windowWidth * 0.05,
    shadowColor: 'gray',
    shadowRadius: 2,
  },
  textContainer2: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomLeftRadius: 0,
    borderColor: 'gray',
    borderLeftWidth: 0,
    borderRadius: 5,
    borderTopLeftRadius: 0,
    borderWidth: 1,
    marginTop: windowWidth * 0.05,
    paddingTop: windowWidth * 0.01,
  },

})

export default styles
