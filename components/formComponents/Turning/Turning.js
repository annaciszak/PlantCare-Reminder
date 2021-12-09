import React, { useState, useRef } from "react";
import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import CustSwitch from "../CustSwitch";
import CustTimePicker from "../CustTimePicker";

function Turning(props) {
  const pickerRef = useRef();

  return (
    <View>
      <Text>Obracanie doniczki</Text>
      <CustSwitch
        isEnabled={props.isTurning}
        toggleSwitch={props.setIsTurning}
      />
      {props.isTurning && (
        <View>
          <Text>Częstotliwość obracania</Text>
          <Picker
            ref={pickerRef}
            selectedValue={props.turningFrequency}
            onValueChange={(itemValue, itemIndex) =>
              props.setTurningFrequency(itemValue)
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
          <CustTimePicker
            time={true}
            dateTime={props.turningDateTime}
            setDateTime={props.setTurningDateTime}
          />
          <CustTimePicker
            time={false}
            dateTime={props.firstTurningDateTime}
            setDateTime={props.setFirstTurningDateTime}
          />
        </View>
      )}
    </View>
  );
}

export default Turning;
