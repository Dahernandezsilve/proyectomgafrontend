import { StyleSheet, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  backgroundImage: {
    height: windowWidth * 0.9,
    marginBottom: 20,
    opacity: 0.6,
    position: 'absolute',
    right: -windowWidth * 0.3,
    top: -windowWidth * 0.37,
    transform: [{ rotate: '270deg' }],
    width: windowWidth * 1.2,
    zIndex: 1,
  },
  button: {
    backgroundColor: '#35599F',
    borderRadius: 5,
    marginTop: 20,
    paddingVertical: 10,
    width: windowWidth * 0.8,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'SamsungOne',
    fontSize: 16,
    textAlign: 'center',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#2B4985',
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: windowWidth * 0.04,
    marginTop: windowWidth * 0.01,
  },
  formContainer: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    width: windowWidth * 1,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 1,
    padding: 10,
    width: windowWidth * 0.8,
  },
  logo: {
    height: windowWidth * 0.8,
    marginBottom: 1,
    width: windowWidth * 1.0,
  },
})

export default styles
