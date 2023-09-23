import { StyleSheet, Dimensions } from 'react-native'
import { SamsungOne } from '../../fonts/SamsungOne-400.ttf'

const { width } = Dimensions.get('window')
const buttonWidthPercentage = 100 / 2 // Porcentaje del ancho de la pantalla para los botones

const styles = StyleSheet.create({
  activeTabButton: {
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#2B4985',
    borderBottomWidth: 3,
    color: '#2B4985',
    width: `${buttonWidthPercentage}%`,
  },
  activeTabButtonText: {
    color: '#2B4985',
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
    paddingTop: 0.05 * width, // 5% del ancho de la pantalla
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  headerText: {
    fontFamily: SamsungOne,
    fontSize: 0.06 * width, // 6% del ancho de la pantalla
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
    paddingHorizontal: 0.1 * width, // 10% del ancho de la pantalla
    paddingVertical: 0.04 * width, // 4% del ancho de la pantalla
    width: `${buttonWidthPercentage}%`,
  },
  tabButtonText: {
    color: '#000000',
    fontFamily: SamsungOne,
    fontSize: 0.05 * width, // 5% del ancho de la pantalla
    textAlign: 'center',
  },
})

export default styles
