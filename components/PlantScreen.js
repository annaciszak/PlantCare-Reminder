import React, { useState } from "react";
import { Text, View } from "react-native";

const PlantScreen = ({ route, navigation }) => {
  const item = route.params.item;

  return (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.wateringDays}</Text>
      <Text>{item.wateringDateTime.toString()}</Text>
      <Text>{item.firstWateringDateTime.toString()}</Text>
      <Text>{item.spritzingDays}</Text>
      <Text>{item.spritzingDateTime.toString()}</Text>
      <Text>{item.firstSpritzingDateTime.toString()}</Text>
      <Text>{item.turningDays}</Text>
      <Text>{item.turningDateTime.toString()}</Text>
      <Text>{item.firstTurningDateTime.toString()}</Text>
    </View>
  );
};

export default PlantScreen;
