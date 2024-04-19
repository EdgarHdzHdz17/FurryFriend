import { StyleSheet } from "react-native";

const menuStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: 5,
    backgroundColor: "white",
  },

  containerLoad: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  nameApp: {
    fontSize: 50,
    marginTop: 20,
    color: "#E57A00",
    fontWeight: "bold",
  },

  list: {
    marginTop: 30,
  },

  header: {
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: "#a9a9a9",
    borderRadius: 20,
    marginTop: 20,
    padding: 10,
    fontSize: 20,
  },
});

export default menuStyles;
