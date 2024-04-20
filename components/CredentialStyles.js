import { StyleSheet } from "react-native";

const crendentialStyles = StyleSheet.create({
  container: {
    width: 350,
    height: 100,
    marginVertical: 5,
    marginHorizontal: 5,
    flex: 1,
    flexDirection: "row",
  },

  titleView: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },

  imageView: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  title: {
    fontSize: 25,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },

  icons: {
    marginVertical: 10,
    flexDirection: "row",
    width: "50%",
    justifyContent: "space-around",
  },
});

export default crendentialStyles;
