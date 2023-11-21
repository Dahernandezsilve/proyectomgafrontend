import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
    marginLeft: width * 0.05,
    marginRight: width * 0.05,
    marginVertical: 10,
    width: width * 0.9,
    zIndex: 0,
  },
  containerBig: {
    alignItems: 'center',

    marginTop: width * 0.03,
  },
  containerOpen: {

    alignItems: 'center',
    backgroundColor: '#E3E4E5',
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
    marginLeft: width * 0.05,
    marginRight: width * 0.05,
    marginVertical: 10,
    width: width * 0.9,
    zIndex: 2,
  },
  containerTextDrop: {
    alignItems: 'center',
    borderBottomColor: 'gray',
    borderBottomWidth: width * 0.002,
    padding: width * 0.03,
  },
  dropdown: {
    backgroundColor: 'white',
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
    left: 0,
    marginBottom: width * 0.5,
    width: width * 0.9,
    zIndex: 10,
  },
  header: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
    paddingBottom: width * 0.03,
    paddingLeft: width * 0.25,
    paddingRight: width * 0.25,
    paddingTop: width * 0.03,
    width: width * 0.9,
  },
  headerOpen: {
    alignItems: 'center',
    backgroundColor: '#E3E4E5',
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
    paddingBottom: width * 0.03,
    paddingLeft: width * 0.25,
    paddingRight: width * 0.25,
    paddingTop: width * 0.03,
    width: width * 0.9,
  },
  textDrop: {
    fontSize: width * 0.05,
  },
  textDropBlurred: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)', // Color de la sombra
    textShadowOffset: { width: 0, height: 2 }, // Desplazamiento de la sombra
    textShadowRadius: 10, // Radio de la sombra, ajusta según la intensidad del desenfoque
  },
  textDropdown: {
    fontSize: width * 0.05,
  },
})

export default styles
