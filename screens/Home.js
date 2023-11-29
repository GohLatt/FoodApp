import { View, TextInput, Text, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/AntDesign";
import Popular from "../component/Popular";

import { popular, category } from "../dummy";
import Card from "../component/Card";
import { ScrollView } from "react-native";

export default function Home() {
  return (
    <SafeAreaView className="px-6 bg-gray-100 py-5 flex-1">
      <View className="flex-row content-center ">
        <View className="flex-row items-center border-2 border-red-300 rounded-full px-2 py-2 flex-1 gap-x-2">
          <Icon name="search1" size={20} color="#333" />
          <TextInput
            className="text-base"
            type="text"
            placeholder="Search Foods"
          />
        </View>
      </View>
      <View className="py-7">
        <Text className="text-base text-red-600 font-medium mb-2">
          Most Popular Food
        </Text>

        <FlatList
          horizontal
          data={popular}
          renderItem={({ item }) => <Popular title={item} />}
        />
      </View>

      <View className="mt-3 pb-52" style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={category}
          renderItem={({ item, index }) => <Card item={item} index={index} />}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});
