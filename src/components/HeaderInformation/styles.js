import { StyleSheet } from 'react-native'
import { SamsungOne } from '../../fonts/SamsungOne-400.ttf'


const styles = StyleSheet.create({
  activeTabButton: {
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#FFC107',
    borderBottomWidth: 3,
    color: '#FFC107',
    width: '33.33%',
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
    borderBottomWidth: 1,
    elevation: 2,
    paddingTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  headerText: {
    fontFamily: SamsungOne,
    fontSize: 24,
    marginBottom: 8,
    textAlign: 'center',
  },
  tabButton: {
    backgroundColor: 'transparent',
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: 3,
    borderRadius: 0,
    color: '#FFC107',
    marginHorizontal: 4,
    paddingHorizontal: 16,
    paddingVertical: 8,
    width: '33.33%',
  },
  tabButtonText: {
    color: '#000000',
    fontFamily: SamsungOne,
    fontSize: 20,
    textAlign: 'center',
  },
})

export default styles
