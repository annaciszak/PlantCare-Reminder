import React, { useState } from "react";
import { Text, View } from "react-native";

const PlantScreen = ({ route, navigation }) => {
  const { name, wateringDays, wateringDateTime } = route.params;

  return (
    <View>
      <Text>{name}</Text>
      <Text>{wateringDays}</Text>
      <Text>{JSON.stringify(wateringDateTime)}</Text>
    </View>
  );
};

export default PlantScreen;
