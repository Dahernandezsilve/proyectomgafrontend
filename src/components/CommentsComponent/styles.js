import { StyleSheet, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: 'center',
    borderRadius: 5,
    elevation: 2,
    flex: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    width: windowWidth * 0.85,
  },
  comentariosContainer: {
    borderRadius: 5,
    elevation: 2,
    flex: 1,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  container: {
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 2,
    height: 150,
    marginTop: 15,
    padding: 10,
    marginBottom: windowWidth * 0.05,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    width: windowWidth * 0.9,
  },
  input: {
    backgroundColor: '#F5F5F5',
    height: '100%',
    padding: 10,
    textAlign: 'center',
  },
})

export default styles
