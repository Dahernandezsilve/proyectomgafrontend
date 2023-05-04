import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SliderComponent} from './src/components/sliderComponent';
import { ModalComponent } from './src/components/modalComponent';



function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Ir a Galeras"
        onPress={() => navigation.navigate('Galeras')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Ir a creacion de Galeras"
        onPress={() => navigation.navigate('Creacion')}
      />
    </View>
  );
}

function CreacionScreen({ navigation }) {
  return (
    <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Ir a Home"
        onPress={() => navigation.navigate('Home')}
      />

      <Text>Cantidad de pollos pesados</Text>
    <SliderComponent></SliderComponent>
    <Text>Cantidad de alimento proporcionado</Text>
    <SliderComponent></SliderComponent>
    <Text>Peso medido</Text>
    <SliderComponent></SliderComponent>
    <ModalComponent></ModalComponent>
    </View>
  );
}

const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Galeras" component={DetailsScreen} />
        <Stack.Screen name="Creacion" component={CreacionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




export default App;
