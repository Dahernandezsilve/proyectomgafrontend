import { StyleSheet, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width
// const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 2,
    marginTop: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    width: windowWidth * 0.9, // Utiliza dimensiones para el ancho
  },
  errorText: {
    color: 'red',
    marginLeft: windowWidth * 0.03,
    marginTop: windowWidth * 0.03,
  },
  slider: {
    borderRadius: 5,
    height: 25,
    overflow: 'hidden',
    width: '100%',
  },
  sliderText: {
    color: '#444444',
    fontSize: 16,
  },
  sliderTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    width: '100%',
  },
  sliderThumb: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
    height: 20,
    width: 20,
  },
  sliderTrack: {
    height: 100,
    width: windowWidth * 0.9, // Utiliza dimensiones para el ancho
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 10,
    marginTop: 10,
    textAlign: 'left',
  },
  valueContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#EFEFEF',
    borderRadius: 5,
    elevation: 2,
    marginTop: 10,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    width: windowWidth * 0.80, // Utiliza dimensiones para el ancho
  },
  valueText: {
    fontSize: 20,
  },
})

export default styles
