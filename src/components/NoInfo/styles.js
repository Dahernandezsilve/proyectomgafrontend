import { StyleSheet } from 'react-native-web'
// eslint-disable-next-line no-unused-vars
import SamsungOne from '../../fonts/SamsungOne-400.ttf'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    elevation: 2,
    justifyContent: 'center',
    marginBottom: 500,
    marginHorizontal: 15,
    marginTop: '50%',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    width: '60%',
  },
  text: {
    color: '#000',
    fontFamily: SamsungOne,
    fontSize: 18,
  },
})

export default styles
