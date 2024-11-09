import React, { FunctionComponent } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useColorScheme } from "nativewind";

const Settings: FunctionComponent = () => {
  const { colorScheme, setColorScheme } = useColorScheme();
  const setLightTheme = () => setColorScheme("light");
  const setDarkTheme = () => setColorScheme("dark");
  const setSystemTheme = () => setColorScheme("system");

  return (
    <View className="p-4">
      <Text className="text-2xl dark:text-neutral-400">Theme Settings</Text>
      <View className="flex flex-row items-center justify-between  border rounded-2xl p-6 border-slate-100 my-5">
        <TouchableOpacity
          onPress={setSystemTheme}
          className={`flex flex-row items-center p-3 border gap-x-2 rounded-3xl ${
            colorScheme === "system"
              ? "bg-green-200 border-green-400"
              : "border-slate-300"
          }`}
        >
          <Feather
            name="settings"
            size={18}
            color={colorScheme === "system" ? "#16a34a" : "#64748b"}
          />
          <Text
            className={`text-md ${
              colorScheme === "system" ? "text-green-600" : "text-slate-500"
            }`}
          >
            System
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={setLightTheme}
          className={`flex flex-row items-center p-3 border  gap-x-2 rounded-3xl ${
            colorScheme === "light"
              ? "bg-green-200 border-green-400"
              : "border-slate-300"
          }`}
        >
          <Feather
            name="sun"
            size={18}
            color={colorScheme === "light" ? "#16a34a" : "#64748b"}
          />
          <Text
            className={`text-md ${
              colorScheme === "light" ? "text-green-600" : "text-slate-500"
            }`}
          >
            Light
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={setDarkTheme}
          className={`flex flex-row items-center p-3 border  gap-x-2 rounded-3xl ${
            colorScheme === "dark"
              ? "bg-green-200 border-green-400"
              : "border-slate-300"
          }`}
        >
          <Feather
            name="moon"
            size={18}
            color={colorScheme === "dark" ? "#16a34a" : "#64748b"}
          />
          <Text
            className={`text-md ${
              colorScheme === "dark" ? "text-green-600" : "text-slate-500"
            }`}
          >
            Dark
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;
