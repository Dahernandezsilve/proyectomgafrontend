import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as Font from 'expo-font'
import HeaderGalley from './src/components/headerGalley'
import HeaderInformation from './src/components/headerInformation'
import LoginAdministrator from './src/screens/LoginAdministrator'
import HomeWorkerScreen from './src/screens/HomeWorkerScreen'
import CreationScreen from './src/screens/CreationScreen'
import DetailsScreen from './src/screens/DetailsScreen'
import ReportScreenAdmin from './src/screens/ReportScreenAdmin'
import ChoiceScreen from './src/screens/ChoiceScreen'
import LoginWorker from './src/screens/LoginWorker'
import HeaderCreation from './src/components/headerCreation'

const Stack = createNativeStackNavigator()

const loadCustomFonts = async () => {
  await Font.loadAsync({
    // eslint-disable-next-line global-require
    SamsungOne: require('./src/fonts/SamsungOne-400.ttf'),
    // Agrega más fuentes personalizadas si es necesario
  })
}

const App = () => {
  const lotes = ['20', '1', '2']
  const [activeTab, setActiveTab] = useState(lotes[0])

  useEffect(() => {
    loadCustomFonts()
  }, [])

  const renderHeaderGalley = () => (
    <HeaderGalley
      title="Galeras y tareas pendientes"
      lotes={lotes}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    />
  )

  const renderHeaderInform = () => (
    <HeaderInformation
      title="Informe"
      lotes={lotes}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    />
  )

  const renderInformation = () => (
    <HeaderCreation />
  )
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SelectUser">
        <Stack.Screen name="SelectUser" component={ChoiceScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Administrador" component={LoginAdministrator} options={{ header: () => null }} />
        <Stack.Screen name="Trabajador" component={LoginWorker} options={{ header: () => null }} />
        <Stack.Screen
          name="Home"
          options={{
            header: () => renderHeaderInform({ activeTab, setActiveTab }),
          }}
        >
          {(route, navigation) => (
            <ReportScreenAdmin
              route={route}
              navigation={navigation}
              setActiveTab={setActiveTab}
              activeTab={activeTab}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="HomeWorker"
          component={HomeWorkerScreen}
          options={{ header: renderHeaderGalley }}
        />
        <Stack.Screen name="Galeras" component={DetailsScreen} />
        <Stack.Screen
          name="Creacion"
          component={CreationScreen}
          options={{ header: renderInformation }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
