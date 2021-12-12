import React, { useState } from "react";
import {
  Modal,
  View,
  TouchableOpacity,
  TextInput,
  Text,
  ScrollView,
} from "react-native";
import moment from "moment";
import * as Notifications from "expo-notifications";
import { AdMobInterstitial } from "expo-ads-admob";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import Watering from "./formComponents/Watering/Watering";
import Turning from "./formComponents/Turning/Turning";
import Spritzing from "./formComponents/Spritzing/Spritzing";
import styles from "../styles/styles";
import Typography from "../styles/Typography";

function create_UUID() {
  var dt = new Date().getTime();
  var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      var r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    }
  );
  return uuid;
}

const ModalAddPlant = ({
  modalVisibility,
  setModalVisibility,
  handleAddPlant,
  plants,
}) => {
  const [plantName, setPlantName] = useState("");
  const [wateringFrequency, setWateringFrequency] = useState(1);
  const [turningFrequency, setTurningFrequency] = useState(1);
  const [spritzingFrequency, setSpritzingFrequency] = useState(1);
  const [wateringDateTime, setWateringDateTime] = useState(
    new Date(0, 0, 0, 16, 30)
  );
  const [firstWateringDateTime, setFirstWateringDateTime] = useState(
    new Date()
  );
  const [spritzingDateTime, setSpritzingDateTime] = useState(
    new Date(0, 0, 0, 16, 30)
  );
  const [firstSpritzingDateTime, setFirstSpritzingDateTime] = useState(
    new Date()
  );
  const [turningDateTime, setTurningDateTime] = useState(
    new Date(0, 0, 0, 16, 30)
  );
  const [firstTurningDateTime, setFirstTurningDateTime] = useState(new Date());
  const [isTurning, setIsTurning] = useState(false);
  const [isSpritzing, setIsSpritzing] = useState(false);

  const handleCloseModal = () => {
    setModalVisibility(false);
  };

  function showInterstitial() {
    AdMobInterstitial.setAdUnitID("ca-app-pub-3940256099942544/1033173712");
    AdMobInterstitial.requestAdAsync().then(() => {
      AdMobInterstitial.showAdAsync().catch((e) => console.log(e));
      // AdMobRewarded.setAdUnitID("ca-app-pub-3940256099942544/5224354917"); // Test ID, Replace with your-admob-unit-id
      // AdMobRewarded.requestAdAsync().then(() => {
      //   AdMobRewarded.showAdAsync().catch((e) => console.log(e));
    });
    handleSubmit();
  }

  const handleTrigger = () => {
    //Watering

    let wateringTime = firstWateringDateTime;
    let hour = wateringDateTime.getHours();
    let min = wateringDateTime.getMinutes();
    wateringTime.setHours(hour);
    wateringTime.setMinutes(min);

    Notifications.scheduleNotificationAsync({
      content: {
        title: "Czas na podlewanie!",
        body: "Podlej swoją roślinę - " + plantName,
      },
      trigger: wateringTime,
    }).catch((reason) => console.log(reason));

    if (isTurning) {
      let turningTime = firstTurningDateTime;
      hour = turningDateTime.getHours();
      min = turningDateTime.getMinutes();
      turningTime.setHours(hour);
      turningTime.setMinutes(min);

      Notifications.scheduleNotificationAsync({
        content: {
          title: "Czas na obracanie doniczki!",
          body: "Obróć swoją roślinę - " + plantName,
        },
        trigger: turningTime,
      }).catch((reason) => console.log(reason));
    }

    if (isSpritzing) {
      let spritzingTime = firstSpritzingDateTime;
      hour = spritzingDateTime.getHours();
      min = spritzingDateTime.getMinutes();
      spritzingTime.setHours(hour);
      spritzingTime.setMinutes(min);

      Notifications.scheduleNotificationAsync({
        content: {
          title: "Czas na zraszanie!",
          body: "Spryskaj swoją roślinę - " + plantName,
        },
        trigger: spritzingTime,
      }).catch((reason) => console.log(reason));
    }
  };

  const handleSubmit = () => {
    handleAddPlant({
      name: plantName,
      wateringDays: wateringFrequency,
      spritzingDays: spritzingFrequency,
      turningDays: turningFrequency,
      wateringDateTime: wateringDateTime,
      firstWateringDateTime: firstWateringDateTime,
      spritzingDateTime: spritzingDateTime,
      firstSpritzingDateTime: firstSpritzingDateTime,
      turningDateTime: turningDateTime,
      firstTurningDateTime: firstTurningDateTime,
      key: create_UUID(),
    });
    setPlantName("");
    setWateringFrequency();
    setTurningFrequency();
    setSpritzingFrequency();
    handleTrigger();
  };

  return (
    <View style={{ flex: 1 }}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisibility}
        onRequestClose={handleCloseModal}
      >
        <ScrollView style={[styles.modalContainer]}>
          <View style={styles.modalItem}>
            <Text
              style={{
                flex: 1,
                color: "#000",
                fontSize: 15,
              }}
            >
              Nazwa
            </Text>
            <TextInput
              onChangeText={(val) => setPlantName(val)}
              value={plantName}
              onSubmitEditing={handleSubmit}
              style={{
                flex: 5,
                borderBottomColor: "#000",
                borderBottomWidth: 1,
              }}
            />
          </View>
          <Watering
            wateringFrequency={wateringFrequency}
            setWateringFrequency={setWateringFrequency}
            wateringDateTime={wateringDateTime}
            setWateringDateTime={setWateringDateTime}
            firstWateringDateTime={firstWateringDateTime}
            setFirstWateringDateTime={setFirstWateringDateTime}
          />
          <Spritzing
            spritzingFrequency={spritzingFrequency}
            setSpritzingFrequency={setSpritzingFrequency}
            spritzingDateTime={spritzingDateTime}
            setSpritzingDateTime={setSpritzingDateTime}
            firstSpritzingDateTime={firstSpritzingDateTime}
            setFirstSpritzingDateTime={setFirstSpritzingDateTime}
            isSpritzing={isSpritzing}
            setIsSpritzing={setIsSpritzing}
          />
          <Turning
            turningFrequency={turningFrequency}
            setTurningFrequency={setTurningFrequency}
            turningDateTime={turningDateTime}
            setTurningDateTime={setTurningDateTime}
            firstTurningDateTime={firstTurningDateTime}
            setFirstTurningDateTime={setFirstTurningDateTime}
            isTurning={isTurning}
            setIsTurning={setIsTurning}
          />
          <View style={[styles.modalRow, styles.btnRow]}>
            <TouchableOpacity
              onPress={handleCloseModal}
              style={{ marginLeft: 20, flex: 5 }}
            >
              <AntDesign
                name="close"
                size={35}
                color="white"
                style={{
                  backgroundColor: "#af300f",
                  borderRadius: 10,
                  padding: 5,
                  width: 45,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={showInterstitial}
              style={{ flex: 1, marginRight: 10 }}
            >
              <AntDesign
                name="check"
                size={35}
                color="white"
                style={{
                  backgroundColor: "#13db3d",
                  borderRadius: 10,
                  padding: 5,
                  width: 45,
                }}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Modal>
    </View>
  );
};

export default ModalAddPlant;
