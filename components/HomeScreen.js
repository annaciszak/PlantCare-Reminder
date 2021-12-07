import React, { useState } from "react";

import { View } from "react-native";

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
