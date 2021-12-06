import React from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";

const PlantList = ({ plants, setPlants }) => {
  return (
    <View>
      <Text>Lista</Text>
      <SafeAreaView>
        <FlatList
          data={plants}
          renderItem={({ item }) => (
            <Text>{item.name}</Text>
            // {/* <Text>{item.wateringDays}</Text>
            // <Text>{item.turningDays}</Text>
            // <Text>{item.spritzingDays}</Text> */}
          )}
          keyExtractor={(item) => item.key}
        />
      </SafeAreaView>
    </View>
  );
};

export default PlantList;
