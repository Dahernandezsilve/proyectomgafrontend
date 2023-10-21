import { StyleSheet, Dimensions } from 'react-native'
import { SamsungOne } from '../../fonts/SamsungOne-400.ttf'

const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  caContainer: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  column: {
    flex: 0.4,
  },
  column2: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    elevation: 2,
    flexDirection: 'row',
    marginBottom: windowWidth * 0.005,
    marginHorizontal: windowWidth * 0.05,
    marginTop: windowWidth * 0.025,
    padding: 21,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  galeraContainer: {
    flex: 1,
    marginLeft: windowWidth * 0.04,
  },
  info: {
    fontFamily: SamsungOne,
    fontSize: windowWidth * 0.037,
  },
  rightAlignedText: {
    textAlign: 'justify',
  },
  row: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  smallText: {
    fontFamily: SamsungOne,
    fontSize: windowWidth * 0.04,
    marginBottom: windowWidth * 0.01,
  },
  square: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'gray',
    borderRadius: windowWidth * 0.01,
    borderWidth: 2,
    elevation: 2,
    height: windowWidth * 0.15,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    width: windowWidth * 0.2,

  },
  title: {
    fontFamily: SamsungOne,
    fontSize: windowWidth * 0.037,
  },
})

export default styles
