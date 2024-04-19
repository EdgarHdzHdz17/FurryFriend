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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  imageView: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },

  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
  },

  title: {
    fontSize: 25,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  icons: {
    marginVertical: 10,
    flexDirection: "row",
    width: "50%",
    justifyContent: "space-around",
  },
});

export default crendentialStyles;
