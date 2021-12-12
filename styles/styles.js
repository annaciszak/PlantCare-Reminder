import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: "#0f8c22",
  },
  modalContainer: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: "#0f8c22",
    padding: 25,
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
  modalInput: {
    flexDirection: "row",
  },
  modalItem: {
    marginVertical: 5,
    padding: 15,
    paddingBottom: 20,
    borderRadius: 15,
    borderColor: "#000",
    borderWidth: 3,
    backgroundColor: "white",
  },
  modalRow: { flexDirection: "row" },
  modalItemFont: {
    color: "#000",
    fontSize: 16,
    fontFamily: "Roboto",
  },
  activityTitle: {
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 15,
    flex: 5,
    marginTop: 5,
    borderBottomColor: "#000",
    paddingBottom: 5,
    borderBottomWidth: 3,
  },
  activitySwitch: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  modalRow: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  rowTimePicker: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
  modalText: {
    color: "#000",
    fontSize: 15,
    flex: 5,
  },
  timePicker: {
    flex: 1,
    width: 60,
    marginRight: 40,
    borderWidth: 2,
    borderColor: "#8f939c",
    backgroundColor: "#e8e6e6",
    // padding: 11,
    paddingVertical: 7,
    borderRadius: 10,
    alignContent: "center",
    alignSelf: "center",
  },
  btnRow: {
    marginBottom: 50,
    marginTop: 15,
  },
  btn: {
    backgroundColor: "#051082",
  },
});

export default styles;
