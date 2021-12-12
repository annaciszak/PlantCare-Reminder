import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import styles from "../../styles/styles";

function CustTimePicker(props) {
  const [mode, setMode] = useState(props.time ? "time" : "date");
  const [show, setShow] = useState(false);

  const [prevDateTime, setPrevDateTime] = useState(props.dateTime);

  const onChange = (event, selected) => {
    setShow(false);
    if (selected !== undefined) {
      if (mode === "time") {
        props.setDateTime(selected);
        setPrevDateTime(selected);

        let tempDateTime = new Date(selected);
        let min, tempText;
        let hours = tempDateTime.getHours();
        min = String(tempDateTime.getMinutes()).padStart(2, "0");
        tempText = hours + ":" + min;
        setText(tempText);
      } else {
        props.setDateTime(selected);
        setPrevDateTime(selected);
        let tempDate = new Date(selected);
        let month = String(tempDate.getMonth() + 1).padStart(2, "0");
        let tempText = tempDate.getDate() + "-" + month;
        setText(tempText);
      }
    } else {
      props.setDateTime(prevDateTime);
      if (mode === "time") {
        let tempDateTime = prevDateTime;
        let min, tempText;
        let hours = tempDateTime.getHours();
        min = String(tempDateTime.getMinutes()).padStart(2, "0");
        tempText = hours + ":" + min;
        setText(tempText);
      } else {
        let tempDate = prevDateTime;
        let month = String(tempDate.getMonth() + 1).padStart(2, "0");
        let tempText = tempDate.getDate() + "-" + month;
        setText(tempText);
      }
    }
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

  const getDefaultDateTime = () => {
    let hour = props.dateTime.getHours();
    let min = props.dateTime.getMinutes();
    return hour + ":" + min;
  };

  const getDefaultDate = () => {
    let day = props.dateTime.getDay();
    let month = String(props.dateTime.getMonth() + 1).padStart(2, "0");
    return day + "-" + month;
  };

  const [text, setText] = useState(
    props.time ? getDefaultDateTime : getDefaultDate
  );

  return (
    <View>
      {props.time ? (
        <View style={styles.timePicker}>
          <TouchableOpacity onPress={showTimepicker}>
            <Text style={{ textAlign: "center" }}>{text.toString()}</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.timePicker}>
          <TouchableOpacity onPress={showDatepicker}>
            <Text style={{ textAlign: "center" }}>{text.toString()}</Text>
          </TouchableOpacity>
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
