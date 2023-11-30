import { View, Text, TouchableOpacity, FlatList } from "react-native";
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
      <View className="mt-10 pb-40">
        <FlatList
          data={cart}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <SelectItem item={item} />}
        />
      </View>
    </View>
  );
}
