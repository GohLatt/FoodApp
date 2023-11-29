import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const data = [
  require("../assets/img/fullStar.png"),
  require("../assets/img/fullStar.png"),
  require("../assets/img/fullStar.png"),
  require("../assets/img/fullStar.png"),
  require("../assets/img/fullStar.png"),
];

export default function CardSection({ dish, index }) {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("Detail", { ...dish })}
    >
      <View
        className={`rounded shadow-l overflow-hidden mt-2 bg-white ${
          index === dish.length - 1 ? "" : "mr-4"
        }`}
      >
        <Image source={{ uri: dish.img }} style={{ width: 200, height: 150 }} />
        <View className="px-3 py-3">
          <Text className="font-bold text-base mb-2">{dish.name}</Text>
          <View className="flex-row gap-x-1">
            {data.map((i, index) => (
              <Image key={index} source={i} style={{ width: 20, height: 20 }} />
            ))}
          </View>
          <View className="flex-row mt-2 items-center gap-x-3">
            <Icon name="map-marker" size={18} color="gray" />
            <Text className="text-sm text-gray-500">Near by (15 minutes)</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
