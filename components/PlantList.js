import React from "react";
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../styles/styles";
import Typography from "../styles/Typography";

const PlantList = ({ plants, setPlants, navigation }) => {
  const handleDeleteClick = (id) => {
    const removePlant = plants.filter((plant) => {
      return plant.key !== id;
    });
    AsyncStorage.setItem("storedPlants", JSON.stringify(removePlant))
      .then(() => {
        setPlants(removePlant);
        console.log(plants);
      })
      .catch((error) => console.log(error));
  };

  return (
    <View style={{ marginTop: 50, marginBottom: 70 }}>
      <SafeAreaView style={{}}>
        <FlatList
          data={plants}
          renderItem={({ item }) => (
            <View style={styles.plantItem}>
              <TouchableOpacity
                onPress={() => navigation.navigate("PlantScreen", { item })}
                style={{ flex: 4 }}
              >
                <Text style={Typography.plantItem}>{item.name}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleDeleteClick(item.key)}
                style={{ flex: 1, alignItems: "flex-end" }}
              >
                <Ionicons name="trash-outline" size={24} color="#000" />
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.key}
          style={{ paddingBottom: 100 }}
        />
      </SafeAreaView>
    </View>
  );
};

export default PlantList;
