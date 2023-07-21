import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    elevation: 2,
    margin: 15,
    padding: 10,
  },
  buttonAsignar: {
    align: 'flex-start',
    backgroundColor: '#FFF',
    display: 'flex',
    gap: 10,
    padding: 10,
    width: 332,

  },
  buttonContainer: {
    margin: 5,
    padding: 10,
  },
  card: {
    height: 10,
    width: 10,
  },
  container: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: 5,
    padding: 10,
  },
  input: {
    borderWidth: 1,
    height: 40,
    margin: 12,
    padding: 10,
  },
  inputsContainer: {
    backgroundColor: '#798281',
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    width: 700,
  },
  text: {
    alignItems: 'center',
    fontSize: 30,
  },
})

export default styles
