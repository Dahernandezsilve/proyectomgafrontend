/* eslint-disable no-undef */
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as Font from 'expo-font'
import { GlobalProvider } from './src/GlobalContext/GlobalContext'
import {
  ChoiceScreen, DetailsScreen, CreationScreen, HomeWorkerScreen, LoginAdministrator,
  CreationScreenAdministrator,
  PersonalScreen,
  CreateGalleyScreen,
  Calculator,
} from './src/screens'
import ReportScreenAdmin from './src/screens/ReportScreenAdmin'
import LoginWorker from './src/screens/LoginWorker/LoginWorker'
import NewGalleyScreen from './src/screens/NewGalleyScreen/NewGalleyScreen'
import MeasurementsHistory from './src/screens/MeasurementsHistory'
import GalleyAssignment from './src/screens/GalleyAssignment'

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
    <GlobalProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SelectUser">
          <Stack.Screen name="SelectUser" component={ChoiceScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Administrador" component={LoginAdministrator} options={{ header: () => null }} />
          <Stack.Screen name="Trabajador" component={LoginWorker} options={{ header: () => null }} />
          <Stack.Screen name="Finalizar galera" component={NewGalleyScreen} options={{ header: () => null, animation: 'none' }} />
          <Stack.Screen name="Crear galera" component={CreateGalleyScreen} options={{ header: () => null, animation: 'none' }} />
          <Stack.Screen name="Calculator" component={Calculator} options={{ header: () => null, animation: 'none' }} />
          <Stack.Screen name="MeasurementsHistory" component={MeasurementsHistory} options={{ header: () => null }} />
          <Stack.Screen name="Asignacion" component={GalleyAssignment} options={{ header: () => null, animation: 'none' }} />
          <Stack.Screen name="PersonalScreen" component={PersonalScreen} options={{ header: () => null, animation: 'none' }} />
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
          <Stack.Screen
            name="CreationScreenAdministrator"
            component={CreationScreenAdministrator}
            options={{ header: () => null }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalProvider>
  )
}

export default App
