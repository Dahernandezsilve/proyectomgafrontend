import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 2,
    marginTop: width * 0.027,
    padding: width * 0.027,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    width: width * 0.9,
  },
  slider: {
    borderRadius: 5,
    height: width * 0.0625,
    overflow: 'hidden',
    width: '100%',
  },
  sliderText: {
    color: '#444444',
    fontSize: width * 0.04,
  },
  sliderTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: width * 0.014,
    paddingLeft: width * 0.014,
    paddingRight: width * 0.014,
    width: '100%',
  },
  sliderThumb: {
    backgroundColor: '#007AFF',
    borderRadius: width * 0.05,
    height: width * 0.04,
    width: width * 0.04,
  },
  sliderTrack: {
    height: width * 0.1,
    width: '90%',
  },
  title: {
    fontSize: width * 0.05,
    marginBottom: width * 0.027,
    marginLeft: width * 0.027,
    marginTop: width * 0.027,
    textAlign: 'left',
  },
  valueContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#EFEFEF',
    borderRadius: 5,
    elevation: 2,
    marginTop: width * 0.027,
    padding: width * 0.014,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    width: width * 0.95,
  },
  valueText: {
    fontSize: width * 0.05,
  },
})

export default styles
