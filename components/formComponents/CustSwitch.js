import React from "react";
import { View, Switch } from "react-native";

function CustSwitch({ isEnabled, toggleSwitch }) {
  return (
    <View>
      <Switch
        trackColor={{ true: "green", false: "red" }}
        thumbColor={"grey"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

export default CustSwitch;
