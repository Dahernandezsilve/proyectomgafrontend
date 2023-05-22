import * as React from "react";
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

const Stack = createNativeStackNavigator();

const App = () => {
  const renderHeaderGalley = () => (
    <HeaderGalley
      title="Galeras y tareas pendientes"
      lotes={["Lote 1", "Lote 2"]}
    />
  );
  const renderHeaderInform = () => (
    <HeaderGalley title="Informe" lotes={["Lote 1", "Lote 2", "Lote 3"]} />
  );
  const renderInformation = () => <HeaderInformation />;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Administrador">
        <Stack.Screen name="Opción de Login" component={ChoiceScreen} />
        <Stack.Screen name="Administador" component={LoginAdministrator} />
        <Stack.Screen
          name="Home"
          component={ReportScreenAdmin}
          options={{ header: renderHeaderInform }}
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
