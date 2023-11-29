import { View, Text, FlatList } from "react-native";
import CardSection from "./CardSection";

export default function Card({ item, index }) {
  return (
    <View className={`mb-8`} key={index}>
      <Text className="text-red-500 text-base font-medium">{item.title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={item.dish}
        renderItem={({ item, index }) => (
          <CardSection key={index} dish={item} index={index} />
        )}
      />
    </View>
  );
}
