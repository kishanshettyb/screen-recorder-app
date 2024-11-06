import React, { FunctionComponent } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useColorScheme } from "nativewind";
import { Link } from "expo-router";
import DiskStorageChart from "./DiskStorage";

const Banner: FunctionComponent = () => {
  const { colorScheme } = useColorScheme();

  return (
    <Link asChild href={"/storage"}>
      <TouchableOpacity className="w-full flex-row justify-between p-4   rounded-2xl bg-white  dark:bg-neutral-900 flex">
        <View className="shadow-sm p-4 mr-3 flex-1 h-[190px]  border   border-slate-50 dark:border-neutral-900 bg-white dark:bg-neutral-950  rounded-2xl">
          <DiskStorageChart />
        </View>
        <View className="shadow-sm flex flex-1 border  border-slate-50 dark:border-neutral-900 p-4  rounded-2xl bg-white dark:bg-neutral-950">
          <View className="flex flex-row gap-2 mb-5 ">
            <View className="w-1/2 flex-1 rounded-2xl h-[70px] border shadow-2xl bg-slate-50 dark:bg-neutral-900 border-slate-100 dark:border-neutral-800 p-2 flex justify-center items-center">
              <Feather
                name="camera"
                size={24}
                color={colorScheme === "dark" ? "#fff" : "#000"}
              />
              <Text className="text-[8px] text-neutral-500 mt-2">Camera</Text>
            </View>
            <TouchableOpacity className="w-1/2  flex-1 rounded-2xl h-[70px] border shadow-2xl bg-slate-50 dark:bg-neutral-900 border-slate-100 dark:border-neutral-800 p-2 flex justify-center items-center">
              <Feather
                name="image"
                size={24}
                color={colorScheme === "dark" ? "#fff" : "#000"}
              />
              <Text className="text-[8px] text-neutral-500 mt-2">
                Screenshotz
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex flex-row gap-2 ">
            <View className="w-1/2 flex-1 rounded-2xl h-[70px] border shadow-2xl  bg-slate-50 dark:bg-neutral-900 border-slate-100 dark:border-neutral-800 p-2 flex justify-center items-center">
              <Feather
                name="edit"
                size={24}
                color={colorScheme === "dark" ? "#fff" : "#000"}
              />
              <Text className="text-[8px] text-neutral-500 mt-2">Edit</Text>
            </View>
            <View className="w-1/2  flex-1 rounded-2xl h-[70px] border shadow-2xl  bg-slate-50 dark:bg-neutral-900 border-slate-100 dark:border-neutral-800 p-2 flex justify-center items-center">
              <Feather
                name="stop-circle"
                size={24}
                color={colorScheme === "dark" ? "#fff" : "#000"}
              />
              <Text className="text-[8px] text-neutral-500 mt-2">
                Assistive
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default Banner;
