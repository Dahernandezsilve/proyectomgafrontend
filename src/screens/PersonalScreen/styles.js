import { StyleSheet, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  bottomTabNavigator: {
    backgroundColor: '#fff',
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0, // Ajusta el color de fondo según tus necesidades
  },
  container: {
    backgroundColor: '#f0f0f0',
    flex: 1,
  },
  container2: {
    backgroundColor: '#f0f0f0',
    flex: 1,
    marginBottom: windowWidth * 0.20,
  },
  formGroup: {
    marginBottom: 20,
  },
  input: {
    borderColor: '#ccc',
    borderRadius: 5,
    borderWidth: 1,
    fontSize: 16,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    marginLeft: 10,
  },
  rectangle: {
    alignSelf: 'center',
    backgroundColor: '#f0f0f0',
    borderBottomWidth: 2,
    borderColor: '#ff8c00',
    marginTop: windowWidth * 0.01,
    paddingHorizontal: windowWidth * 0.32,
    paddingVertical: 10,
    marginBottom: windowWidth * 0.001
  },
  scrollContainer: {
    flex: 1,
  },
  scrollable: {
    marginBottom: 20000,
  },
  workerTitle: {
    color: '#ff8c00',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

export default styles
