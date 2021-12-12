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

import {
  useFonts,
  Lato_100Thin,
  Lato_100Thin_Italic,
  Lato_300Light,
  Lato_300Light_Italic,
  Lato_400Regular,
  Lato_400Regular_Italic,
  Lato_700Bold,
  Lato_700Bold_Italic,
  Lato_900Black,
  Lato_900Black_Italic,
} from "@expo-google-fonts/lato";

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
            // {/* <Text>{item.wateringDays}</Text>
            // <Text>{item.turningDays}</Text>
            // <Text>{item.spritzingDays}</Text> */}
          )}
          keyExtractor={(item) => item.key}
          style={{ paddingBottom: 100 }}
        />
      </SafeAreaView>
    </View>
  );
};

export default PlantList;
