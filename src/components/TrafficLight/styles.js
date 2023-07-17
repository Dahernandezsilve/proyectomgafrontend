import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    borderRadius: 5,
    elevation: 2,
    height: width * 0.06,
    justifyContent: 'center',
    marginBottom: width * 0.007,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    width: width * 0.35,
  },
  boxHeaderText: {
    color: 'black',
    fontFamily: 'SamsungOne',
    fontSize: width * 0.036,
    marginBottom: width * 0.007,
  },
  boxText: {
    color: 'white',
    fontFamily: 'SamsungOne',
    fontSize: width * 0.045,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    elevation: 4,
    marginTop: width * 0.0375,
    padding: width * 0.009,
    paddingBottom: width * 0.003,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  greenBox: {
    backgroundColor: 'green',
  },
  orangeBox: {
    backgroundColor: 'orange',
  },
  redBox: {
    backgroundColor: 'red',
  },
})

export default styles
