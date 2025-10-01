import { Tabs } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import {
  BookmarkIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "react-native-heroicons/outline";

const TabView = ({ title, icon, focused }) =>
  focused ? (
    <View className="bg-indigo-400 min-w-[95px] min-h-16 mt-5 overflow-hidden flex-row px-4 py-2 rounded-full items-center justify-center">
      {icon}
      <Text className="ml-1 text-secondary font-semibold">{title}</Text>
    </View>
  ) : (
    <View className="mt-5 rounded-full items-center justify-center">
      {icon}
    </View>
  );

const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0f0D23",
          borderRadius: 50,
          marginHorizontal: 5,
          marginBottom: 45,
          height: 52,
          position: "absolute",
          overflow: "hidden",
          borderColor: "#0f0D23",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabView
              title={"Home"}
              icon={
                <HomeIcon
                  color={focused ? "#151312" : "#A8B5DB"}
                  size={focused ? 28 : 20}
                />
              }
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabView
              title={"Search"}
              icon={
                <MagnifyingGlassIcon
                  color={focused ? "#151312" : "#A8B5DB"}
                  size={focused ? 28 : 20}
                />
              }
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabView
              title={"Saved"}
              icon={
                <BookmarkIcon
                  color={focused ? "#151312" : "#A8B5DB"}
                  size={focused ? 28 : 20}
                />
              }
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabView
              title={"Profile"}
              icon={
                <UserIcon
                  color={focused ? "#151312" : "#A8B5DB"}
                  size={focused ? 28 : 20}
                />
              }
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _Layout;
