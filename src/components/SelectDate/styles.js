import { StyleSheet } from 'react-native'
import SamsungOne from '../../fonts/SamsungOne-400.ttf'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    elevation: 2,
    marginHorizontal: 15,
    marginTop: 20,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    width: '88%',
  },
  contentContainer: {
  },
  selectedDate: {
    color: '#000',
    fontFamily: 'SamsungOne',
    fontSize: 15,
    marginTop: 10,
  },
  text: {
    color: '#000',
    fontFamily: 'SamsungOne',
    fontSize: 15,
  },
})

export default styles
