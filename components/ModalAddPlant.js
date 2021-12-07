import React, { useState } from "react";
import {
  Modal,
  View,
  TouchableOpacity,
  TextInput,
  Text,
  ScrollView,
} from "react-native";
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
  const [wateringDateTime, setWateringDateTime] = useState(new Date());
  const [firstWateringDateTime, setFirstWateringDateTime] = useState(
    new Date()
  );
  const [spritzingDateTime, setSpritzingDateTime] = useState(new Date());
  const [firstSpritzingDateTime, setFirstSpritzingDateTime] = useState(
    new Date()
  );
  const [turningDateTime, setTurningDateTime] = useState(new Date());
  const [firstTurningDateTime, setFirstTurningDateTime] = useState(new Date());

  const handleCloseModal = () => {
    setModalVisibility(false);
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
          />
          <Turning
            turningFrequency={turningFrequency}
            setTurningFrequency={setTurningFrequency}
            turningDateTime={turningDateTime}
            setTurningDateTime={setTurningDateTime}
            firstTurningDateTime={firstTurningDateTime}
            setFirstTurningDateTime={setFirstTurningDateTime}
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
