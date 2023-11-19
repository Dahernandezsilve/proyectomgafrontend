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
  const lotes = ['Mi granja', 'Crear galera']
  const [activeTab, setActiveTab] = useState(lotes[1])

  const navigateToGaleras = async () => {
    navigation.navigate('Home')
  }

  const tabs = [
    {
      label: 'Informe', route: 'Home', icon: 'ios-home', method: 'Ionicons',
    },
    {
      label: 'Medición', route: 'Home', icon: 'new-message', method: 'Entypo',
    },
    {
      label: 'Granja', route: 'Crear galera', icon: 'book', method: 'Entypo',
    },
    {
      label: 'Personal', route: 'PersonalScreen', icon: 'people-alt', method: 'MaterialIcons',
    },
  ]

  const [activeTabb] = useState(2)

  return (
    <View style={styles.container}>
      <HeaderInformation
        title="Granja"
        customTitles={['Home', 'Crear galera']}
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
        </View>
      </ScrollView>
      <View style={styles.bottomTabNavigator}>
        <BottomTabNavigation
          activeTab={activeTabb}
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
