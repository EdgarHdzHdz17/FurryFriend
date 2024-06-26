import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const detailsStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },

  containerLoading: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
  },

  imageView: {
    width: windowWidth - 5,
    height: windowHeight / 3,
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: windowWidth - 20,
    resizeMode: "contain",
    height: "80%",
    marginVertical: 10,
    borderRadius: 20,
  },

  header: {
    width: 350,
    marginTop: 10,
  },

  nameDog: {
    fontSize: 40,
    fontWeight: "bold",
  },

  bread_forDog: {
    fontSize: 25,
    color: "#696969",
  },

  characteristics: {
    flexDirection: "row",
  },

  details: {
    width: 350,
    marginVertical: 20,
  },

  life: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  weigth: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  height: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  description: {
    width: 350,
    marginVertical: 10,
    flex: 1,
  },

  detailsTitle: {
    fontSize: 25,
    marginVertical: 20,
  },

  detailsData: {
    fontSize: 20,
    color: "#696969",
  },
});

export default detailsStyles;
