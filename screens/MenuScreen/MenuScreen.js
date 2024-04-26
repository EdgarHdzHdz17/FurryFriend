import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, FlatList, View, TextInput } from "react-native";
import menuStyles from "./styles/MenuStyles";
import CredentialComponent from "../../components/Credential";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";

function MenuScreen() {
  const navigation = useNavigation();
  const [dataDogs, setDataDogs] = useState([]);
  const [loadedBreeds, setLoadedBreeds] = useState(false);
  const [breed, setBreed] = useState("");

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetch("https://api.thedogapi.com/v1/breeds");
        const data = await response.json();
        setDataDogs(data);
        setLoadedBreeds(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchBreeds();
  }, []);

  const handlePress = (name, reference_image_id) => {
    navigation.navigate("Details", {
      nameDog: name,
      idDog: reference_image_id,
    });
  };

  const filterDogs = dataDogs.filter((dog) =>
    dog.name.toLowerCase().includes(breed.toLowerCase())
  );

  return (
    <SafeAreaView style={menuStyles.container}>
      <View style={menuStyles.header}>
        <Text style={menuStyles.nameApp}>FURRYFRIEND</Text>
        <LottieView
          source={require("./assets/animation.json")}
          autoPlay={true}
          style={{ width: 150, height: 150 }}
        />
        <View>
          <TextInput
            style={menuStyles.input}
            placeholder="Breed Search"
            value={breed}
            onChangeText={setBreed}
          />
        </View>
      </View>
      {loadedBreeds && filterDogs.length > 0 ? (
        <FlatList
          style={menuStyles.list}
          data={filterDogs}
          renderItem={({ item }) => (
            <CredentialComponent
              title={item.name}
              onPress={() => handlePress(item.name, item.reference_image_id)}
            ></CredentialComponent>
          )}
        />
      ) : (
        <View style={menuStyles.containerLoad}>
          <LottieView
            source={require("./assets/loading.json")}
            autoPlay={true}
            style={{ width: 150, height: 150 }}
          />
        </View>
      )}
    </SafeAreaView>
  );
}

export default MenuScreen;
