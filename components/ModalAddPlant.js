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

import { Ionicons, AntDesign } from "@expo/vector-icons";
import Watering from "./formComponents/Watering/Watering";
import Turning from "./formComponents/Turning/Turning";
import Spritzing from "./formComponents/Spritzing/Spritzing";

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

    console.log(wateringTime);
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
    <View>
      <TouchableOpacity
        onPress={() => {
          setModalVisibility(true);
        }}
      >
        <Ionicons name="add" size={24} color="black" />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisibility}
        onRequestClose={handleCloseModal}
      >
        <ScrollView>
          <Text>Nazwa</Text>
          <TextInput
            onChangeText={(val) => setPlantName(val)}
            value={plantName}
            onSubmitEditing={handleSubmit}
          />
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
          <TouchableOpacity onPress={handleCloseModal}>
            <AntDesign name="closecircleo" size={40} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSubmit}>
            <AntDesign name="checkcircleo" size={40} color="black" />
          </TouchableOpacity>
        </ScrollView>
      </Modal>
    </View>
  );
};

export default ModalAddPlant;
