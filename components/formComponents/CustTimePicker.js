import React, { useState } from "react";
import { View, Button, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

function CustTimePicker(props) {
  const [mode, setMode] = useState("time" ? props.time : "date");
  const [show, setShow] = useState(false);

  const onChange = (event, selected) => {
    setShow(false);
    if (mode === "time") props.setDateTime(selected);
    else props.setDateTime(selected);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <View>
      {props.time ? (
        <View>
          <Button onPress={showTimepicker} title="Show time picker!" />
        </View>
      ) : (
        <View>
          <Button onPress={showDatepicker} title="Show date picker!" />
        </View>
      )}
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={props.dateTime}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
}

export default CustTimePicker;
