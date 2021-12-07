import React from "react";
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

const PlantList = ({ plants, setPlants, navigation }) => {
  return (
    <View>
      <Text>Lista</Text>
      <SafeAreaView>
        <FlatList
          data={plants}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("PlantScreen", { item })}
            >
              <Text>{item.name}</Text>
            </TouchableOpacity>
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
