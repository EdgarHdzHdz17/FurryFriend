import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import menuStyles from "./styles/MenuStyles";
import CredentialComponent from "../../components/Credential";
import { useNavigation } from "@react-navigation/native";

function MenuScreen() {
  const navigation = useNavigation();
  const [dataDogs, setDataDogs] = useState([]);
  const [dataBreeds, setDataBreeds] = useState([]);
  const [loadingBreeds, setLoadingBreeds] = useState(false);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        setLoadingBreeds(true);
        const response = await fetch("https://api.thedogapi.com/v1/breeds");
        const data = await response.json();
        setDataDogs(data);
        const dataBreeds = data.map((item) => item.name);
        setDataBreeds(dataBreeds);
        // console.log(data);
        // console.log(breedsarray);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    dataBreeds, fetchBreeds();
  }, []);

  const handlePress = (name) => {
    navigation.navigate("Details");
    console.log("Pressed:", name);
  };

  return (
    <SafeAreaView style={menuStyles.container}>
      {loadingBreeds ? (
        <FlatList
          style={menuStyles.list}
          data={dataDogs}
          renderItem={({ item }) => (
            <CredentialComponent
              title={item.name}
              description={item.bred_for ? item.bred_for : "No description"}
              onPress={() => handlePress(item.reference_image_id)}
            ></CredentialComponent>
          )}
        />
      ) : (
        <Text>Loading...</Text>
      )}
    </SafeAreaView>
  );
}

export default MenuScreen;
