import { StyleSheet, Dimensions } from 'react-native'
import { SamsungOne } from '../../fonts/SamsungOne-400.ttf'

const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  activeTabButton: {
    borderBottomColor: '#FFC107',
    borderBottomWidth: 3,
    color: '#FFC107',
  },
  activeTabButtonText: {
    color: '#FFC107',
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 1,
  },
  headerContainer: {
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: 4,
    elevation: 2,
    paddingBottom: windowWidth * 0.02,
    paddingTop: windowWidth * 0.05,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  headerText: {
    fontFamily: SamsungOne,
    fontSize: windowWidth * 0.06,
    marginBottom: windowWidth * 0.02,
    textAlign: 'center',
    width: windowWidth,
  },
  tabButton: {
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: 3,
    borderRadius: 0,
    color: '#FFC107',
    paddingHorizontal: windowWidth * 0.04,
    paddingVertical: windowWidth * 0.02,
  },
  tabButtonText: {
    fontFamily: SamsungOne,
    fontSize: windowWidth * 0.060,
    textAlign: 'center',
  },
})

export default styles
