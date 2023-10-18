import React, { useState } from 'react'
import {
  View, Text, TextInput, ScrollView,
} from 'react-native'
import PropTypes from 'prop-types'
import { CardGaleraAdmin, HeaderInformation, BottomTabNavigation } from '../../components'
import styles from './styles'

const galera = ['Jose Fernandez', 'Esteban Escalante', 'Raul Vasquez']
const cantidadAlimento = ['4356 7890', '9234 5632', '1208 6684']
const pesado = ['Oratorio', 'Cuilapa', 'Barberena']
const decesos = ['Encargado de Lote', 'Encargado de Lote', 'Encargado de Lote']

const NewGalleyScreen = ({ navigation }) => {
  const lotes = ['Mi granja', 'Asignacion', 'Crear galera']
  const [activeTab, setActiveTab] = useState(lotes[2])

  const navigateToGaleras = async () => {
    navigation.navigate('Creacion')
  }

  const tabs = [
    {
      label: 'Informe', route: 'Home', icon: 'home', method: 'AntDesign',
    },
    {
      label: 'Medición', route: 'Administrador', icon: 'bird', method: 'MaterialCommunityIcons',
    },
    {
      label: 'Granja', route: 'NGalley', icon: 'line-graph', method: 'Entypo',
    },
    {
      label: 'Personal', route: 'Administrador', icon: 'people', method: 'Octicons',
    },
  ]

  const [activeTabb, setActiveTabb] = useState(2)

  return (
    <View style={styles.container}>
      <HeaderInformation
        title="Granja"
        customTitles={['Mi granja', 'Asignacion', 'Crear galera']}
        lotes={lotes}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        showLote={false}
        navigation={navigation}
        shouldNavigate={true}
      />
      <ScrollView>
        <View style={styles.container}>

          <View style={styles.formGroup}>
            <Text style={styles.label}>No. galera:</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingrese el número de galera"
              keyboardType="numeric"
              maxLength={2}
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
              maxLength={4}
            />
          </View>

          <View style={styles.rectangle}>
            <Text style={styles.workerTitle}>Asignar trabajador</Text>
          </View>

          {galera.map((nombre, index) => (
            <CardGaleraAdmin
              // eslint-disable-next-line react/no-array-index-key
              key={index}
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
      <View style={styles.bottomTabNavigator}>
        <BottomTabNavigation
          activeTab={activeTabb}
          setActiveTab={setActiveTabb}
          tabs={tabs}
          navigation={navigation}
        />
      </View>
    </View>

  )
}

NewGalleyScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}

export default NewGalleyScreen
