import { StyleSheet, Dimensions } from 'react-native'
import { SamsungOne } from '../../fonts/SamsungOne-400.ttf'

const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    elevation: 2,
    paddingHorizontal: windowWidth * 0.04,
    paddingTop: windowWidth * 0.015,
    paddingVertical: windowWidth * 0.04,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: windowWidth * 0.002,
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    height: windowWidth * 0.12,
    justifyContent: 'center',
    marginRight: windowWidth * 0.025,
    pointerEvents: 'auto',
    width: windowWidth * 0.12,
  },
  info: {
    color: '#2B4985',
    fontFamily: SamsungOne,
  },
  infoContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: windowWidth * 0.05,
  },
  line: {
    backgroundColor: '#EAEAEA',
    marginTop: windowWidth * 0.002,
  },
  placeholder: {
    width: 0,
  },
  title: {
    fontFamily: SamsungOne,
    fontSize: windowWidth * 0.06,
    textAlign: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginLeft: -windowWidth * 0.09,
  },
})

export default styles
