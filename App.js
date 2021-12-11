import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen";
import PlantScreen from "./components/PlantScreen";

import AsyncStorage from "@react-native-async-storage/async-storage";
import AppLoading from "expo-app-loading";

const Stack = createNativeStackNavigator();

function App() {
  const [ready, setReady] = useState(false);
  const [plants, setPlants] = useState([]);

  const LoadPlants = () => {
    AsyncStorage.getItem("storedPlants")
      .then((data) => {
        if (data !== null) {
          setPlants(JSON.parse(data));
        }
      })
      .catch((error) => console.log(error));
  };

  if (!ready) {
    return (
      <AppLoading
        startAsync={LoadPlants}
        onFinish={() => setReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: "" }}
        />
        <Stack.Screen name="Home" options={{ title: "PlantCare - Reminder" }}>
          {(props) => (
            <HomeScreen {...props} plants={plants} setPlants={setPlants} />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="PlantScreen"
          component={PlantScreen}
          options={{ title: "" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
