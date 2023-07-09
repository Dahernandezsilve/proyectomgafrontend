import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 5,
    elevation: 2,
    flex: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
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
    marginBottom: 20,
    marginTop: 15,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    width: '90%',
  },
  input: {
    backgroundColor: '#F5F5F5',
    height: '100%',
    padding: 10,
    textAlign: 'center',
  },
})

export default styles
