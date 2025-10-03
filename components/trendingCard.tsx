import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const TrendingCard = ({ movie, index }: any) => {
  console.log("!@", movie);
  return (
    <Link href={`/movies/${movie.id}`} asChild>
      <TouchableOpacity className="w-32 relative pl-5">
        <Image
          source={{ uri: movie.poster_url }}
          className="w-32 h-48 rounded-lg"
          resizeMode="cover"
        />
        <View className="absolute bottom-3 -left-1 px-2 py-1 rounded-full">
          <MaskedView
            maskElement={
              <Text
                className="font-bold"
                style={{
                  fontSize: 40,
                }}
              >
                {index + 1}
              </Text>
            }
          >
            <LinearGradient
              colors={["#ff0080", "#ff8c00", "#40e0d0"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{ width: 60, height: 60 }}
            />
          </MaskedView>
        </View>
        <Text className="text-sm text-lime-100 font-bold mt-2">
          {movie.title}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

export default TrendingCard;
