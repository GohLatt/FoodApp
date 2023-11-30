import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { addCount, decreaseCount } from "../App/cart";
import { useDispatch } from "react-redux";
export default function SelectItem({ item }) {
  const dispatch = useDispatch();

  return (
    <View
      style={{ borderRadius: 12 }}
      className="mb-4 flex-row items-center px-5 shadow-lg py-4 justify-between"
    >
      <Image
        source={{
          uri: item.img,
        }}
        style={{ width: 80, height: 80, borderRadius: 100 }}
      />
      <View className="flex-row gap-x-3 items-center">
        <TouchableOpacity
          className="bg-gray-200 px-2 py-2 rounded-full"
          onPress={() => dispatch(addCount(item.name))}
        >
          <Icon name="plus" size={20} color="red" />
        </TouchableOpacity>
        <Text className="text-center w-24">{item.price}</Text>
        <Text className="w-5 text-center text-red-700 font-medium">
          {item.count}
        </Text>
        <TouchableOpacity
          className="bg-gray-200 px-2 py-2 rounded-full"
          onPress={() => dispatch(decreaseCount(item.name))}
        >
          <Icon name="minus" size={20} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
