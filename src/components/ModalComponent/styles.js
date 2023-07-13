import { StyleSheet, Dimensions } from 'react-native'
import { SamsungOne } from '../../fonts/SamsungOne-400.ttf'

const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    elevation: 2,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
  },
  buttonClose: {
    backgroundColor: '#2e4a85',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginTop: 22,
  },
  floatingButton: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 20,
    border: 10,
    borderColor: '#2e4a85',
    bottom: 20,
    color: '#2e4a85',
    elevation: 3,
    height: 50,
    justifyContent: 'center',
    left: 140,
    position: 'absolute',
    width: 50,
  },
  info: {
    fontFamily: SamsungOne,
    fontSize: 22,
    marginBottom: 15,
    textAlign: 'center',
  },
  modalContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
  },
  modalText: {
    borderBottomWidth: 2,
    borderColor: '#2e4a85',
    fontFamily: SamsungOne,
    fontSize: 22,
    marginBottom: 15,
    textAlign: 'center',
  },
  modalView: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 5,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    width: windowWidth - 30,
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
  },
  textoGaleraInfo: {
    fontFamily: SamsungOne,
    fontSize: 22,
    marginBottom: 5,
    textAlign: 'center',
  },
  tituloGalera: {
    fontSize: 24,
  },
})

export default styles
