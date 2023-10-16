import { StyleSheet, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  activeTab: {
    backgroundColor: '#007934',
    elevation: 4, // Añadir sombreado en el tab activo
  },
  activeTabText: {
    color: '#fff',
  },
  container: {
    backgroundColor: '#f0f0f0',
    borderTopColor: '#ccc',
    borderTopWidth: 3,
    flexDirection: 'row',
    height: windowWidth * 0.16,
  },
  tabItem: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: windowWidth / 3, // Ajustar el tamaño de los tabs dividiendo el ancho de la pantalla en 3
  },
  tabText: {
    color: '#000',
    textAlign: 'center', // Alinear el texto en el centro verticalmente
  },
})

export default styles
