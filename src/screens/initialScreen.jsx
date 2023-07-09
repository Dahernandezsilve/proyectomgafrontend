import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
  },
});

const App = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("initialScreen")}
      />
      <StatusBar style={{ backgroundColor: "ed" }} />
    </View>
  );
};

export default App;
