import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    height,
    justifyContent: 'center',
    width,
  },
})

export default styles
