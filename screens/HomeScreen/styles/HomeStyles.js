import { StyleSheet } from "react-native";

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E57A00",
    alignItems: "center",
    justifyContent: "space-around",
  },

  imageView: {
    backgroundColor: "#E5B777",
    borderRadius: 100,
    width: 300,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
  },

  wallpaper: {
    width: 300,
    height: 300,
  },

  title: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
    paddingHorizontal: 5,
  },

  description: {
    fontSize: 25,
  },

  button: {
    borderRadius: 20,
    backgroundColor: "white",
    width: 200,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  textButton: {
    fontSize: 30,
    color: "#E57A00",
  },
});

export default homeStyles;
