import { Text, Image, TouchableOpacity } from "react-native";

export default function Popular({ title }) {
  return (
    <TouchableOpacity className="flex-col items-center gap-y-1 mr-3">
      <Image
        style={{ width: 70, height: 70 }}
        className="rounded-full py-2 px-2 bg-white"
        source={{
          uri: "https://www.shutterstock.com/image-photo/tasty-burger-black-background-hungry-600nw-2003176508.jpg",
        }}
      />
      <Text className="text-sm ">{title}</Text>
    </TouchableOpacity>
  );
}
