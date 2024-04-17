import { View, Text, TouchableOpacity } from "react-native";
import crendentialStyles from "./CredentialStyles";

function CredentialComponent({ title, description, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={crendentialStyles.container}>
        <Text style={crendentialStyles.title}>{title}</Text>
        <Text style={crendentialStyles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default CredentialComponent;
