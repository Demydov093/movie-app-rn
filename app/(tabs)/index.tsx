import SearchBar from "@/components/searchBar";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";

import MovieCard from "@/components/movieCard";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  const {
    data: movies,
    loading,
    error,
  } = useFetch(() => fetchMovies({ query: "" }));

  return (
    <View className="flex-1 bg-primary">
      <Image
        source={require("./../../assets/images/bg.png")}
        className="absolute w-full z-0"
      />
      <ScrollView className="flex-1 px-5">
        {loading ? (
          <ActivityIndicator
            size="large"
            color="#fefefe"
            className="mt-10 self-center"
          />
        ) : error ? (
          <Text>Error: {error?.message}</Text>
        ) : (
          <View className="flex-1 mt-24">
            <SearchBar
              onPress={() => router.push("/search")}
              placeholder="Search for a movie"
            />
            <>
              <Text className="text-lg text-white font-bold mt-5 mb-3">
                Latest movies
              </Text>
              <FlatList
                data={movies}
                renderItem={({ item }) => <MovieCard {...item} />}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent: "flex-start",
                  gap: 20,
                  paddingRight: 5,
                  marginBottom: 10,
                }}
                className="mt-2 pb-32"
                scrollEnabled={false}
              ></FlatList>
            </>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
