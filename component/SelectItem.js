import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
export default function SelectItem({ item }) {
  return (
    <View
      style={{ borderRadius: 12 }}
      className="mb-5 flex-row items-center px-5 shadow-lg py-4 justify-between"
    >
      <Image
        source={{
          uri: item.img,
        }}
        style={{ width: 80, height: 80, borderRadius: 100 }}
      />
      <View className="flex-row gap-x-3 items-center">
        <TouchableOpacity className="bg-gray-200 px-2 py-2 rounded-full">
          <Icon name="plus" size={20} color="red" />
        </TouchableOpacity>
        <Text className="w-24 text-center">{item.price}</Text>
        <TouchableOpacity className="bg-gray-200 px-2 py-2 rounded-full">
          <Icon name="minus" size={20} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
