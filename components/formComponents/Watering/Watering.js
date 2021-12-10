import React, { useRef } from "react";
import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import CustTimePicker from "../CustTimePicker";

function Watering(props) {
  const pickerRef = useRef();

  return (
    <View>
      <Text>Podlewanie</Text>
      <Text>Częstotliwość podlewania</Text>
      <Picker
        ref={pickerRef}
        selectedValue={props.wateringFrequency}
        onValueChange={(itemValue, itemIndex) =>
          props.setWateringFrequency(itemValue)
        }
      >
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
        <Picker.Item label="6" value="6" />
        <Picker.Item label="7" value="7" />
        <Picker.Item label="8" value="8" />
        <Picker.Item label="9" value="9" />
        <Picker.Item label="10" value="10" />
        <Picker.Item label="11" value="11" />
        <Picker.Item label="12" value="12" />
        <Picker.Item label="13" value="13" />
        <Picker.Item label="14" value="14" />
        <Picker.Item label="15" value="15" />
        <Picker.Item label="16" value="16" />
        <Picker.Item label="17" value="17" />
        <Picker.Item label="18" value="18" />
        <Picker.Item label="19" value="19" />
        <Picker.Item label="20" value="20" />
      </Picker>
      <Text>{props.wateringFrequency}</Text>
      <Text>Godzina powiadomienia</Text>
      <CustTimePicker
        time={true}
        dateTime={props.wateringDateTime}
        setDateTime={props.setWateringDateTime}
      />
      <CustTimePicker
        time={false}
        dateTime={props.firstWateringDateTime}
        setDateTime={props.setFirstWateringDateTime}
      />
    </View>
  );
}

export default Watering;
