import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: "#0f8c22",
  },
  plantItem: {
    flexDirection: "row",
    marginHorizontal: 15,
    marginVertical: 5,
    padding: 15,
    borderRadius: 15,
    borderColor: "#000",
    borderWidth: 2,
    backgroundColor: "#fff",
  },
  itemName: {
    color: "#000",
  },
  buttonAdd: {
    backgroundColor: "#051082",
    width: 50,
    height: 50,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});

export default styles;
