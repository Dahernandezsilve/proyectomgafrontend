const styles = StyleSheet.create({
  container: {
    alignSelf: 'center', // Alinea horizontalmente el componente
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 2,
    marginTop: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    width: '90%',
  },
  slider: {
    borderRadius: 5, // radio de las esquinas
    height: 25, // altura del slider
    overflow: 'hidden', // para recortar el borde del slider si se excede su tamaño
    width: '100%',
  },
  sliderText: {
    color: '#444444',
    fontSize: 16,
  },
  sliderTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    width: '100%',
  },
  sliderThumb: {
    backgroundColor: '#007AFF', // color del botón
    borderRadius: 10, // radio del botón
    height: 20, // altura del botón
    width: 20, // ancho del botón que se arrastra para cambiar el valor del slider
  },
  sliderTrack: {
    height: 100,
    width: '90%',
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 10,
    marginTop: 10,
    textAlign: 'left',
  },
  valueContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#EFEFEF', // Color gris claro
    borderRadius: 5,
    elevation: 2,
    marginTop: 10,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    width: '95%',
  },
  valueText: {
    fontSize: 20,
  },
})

export default styles
