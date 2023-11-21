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
  buttonContainer: {
    marginBottom: windowWidth * 0.05,
    marginLeft: windowWidth * 0.05,
    marginTop: windowWidth * 0.03,
    width: windowWidth * 0.9,
    zIndex: -2,
  },
  container1: {
    alignContent: 'center',
    backgroundColor: '#f0f0f0',
    flex: 1,
  },
  container2: {
    alignContent: 'center',
    backgroundColor: '#f0f0f0',
    flex: 1,
  },
  formGroup: {
    marginLeft: windowWidth * 0.03,
    marginTop: windowWidth * 0.05,

  },
  input: {
    borderColor: '#ccc',
    borderRadius: 5,
    borderWidth: 1,
    fontSize: 16,
    marginLeft: 10,
    marginRight: windowWidth * 0.05,
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
    borderBottomWidth: 1,
    borderColor: '#2B4985',
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  scrollContainer: {
    flex: 1,
  },
  textContainer: {
    alignItems: 'center',
    backgroundColor: '#ffb552',
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
    marginLeft: windowWidth * 0.07,
    marginRight: windowWidth * 0.07,
    padding: windowWidth * 0.05,
    shadowColor: 'gray',
    shadowRadius: 2,
  },
  textContainer2: {
    alignItems: 'center',
    backgroundColor: '#E3E4E5',
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
    marginLeft: windowWidth * 0.05,
    marginRight: windowWidth * 0.05,
    marginTop: windowWidth * 0.02,
    padding: windowWidth * 0.05,
    shadowColor: 'gray',
    shadowRadius: 2,
  },
  workerTitle: {
    color: '#2B4985',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

export default styles
