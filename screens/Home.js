import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";
import { selectCart } from "../App/cart";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import Popular from "../component/Popular";
import Icon from "react-native-vector-icons/AntDesign";

import { popular, category } from "../dummy";
import Card from "../component/Card";

export default function Home() {
  const cart = useSelector(selectCart);
  const navigation = useNavigation();
  return (
    <View className=" bg-gray-100 flex-1 pb-20">
      <View className="flex-row pt-10 pb-5 bg-red-500 px-4 justify-between items-center">
        <Text className="font-bold text-gray-50 text-lg">Quick Food</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Cart")}
          className=" relative px-2 py-2 bg-gray-200 rounded-full"
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
      <View className="py-7 px-4">
        <Text className="text-base text-red-600 font-medium mb-2">
          Most Popular Food
        </Text>

        <FlatList
          horizontal
          data={popular}
          renderItem={({ item }) => <Popular title={item} />}
        />
      </View>

      <View className="mt-3 pb-52 px-4" style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={category}
          renderItem={({ item, index }) => <Card item={item} index={index} />}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({});
