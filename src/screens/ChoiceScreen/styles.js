import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  backgroundImage: {
    height: '50%',
    left: 200,
    position: 'absolute',
    top: -110,
    width: '50%',
  },
  botonAdministrador: {
    backgroundColor: '#2B4985',
    borderColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    margin: 10,
    paddingVertical: 10,
    top: 70,
    width: '100%',
  },
  botonTrabajador: {
    backgroundColor: 'white',
    borderColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    margin: 10,
    paddingVertical: 10,
    top: 70,
    width: '100%',
  },
  button: {
    backgroundColor: '#35599F',
    borderColor: 'white',
    borderRadius: 5,
    paddingVertical: 10,
    top: 70,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'SamsungOne',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonTextTrabajador: {
    color: '#2B4985',
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
  containerBoton: {
    margin: 15,
    padding: 20,
    top: 200,
    width: '50%',
  },
  formContainer: {
    alignItems: 'center',
    width: '80%',
  },
  imagenArbol: {
    rotation: 180,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    top: 60,
    width: '100%',
  },
  logo: {
    height: 350,
    marginBottom: 20,
    position: 'absolute',
    top: -75,
    width: 350,
    zIndex: 1,
  },
  logoEsquina: {
    height: 330,
    marginBottom: 20,
    opacity: 0.6,
    position: 'absolute',
    right: -80,
    top: -100,
    transform: [{ rotate: '270deg' }],
    width: 330,
    zIndex: 1,
  },
})

export default styles
