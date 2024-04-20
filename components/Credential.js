import { View, Text, TouchableOpacity } from "react-native";
import crendentialStyles from "./CredentialStyles";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

function CredentialComponent({ title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={crendentialStyles.container}>
        <View style={crendentialStyles.imageView}>
          <Entypo name="baidu" size={70} color="black" />
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
