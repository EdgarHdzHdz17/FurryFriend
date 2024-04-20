import { useEffect, useState } from "react";
import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import detailsStyles from "./styles/DetailsStyles";
import LottieView from "lottie-react-native";

function DetailsScreen({ route }) {
  const [detailsDog, setDetailsDog] = useState([]);
  const [detailsLoaded, setDetailsLoaded] = useState(false);
  const id = route.params.idDog;

  useEffect(() => {
    const fetchDetailsDog = async () => {
      try {
        setDetailsLoaded(true);
        const response = await fetch(
          `https://api.thedogapi.com/v1/images/${id}`
        );
        const data = await response.json();
        setDetailsDog(data);
        // console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchDetailsDog();
  }, []);

  return (
    <SafeAreaView style={detailsStyles.container}>
      {detailsLoaded && detailsDog.breeds && detailsDog.url ? (
        <>
          <View style={detailsStyles.imageView}>
            <Image
              source={{ uri: detailsDog.url }}
              style={detailsStyles.image}
            />
          </View>
          <View style={detailsStyles.header}>
            <Text style={detailsStyles.nameDog}>
              {detailsDog.breeds[0].name}
            </Text>
            <Text style={detailsStyles.bread_forDog}>
              {detailsDog.breeds[0].bred_for}
            </Text>
          </View>
          <ScrollView style={detailsStyles.details}>
            <View style={detailsStyles.characteristics}>
              <View style={detailsStyles.life}>
                <Text style={detailsStyles.detailsTitle}>Life Span</Text>
                <Text style={detailsStyles.detailsData}>
                  {detailsDog.breeds[0].life_span}
                </Text>
              </View>
              <View style={detailsStyles.weigth}>
                <Text style={detailsStyles.detailsTitle}>Weight</Text>
                <Text style={detailsStyles.detailsData}>
                  {detailsDog.breeds[0].weight.metric + " " + "kg"}
                </Text>
              </View>
              <View style={detailsStyles.height}>
                <Text style={detailsStyles.detailsTitle}>Height</Text>
                <Text style={detailsStyles.detailsData}>
                  {detailsDog.breeds[0].height.metric + " " + "cm"}
                </Text>
              </View>
            </View>
            <View style={detailsStyles.description}>
              <Text style={detailsStyles.detailsTitle}>
                Origin:{" "}
                {detailsDog.breeds[0].origin ? (
                  <Text style={detailsStyles.detailsData}>
                    {detailsDog.breeds[0].origin}
                  </Text>
                ) : (
                  <Text style={detailsStyles.detailsData}>NO DATA</Text>
                )}
              </Text>
              <Text style={detailsStyles.detailsTitle}>Description:</Text>
              <Text style={detailsStyles.detailsData}>
                {detailsDog.breeds[0].temperament + "."}
              </Text>
            </View>
          </ScrollView>
        </>
      ) : (
        <View style={detailsStyles.containerLoading}>
          <LottieView
            source={require("./assets/loading.json")}
            autoPlay={true}
            style={{ width: 500, height: 500 }}
          />
        </View>
      )}
    </SafeAreaView>
  );
}

export default DetailsScreen;
