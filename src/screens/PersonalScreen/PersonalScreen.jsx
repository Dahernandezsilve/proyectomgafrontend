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

const PersonalScreen = ({ navigation }) => {
  const lotes = ['20', '1', '2']
  const [activeTab, setActiveTab] = useState(lotes[0])

  const navigateToGaleras = async () => {
    navigation.navigate('Creacion')
  }

  const tabs = [
    {
      label: 'Informe', route: 'Home', icon: 'ios-home', method: 'Ionicons',
    },
    {
      label: 'Medición', route: 'Administrador', icon: 'new-message', method: 'Entypo',
    },
    {
      label: 'Granja', route: 'NGalley', icon: 'book', method: 'Entypo',
    },
    {
      label: 'Personal', route: 'PersonalScreen', icon: 'people-alt', method: 'MaterialIcons',
    },
  ]

  const [activeTabb] = useState(3)

  return (
    <View style={styles.container}>
      <HeaderInformation
        title="Personal"
        customTitles={['Mi personal', 'Ranking', 'Añadir personal']}
        lotes={lotes}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        showLote={false}
      />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.rectangle}>
            <Text style={styles.workerTitle}>Personal</Text>
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
          tabs={tabs}
          navigation={navigation}
        />
      </View>
    </View>

  )
}

PersonalScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}

export default PersonalScreen
