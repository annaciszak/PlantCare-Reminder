import React, { useState } from "react";
import { Text, View } from "react-native";

const PlantScreen = ({ route, navigation }) => {
  const item = route.params.item;
  return (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.wateringDays}</Text>
      <Text>{JSON.stringify(item.wateringDateTime)}</Text>
      <Text>{JSON.stringify(item.firstWateringDateTime)}</Text>
      <Text>{item.spritzingDays}</Text>
      <Text>{JSON.stringify(item.spritzingDateTime)}</Text>
      <Text>{JSON.stringify(item.firstSpritzingDateTime)}</Text>
      <Text>{item.turningDays}</Text>
      <Text>{JSON.stringify(item.turningDateTime)}</Text>
      <Text>{JSON.stringify(item.firstTurningDateTime)}</Text>
      <Text>{JSON.stringify(item.firstTurningDateTime.getHours())}</Text>
    </View>
  );
};

export default PlantScreen;
