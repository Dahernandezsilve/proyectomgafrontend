import { StyleSheet, Dimensions } from 'react-native'
import { SamsungOne } from '../../fonts/SamsungOne-400.ttf'

const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  info: {
    color: '#2B4985',
    fontFamily: SamsungOne,
    marginTop: windowWidth * 0.07,
  },
  infoContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: windowWidth * 0.05,
  },
  rectangle: {
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderColor: '#2B4985',
    marginTop: windowWidth * 0.005,
    paddingHorizontal: windowWidth * 0.05,
    paddingVertical: windowWidth * 0.005,
  },
});

export default styles;
