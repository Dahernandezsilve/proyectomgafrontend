import { StyleSheet, Dimensions } from 'react-native'
import { SamsungOne } from '../../fonts/SamsungOne-400.ttf'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  backgroundImage: {
    height: width * 0.75,
    marginBottom: width * 0.05,
    opacity: 0.6,
    position: 'absolute',
    right: -width * 0.3,
    top: -width * 0.4,
    transform: [{ rotate: '270deg' }],
    width: width * 0.75,
    zIndex: 1,
  },
  button: {
    backgroundColor: '#35599F',
    borderRadius: 5,
    marginTop: width * 0.05,
    paddingVertical: width * 0.03,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontFamily: SamsungOne,
    fontSize: width * 0.04,
    textAlign: 'center',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#2B4985',
    flex: 1,
    justifyContent: 'center',
  },
  errorText: {
    color: 'yellow',
    fontSize: width * 0.04,
    marginTop: width * 0.01,
  },
  formContainer: {
    alignItems: 'center',
    marginTop: width * 0.05,
    width: '80%',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: width * 0.02,
    padding: width * 0.025,
    width: '100%',
  },
  logo: {
    height: width * 0.9,
    marginBottom: width * 0.001,
    width: width * 0.9,
  },
})

export default styles
