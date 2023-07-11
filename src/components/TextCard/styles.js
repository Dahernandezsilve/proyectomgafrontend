import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    elevation: 2,
    marginHorizontal: width * 0.04,
    marginTop: width * 0.027,
    padding: width * 0.027,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    width: width * 0.4,
  },
  text: {
    color: '#000',
    fontFamily: 'SamsungOne',
    fontSize: width * 0.05,
  },
})

export default styles
