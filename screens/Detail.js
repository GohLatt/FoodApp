import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { useRoute, useNavigation } from "@react-navigation/native";

export default function Detail() {
  const { params } = useRoute();
  const item = params;

  const navigation = useNavigation();

  return (
    <View className="flex-1">
      <View>
        <Image
          source={{ uri: item.img }}
          className="w-full"
          style={{ height: 250 }}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          className="absolute top-10 left-4 px-2 py-2 bg-gray-200 rounded-full"
        >
          <Icon name="arrowleft" size={20} color={"red"} />
        </TouchableOpacity>
      </View>
      <View
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className=" flex-1 -mt-5 py-4 px-3 bg-white"
      >
        <Text className="text-xl ml-4 font-medium">{item.name}</Text>
        <Text className="text-base mt-4 px-3">{item.description}</Text>
      </View>
    </View>
  );
}
