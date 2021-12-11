import React, { useState, useEffect } from "react";
import { View } from "react-native";
import * as Notifications from "expo-notifications";
import { AdMobBanner } from "expo-ads-admob";
import PlantList from "./PlantList";
import ModalAddPlant from "./ModalAddPlant";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../styles/styles";

const HomeScreen = ({ plants, setPlants, navigation }) => {
  const [modalVisibility, setModalVisibility] = useState(false);

  const handleAddPlant = (plant) => {
    const newPlantList = [...plants, plant];

    AsyncStorage.setItem("storedPlants", JSON.stringify(newPlantList)).then(
      () => {
        setPlants(newPlantList);
        setModalVisibility(false);
        console.log(plants);
      }
    );
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
    <View style={styles.container}>
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
      <AdMobBanner
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
        servePersonalizedAds // true or false
      />
    </View>
  );
};

export default HomeScreen;
