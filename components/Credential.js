import { View, Text, TouchableOpacity, Image } from "react-native";
import crendentialStyles from "./CredentialStyles";
import dogPerfil from "./assets/dogPerfil.png";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";

function CredentialComponent({ title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={crendentialStyles.container}>
        <View style={crendentialStyles.imageView}>
          <Image source={dogPerfil} style={crendentialStyles.image}></Image>
        </View>
        <View style={crendentialStyles.titleView}>
          <Text style={crendentialStyles.title}>{title}</Text>
          <View style={crendentialStyles.icons}>
            <AntDesign name="heart" size={24} color="#696969" />
            <FontAwesome6 name="shield-dog" size={24} color="#696969" />
            <AntDesign name="idcard" size={24} color="#696969" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default CredentialComponent;
