import { StyleSheet, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  AbContainer: {
    backgroundColor: '#f0f0f0',
  },
  activeTab: {
    backgroundColor: '#ff8c00',
    borderTopLeftRadius: 10, // Agregar bordes redondeados a la esquina superior izquierda
    borderTopRightRadius: 10, // Agregar bordes redondeados a la esquina superior derecha
    elevation: 4, // Añadir sombreado en el tab activo
  },
  activeTabText: {
    color: '#fff',
    zIndex: -1,
  },
  container: {
    backgroundColor: '#f0f0f0',
    borderTopColor: '#ccc',
    borderTopLeftRadius: 10, // Agregar bordes redondeados a la esquina superior izquierda
    borderTopRightRadius: 10, // Agregar bordes redondeados a la esquina superior derecha
    borderTopWidth: 2,
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
