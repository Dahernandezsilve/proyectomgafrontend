import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons'
import { PropTypes } from 'prop-types'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Tab = createBottomTabNavigator()

const TabNavigator = ({
  component1, component2, component3, component4, nav1, nav2, nav3, nav4,
}) => {
  const navigation = useNavigation()

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={nav1}
        component={component1}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
          tabBarButton: props => (
            <TouchableOpacity onPress={() => navigation.navigate(nav1)}>
              {React.createElement(component1, { ...props })}
            </TouchableOpacity>
          ),
        }}
      />

      <Tab.Screen
        name={nav2}
        component={component2}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" color={color} size={size} />
          ),
          tabBarButton: () => (
            <TouchableOpacity onPress={() => navigation.navigate(nav2)}>
              {component2()}
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name={nav3}
        component={component3}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings" color={color} size={size} />
          ),
          tabBarButton: () => (
            <TouchableOpacity onPress={() => navigation.navigate(nav3)}>
              {component3()}
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name={nav4}
        component={component4}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="notifications" color={color} size={size} />
          ),
          tabBarButton: () => (
            <TouchableOpacity onPress={() => navigation.navigate(nav4)}>
              {component4()}
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  )
}
TabNavigator.propTypes = {
  component1: PropTypes.elementType.isRequired,
  component2: PropTypes.elementType.isRequired,
  component3: PropTypes.elementType.isRequired,
  component4: PropTypes.elementType.isRequired,
}

export default TabNavigator
