import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as Font from 'expo-font'
import {
  ChoiceScreen, DetailsScreen, CreationScreen, HomeWorkerScreen, LoginAdministrator,
} from './src/screens'
import ReportScreenAdmin from './src/screens/ReportScreenAdmin'
import LoginWorker from './src/screens/LoginWorker/LoginWorker'

const Stack = createNativeStackNavigator()

const loadCustomFonts = async () => {
  await Font.loadAsync({
    // eslint-disable-next-line global-require
    SamsungOne: require('./src/fonts/SamsungOne-400.ttf'),
  })
}

const App = () => {
  useEffect(() => {
    loadCustomFonts()
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SelectUser">
        <Stack.Screen name="SelectUser" component={ChoiceScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Administrador" component={LoginAdministrator} options={{ header: () => null }} />
        <Stack.Screen name="Trabajador" component={LoginWorker} options={{ header: () => null }} />
        <Stack.Screen
          name="HomeWorker"
          component={HomeWorkerScreen}
          options={{ header: () => null }}
        />
        <Stack.Screen name="Galeras" component={DetailsScreen} />
        <Stack.Screen
          name="Creacion"
          component={CreationScreen}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Home"
          options={{ header: () => null }}
        >
          {({ route, navigation }) => (
            <ReportScreenAdmin
              route={route}
              navigation={navigation}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
