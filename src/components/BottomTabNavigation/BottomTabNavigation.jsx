import React from 'react'
import PropTypes from 'prop-types'
import {
  Ionicons, AntDesign, FontAwesome, Octicons,
} from '@expo/vector-icons'
import {
  View, TouchableOpacity, Text,
} from 'react-native'
import styles from './styles'

const BottomTabNavigation = ({
  activeTab, tabs, navigation,
}) => {
  const verify = tab => {
    switch (tab.method) {
      case 'Ionicons':
        return <Ionicons name={tab.icon} size={24} color="black" />
      case 'AntDesign':
        return <AntDesign name={tab.icon} size={24} color="black" />
      case 'FontAwesome':
        return <FontAwesome name={tab.icon} size={24} color="black" />
      case 'Octicons':
        return <Octicons name={tab.icon} size={24} color="black" />
      default:
        return null
    }
  }

  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          style={[
            styles.tabItem,
            activeTab === index ? styles.activeTab : null,
          ]}
          onPress={() => navigation.navigate(tab.route)}
        >
          {
            verify(tab)
          }
          <Text style={styles.tabText}>{tab.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

BottomTabNavigation.propTypes = {
  activeTab: PropTypes.number.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired,
    }),
  ).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
}

export default BottomTabNavigation
