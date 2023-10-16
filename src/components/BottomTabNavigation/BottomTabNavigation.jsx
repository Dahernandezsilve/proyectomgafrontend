import React from 'react'
import PropTypes from 'prop-types'
import {
  Ionicons,
  AntDesign,
  FontAwesome,
  Octicons,
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
  MaterialIcons,
} from '@expo/vector-icons'
import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native'
import styles from './styles'

const BottomTabNavigation = ({
  activeTab, tabs, navigation,
}) => {
  const verify = (tab, index) => {
    const iconColor = activeTab === index ? 'white' : 'black'
    switch (tab.method) {
      case 'Ionicons':
        return <Ionicons name={tab.icon} size={24} color={iconColor} />
      case 'AntDesign':
        return <AntDesign name={tab.icon} size={24} color={iconColor} />
      case 'FontAwesome':
        return <FontAwesome name={tab.icon} size={24} color={iconColor} />
      case 'Octicons':
        return <Octicons name={tab.icon} size={24} color={iconColor} />
      case 'Entypo':
        return <Entypo name={tab.icon} size={24} color={iconColor} />
      case 'MaterialCommunityIcons':
        return <MaterialCommunityIcons name={tab.icon} size={24} color={iconColor} />
      case 'FontAwesome5':
        return <FontAwesome5 name={tab.icon} size={24} color={iconColor} />
      case 'MaterialIcons':
        return <MaterialIcons name={tab.icon} size={24} color={iconColor} />
      default:
        return null
    }
  }

  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.tabItem,
            activeTab === index ? styles.activeTab : null,
          ]}
          onPress={() => navigation.navigate(tab.route)}
        >
          {verify(tab, index)}
          <Text style={[styles.tabText, activeTab === index ? styles.activeTabText : null]}>
            {tab.label}
          </Text>
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
