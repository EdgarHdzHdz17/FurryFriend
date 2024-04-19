import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import homeStyles from "./styles/HomeStyles";
import wallpaper from "./assets/wallpaper.png";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={homeStyles.container}>
      <View style={homeStyles.imageView}>
        <Image source={wallpaper} style={homeStyles.wallpaper}></Image>
      </View>
      <Text style={homeStyles.title}>
        LISTO PARA CONOCER MÁS SOBRE TU PELUDO
      </Text>
      <Text style={homeStyles.description}>NO compres, ADOPTA</Text>
      <TouchableOpacity
        style={homeStyles.button}
        onPress={() => navigation.navigate("Menu")}
      >
        <Text style={homeStyles.textButton}>Ver peludos!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
