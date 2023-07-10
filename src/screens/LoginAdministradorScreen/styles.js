import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  backgroundImage: {
    height: 270,
    marginBottom: 20,
    opacity: 0.6,
    position: 'absolute',
    right: -80,
    top: -100,
    transform: [{ rotate: '270deg' }],
    width: 270,
    zIndex: 1,
  },
  button: {
    backgroundColor: '#35599F',
    borderRadius: 5,
    marginTop: 20,
    paddingVertical: 10,
    width: '100%',
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
    flex: 1,
    justifyContent: 'center',
  },
  formContainer: {
    alignItems: 'center',
    marginTop: 20,
    width: '80%',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    width: '100%',
  },
  logo: {
    height: 300,
    marginBottom: 1,
    width: 300,
  },
})

export default styles
