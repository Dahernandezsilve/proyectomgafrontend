import { StyleSheet } from 'react-native'
import { SamsungOne } from '../../fonts/SamsungOne-400.ttf'

const styles = StyleSheet.create({
  caContainer: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  column: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    elevation: 2,
    flexDirection: 'row',
    marginBottom: 5,
    marginHorizontal: 15,
    marginTop: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  galeraContainer: {
    flex: 1,
    marginLeft: 20,
  },
  info: {
    fontFamily: SamsungOne,
    fontSize: 18,
  },
  rightAlignedText: {
    textAlign: 'right',
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 5,
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
  title: {
    fontFamily: SamsungOne,
    fontSize: 18,
  },
})

export default styles
