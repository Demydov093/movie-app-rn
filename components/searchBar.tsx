import React from "react";
import { TextInput, View } from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";

interface Props {
  onPress?: () => void;
  placeholder: string;
}

const SearchBar = ({ onPress, placeholder }: Props) => {
  return (
    <View className="flex-row items-center bg-dark-300 rounded-full px-5 py-4">
      <MagnifyingGlassIcon color="grey" size={22} />
      <TextInput
        onPress={() => {}}
        placeholder="Search"
        value=""
        onChange={() => {}}
        placeholderTextColor="#a8b5db"
        className="flex-1 ml-2 text-white"
      />
    </View>
  );
};

export default SearchBar;
