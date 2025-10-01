import SearchBar from "@/components/searchBar";
import { Image, ScrollView, View } from "react-native";

import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-primary">
      <Image
        source={require("./../../assets/images/bg.png")}
        className="absolute w-full z-0"
      />
      <ScrollView className="flex-1 px-5">
        <View className="flex-1 mt-24">
          <SearchBar
            onPress={() => router.push("/search")}
            placeholder="Search for a movie"
          />
        </View>
      </ScrollView>
    </View>
  );
}
