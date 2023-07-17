import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons'
import { PropTypes } from 'prop-types'

const Tab = createBottomTabNavigator()

const TabNavigator = ({
  Component1, Component2, Component3, Component4,
}) => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={Component1}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Component2}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="person" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Settings"
      component={Component3}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="settings" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={Component4}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="notifications" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
)

TabNavigator.propTypes = {
  Component1: PropTypes.elementType.isRequired,
  Component2: PropTypes.elementType.isRequired,
  Component3: PropTypes.elementType.isRequired,
  Component4: PropTypes.elementType.isRequired,
}

export default TabNavigator
