import { StyleSheet } from 'react-native'
import { SamsungOne } from '../../fonts/SamsungOne-400.ttf'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    elevation: 2,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    height: 40,
    justifyContent: 'center',
    marginRight: 5,
    pointerEvents: 'auto',
    width: 40,
  },
  info: {
    color: '#2B4985',
    fontFamily: SamsungOne,
    fontSize: 25,
  },
  infoContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
  },
  line: {
    backgroundColor: '#EAEAEA',
    marginTop: 10,
  },
  placeholder: {
    width: 0,
  },
  title: {
    fontFamily: SamsungOne,
    fontSize: 30,
    textAlign: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginLeft: -28,
  },
})

export default styles
