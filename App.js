import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HeaderGalley from './src/components/headerGalley'
import HeaderInformation from './src/components/headerInformation'
import LoginAdministrator from './src/screens/LoginAdministrator'
import HomeWorkerScreen from './src/screens/HomeWorkerScreen'
import CreationScreen from './src/screens/CreationScreen'
import DetailsScreen from './src/screens/DetailsScreen'

const Stack = createNativeStackNavigator();

const App = () => {
  const renderHeader = () => <HeaderGalley lotes={['Lote 1', 'Lote 2']}/>;
  const renderInformation = () => <HeaderInformation />

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Administrador">
        <Stack.Screen
          name='Administador'
          component={LoginAdministrator}
        />
        <Stack.Screen
          name="Home"
          component={HomeWorkerScreen}
          options={{header: renderHeader}}
          />
        <Stack.Screen 
          name="Galeras"
          component={DetailsScreen}
          />
        <Stack.Screen
          name="Creacion"
          component={CreationScreen}
          options={{header: renderInformation}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
