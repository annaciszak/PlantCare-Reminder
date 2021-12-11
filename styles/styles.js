import { StyleSheet } from "react-native";
import Colors from "./Colors";
const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: Colors.white,
  },
  plantItem: {
    flexDirection: "row",
    marginHorizontal: 15,
    marginVertical: 5,
    padding: 15,
    borderRadius: 15,
    backgroundColor: "#7DB98F",
  },
  itemName: {
    color: "#fff",
  },
  buttonAdd: {
    backgroundColor: "green",
    width: 50,
    height: 50,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});

export default styles;
