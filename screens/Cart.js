import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { useRoute, useNavigation } from "@react-navigation/native";
import SelectItem from "../component/SelectItem";
import { selectCart } from "../App/cart";
import { useSelector, useDispatch } from "react-redux";

export default function Cart() {
  const navigation = useNavigation();
  const cart = useSelector(selectCart);
  return (
    <View className="bg-gray-50 flex-1">
      <View className="bg-red-600 flex-row pt-10 px-4 pb-4 items-center justify-between">
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          className="px-2 py-2 bg-gray-200 rounded-full"
        >
          <Icon name="arrowleft" size={20} color={"red"} />
        </TouchableOpacity>
        <Text className="font-semibold text-gray-50 text-base">My Cart</Text>
      </View>
      {cart.length == 0 ? (
        <View className="justify-center items-center mt-40 px-4">
          <Image
            source={{
              uri: "https://media3.giphy.com/media/f4DGnGf6xwFonJUI0D/200w.webp?cid=ecf05e47cdul9s0ycoa0rj2h4jexo63ognn8di89vzi14kt8&ep=v1_gifs_search&rid=200w.webp&ct=g",
            }}
            style={{ height: 300 }}
            className="w-full rounded-lg"
          />
        </View>
      ) : (
        <View>
          <View className="mt-10 pb-40">
            <FlatList
              data={cart}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => <SelectItem item={item} />}
            />
          </View>
          <View className="absolute w-full bottom-20 justify-center flex-row">
            <TouchableOpacity className=" rounded-full shadow-lg py-2 flex-row justify-center gap-x-2 items-center w-60 bg-red-600">
              <Text className="text-gray-100 text-base">Order</Text>
              <Text className="text-gray-100 text-base">
                {cart
                  .map((d) => d.price)
                  .reduce((acc, curr) => Number(acc) + Number(curr), 0)}
                kyats
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}
