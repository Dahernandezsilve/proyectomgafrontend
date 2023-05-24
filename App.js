import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HeaderGalley from "./src/components/headerGalley";
import HeaderInformation from "./src/components/headerInformation";
import LoginAdministrator from "./src/screens/LoginAdministrator";
import HomeWorkerScreen from "./src/screens/HomeWorkerScreen";
import CreationScreen from "./src/screens/CreationScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import ReportScreenAdmin from "./src/screens/ReportScreenAdmin";
import ChoiceScreen from "./src/screens/ChoiceScreen";
import LoginWorker from "./src/screens/LoginWorker";
import { useFonts } from 'expo-font';
import HeaderCreation from "./src/components/headerCreation";

const Stack = createNativeStackNavigator();

const App = () => {
  const lotes = ['20','1','2']
  const [activeTab, setActiveTab] = useState(lotes[0]);

  const renderHeaderGalley = () => (
    <HeaderGalley
      title="Galeras y tareas pendientes"
      lotes={lotes}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    />
  );

  const renderHeaderInform = () => (
    <HeaderInformation
      title="Informe"
      lotes={lotes}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    />
  );

  const renderInformation = () => (
    <HeaderCreation />
  );

  const [fontsLoaded] = useFonts({
    SamsungOne: require('./src/fonts/SamsungOne-400.ttf'),
  });

  useEffect(() => {
    // Verificar si las fuentes se han cargado correctamente
    if (!fontsLoaded) {
      console.log('Las fuentes no se han cargado correctamente');
    } else {
      console.log('se cargaron correctamente')
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Otra pantalla de carga o null si no deseas mostrar nada
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SelectUser">
        <Stack.Screen name="SelectUser" component={ChoiceScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Administrador" component={LoginAdministrator} options={{header: () =>null}}/>
        <Stack.Screen name="Trabajador" component={LoginWorker} options={{header: () => null}}/>
        <Stack.Screen
          name="Home"
          options={{
            header: () => renderHeaderInform({ activeTab, setActiveTab })
          }}
        >
          {(props) => (
            <ReportScreenAdmin {...props} setActiveTab={setActiveTab} activeTab={activeTab} />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="HomeWorker"
          component={HomeWorkerScreen}
          options={{header: renderHeaderGalley}}
        />
        <Stack.Screen name="Galeras" component={DetailsScreen} />
        <Stack.Screen
          name="Creacion"
          component={CreationScreen}
          options={{ header: renderInformation }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
