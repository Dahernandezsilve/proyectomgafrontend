import { StyleSheet } from 'react-native'
import { SamsungOne } from '../../fonts/SamsungOne-400.ttf'

const styles = StyleSheet.create({
  caContainer: {
    alignItems: 'center',
    flex: -1,
    flexDirection: 'column',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    elevation: 2,
    flexDirection: 'row',
    marginBottom: 10,
    marginHorizontal: 15,
    marginTop: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  galeraContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
  },
  smallText: {
    fontFamily: SamsungOne,
    fontSize: 20,
    marginBottom: 5,
  },
  square: {
    backgroundColor: 'red',
    borderRadius: 5,
    elevation: 2,
    height: 50,
    marginBottom: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    width: 80,
  },
  text: {
    fontFamily: SamsungOne,
    fontSize: 50,
    textAlign: 'center',
  },
})

export default styles
