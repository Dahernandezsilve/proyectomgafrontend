import React from 'react'
import {
  View, TouchableOpacity, Text,
} from 'react-native'
import styles from './styles'

const BottomTabNavigation = ({ activeTab, setActiveTab, tabs, navigation }) => (
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
        <Text style={styles.tabText}>{tab.label}</Text>
      </TouchableOpacity>
    ))}
  </View>
)

export default BottomTabNavigation
