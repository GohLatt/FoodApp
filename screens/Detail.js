import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { useRoute, useNavigation } from "@react-navigation/native";
import { selectCart, addCart } from "../App/cart";
import { useSelector, useDispatch } from "react-redux";

export default function Detail() {
  const { params } = useRoute();
  const item = params;
  const cart = useSelector(selectCart);
  console.log(cart);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const addItem = (item) => {
    dispatch(
      addCart({
        obj: { name: item.name, price: item.price, img: item.img },
        name: item.name,
      })
    );
  };
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
        <TouchableOpacity
          onPress={() => navigation.navigate("Cart")}
          className="absolute top-10 right-4 px-2 py-2 bg-gray-200 rounded-full"
        >
          <Icon name="shoppingcart" size={20} color={"red"} />
          {cart.length > 0 && (
            <View className="absolute -top-2 -right-2  bg-gray-50 rounded-full w-5 ">
              <Text className=" text-red-600  text-sm font-bold text-center">
                {cart.length}
              </Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
      <View
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className=" flex-1 -mt-5 py-4 px-3 bg-white"
      >
        <Text className="text-xl ml-4 font-medium">{item.name}</Text>
        <Text className="text-base mt-4 px-3">{item.description}</Text>
      </View>

      <View className="pb-10 flex-row justify-center items-center bg-gray-50 gap-x-10">
        <TouchableOpacity
          onPress={() => addItem(item)}
          className="flex-row rounded bg-red-500 py-3 px-6 justify-center items-center gap-x-3"
        >
          <Text className="text-gray-100 text-base font-medium">Add</Text>
          <Icon name="shoppingcart" size={20} color="#fff" />
        </TouchableOpacity>
        <Text className="text-base text-gray-600 font-medium">
          {item.price} Kyats
        </Text>
      </View>
    </View>
  );
}
