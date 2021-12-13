import React from "react";
import { Text, View, Image } from "react-native";
import moment from "moment";

import styles from "../styles/styles";

const PlantScreen = ({ route, navigation }) => {
  const item = route.params.item;

  const displayDate = (dateVal) => {
    return moment(dateVal).format("DD/MM/YYYY");
  };

  const displayTime = (dateTimeVal) => {
    return moment(dateTimeVal).format("HH:mm");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.plantName}>{item.name}</Text>
      <View style={styles.plantInfo}>
        <Image
          source={require("../assets/img/plant.png")}
          style={{
            width: 80,
            height: 80,
            alignSelf: "flex-end",
            position: "relative",
            right: 20,
            top: 0,
          }}
        />
        <Text style={[styles.activityTitlePlant, { marginTop: -25 }]}>
          Podlewanie
        </Text>
        <View style={styles.modalRow}>
          <Text style={styles.plantText}>Częstotliwość powiadomień:</Text>
          {item.wateringFrequency > 1 ? (
            <Text style={{ flex: 2 }}>co {item.wateringFrequency} dni</Text>
          ) : (
            <Text style={{ flex: 2 }}>codziennie</Text>
          )}
        </View>
        <View style={styles.modalRow}>
          <Text style={styles.plantText}>Godzina powiadomienia:</Text>
          <Text style={{ flex: 2 }}>
            {displayTime(item.wateringDateTime).toString()}
          </Text>
        </View>
        <View style={styles.modalRow}>
          <Text style={styles.plantText}>Pierwsze powiadomienie:</Text>
          <Text style={{ flex: 2 }}>
            {displayDate(item.firstWateringDateTime).toString()}
          </Text>
        </View>
        <Text style={styles.activityTitlePlant}>Zraszanie</Text>
        <View style={styles.modalRow}>
          <Text style={styles.plantText}>Częstotliwość powiadomień:</Text>
          {item.spritzingFrequency > 1 ? (
            <Text style={{ flex: 2 }}>co {item.spritzingFrequency} dni</Text>
          ) : (
            <Text style={{ flex: 2 }}>codziennie</Text>
          )}
        </View>
        <View style={styles.modalRow}>
          <Text style={styles.plantText}>Godzina powiadomienia:</Text>
          <Text style={{ flex: 2 }}>
            {displayTime(item.spritzingDateTime).toString()}
          </Text>
        </View>
        <View style={styles.modalRow}>
          <Text style={styles.plantText}>Pierwsze powiadomienie:</Text>
          <Text style={{ flex: 2 }}>
            {displayDate(item.firstSpritzingDateTime).toString()}
          </Text>
        </View>
        <Text style={styles.activityTitlePlant}>Obracanie doniczki</Text>
        <View style={styles.modalRow}>
          <Text style={styles.plantText}>Częstotliwość powiadomień:</Text>
          {item.turningFrequency > 1 ? (
            <Text style={{ flex: 2 }}>co {item.turningFrequency} dni</Text>
          ) : (
            <Text style={{ flex: 2 }}>codziennie</Text>
          )}
        </View>
        <View style={styles.modalRow}>
          <Text style={styles.plantText}>Godzina powiadomienia:</Text>
          <Text style={{ flex: 2 }}>
            {displayTime(item.turningDateTime).toString()}
          </Text>
        </View>
        <View style={styles.modalRow}>
          <Text style={styles.plantText}>Pierwsze powiadomienie:</Text>
          <Text style={{ flex: 2 }}>
            {displayDate(item.firstTurningDateTime).toString()}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PlantScreen;
