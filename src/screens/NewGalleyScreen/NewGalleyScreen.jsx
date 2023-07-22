import React from 'react'
import {
  View, Text, TextInput, ScrollView,
} from 'react-native'
import { CardGaleraAdmin } from '../../components'
import styles from './styles'

const navigateToGaleras = async ({ navigation }) => {
  navigation.navigate('Creacion')
}

const galera = ['Jose Fernandez', 'Esteban Escalante', 'Raul Vasquez']
const cantidadAlimento = ['4356 7890', '9234 5632', '1208 6684']
const pesado = ['Oratorio', 'Cuilapa', 'Barberena']
const decesos = ['Encargado de Lote', 'Encargado de Lote', 'Encargado de Lote']

const NewGalleyScreen = () => (
  <ScrollView>
    <View style={styles.container}>

      <View style={styles.formGroup}>
        <Text style={styles.label}>No. galera:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese el número de galera"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Tipo de población:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese el tipo de población"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Cantidad de pollos:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese la cantidad de pollos"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.rectangle}>
        <Text style={styles.workerTitle}>Asignar trabajador</Text>
      </View>

      {galera.map((nombre, index) => (
        <CardGaleraAdmin
          ca="#FFFFFF"
          msgCA=""
          numberCA={null}
          customValues={{
            galera: nombre,
            cantidadAlimento: cantidadAlimento[index],
            pesado: pesado[index],
            decesos: decesos[index],
            navigateToGaleras,
          }}
          customTitles={['Nombre:', 'Telefono:', 'Direccion:', 'Puesto:']}
        />
      ))}

    </View>
  </ScrollView>
)

export default NewGalleyScreen
