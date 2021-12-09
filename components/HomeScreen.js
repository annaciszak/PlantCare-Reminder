import React, { useState, useEffect } from "react";
import { View } from "react-native";
import * as Notifications from "expo-notifications";

import PlantList from "./PlantList";
import ModalAddPlant from "./ModalAddPlant";

const HomeScreen = ({ navigation }) => {
  const [plants, setPlants] = useState([]);
  const [modalVisibility, setModalVisibility] = useState(false);

  const handleAddPlant = (plant) => {
    const newPlantList = [...plants, plant];
    setPlants(newPlantList);
    setModalVisibility(false);
    console.log(plants);
  };

  const askPermission = () => {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
      }),
    });
  };

  useEffect(() => {
    askPermission();
  });

  return (
    <View style={{ marginTop: 100, backgroundColor: "#ffffff" }}>
      <PlantList
        plants={plants}
        setPlants={setPlants}
        navigation={navigation}
      />
      <ModalAddPlant
        modalVisibility={modalVisibility}
        setModalVisibility={setModalVisibility}
        handleAddPlant={handleAddPlant}
        plants={plants}
      />
    </View>
  );
};

export default HomeScreen;
