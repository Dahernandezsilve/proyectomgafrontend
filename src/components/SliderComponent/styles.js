import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    justifyContent: 'center',
    marginLeft: width * 0.027,
    marginRight: width * 0.027,
  },
})

export default styles
