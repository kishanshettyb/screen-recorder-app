import React from "react";
import { View, Text, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { router } from "expo-router";
import { useColorScheme } from "nativewind";

const slides = [
  {
    key: 1,
    title: "See How your child performs in Accademics",
    description:
      "Get instant notifications on attendance, grades, and events, ensuring you're always informed and never miss a moment.",
    image: require("../assets/icons/img-1.png"),
  },
  {
    key: 2,
    title: "Easy Communication",
    description:
      "Effortlessly connect with teachers and staff for questions or discussions, all through our integrated messaging system.",
    image: require("../assets/icons/img-2.png"),
  },
  {
    key: 3,
    title: "Access to Resources",
    description:
      "Quickly access calendars, assignments, and important documents in one place, making it easy to support your child's learning.",
    image: require("../assets/icons/img-3.png"),
  },
  {
    key: 4,
    title: "Access to Resources",
    description:
      "Quickly access calendars, assignments, and important documents in one place, making it easy to support your child's learning.",
    image: require("../assets/icons/img-4.png"),
  },
];

const InfoSlider = () => {
  const _renderItem = ({ item }) => {
    return (
      <View className="flex items-center justify-center flex-1 px-10 dark:bg-slate-900 ">
        <Image source={item.image} className="w-[300px] h-[300px]" />
        <Text className="mt-5 mb-2 text-2xl font-semibold text-center dark:text-slate-200">
          {item.title}
        </Text>
        <Text className="my-5 text-center text-md text-slate-700 dark:text-slate-400">
          {item.description}
        </Text>
      </View>
    );
  };
  const _renderDoneButton = () => {
    return (
      <View className="p-4 bg-blue-600 rounded-xl">
        <Text className="text-slate-50">Get Started</Text>
      </View>
    );
  };
  const _renderNextButton = () => {
    return (
      <View className="px-10 py-4 rounded-xl bg-slate-800">
        <Text className="text-slate-50">Next</Text>
      </View>
    );
  };
  const _renderPrevButton = () => {
    return (
      <View className="px-10 py-4 border border-slate-200 dark:border-slate-600 rounded-xl">
        <Text className="text-slate-850 dark:text-slate-600">Prev</Text>
      </View>
    );
  };
  const onDone = () => {
    return router.replace("./auth");
  };
  const colorScheme = useColorScheme(); // Get the current color scheme (light/dark)

  const active = {
    backgroundColor: colorScheme === "dark" ? "#fff" : "#000",
  };

  const dotStyle = {
    backgroundColor: colorScheme === "dark" ? "#ccc" : "#ccc",
  };

  const _renderOnSkip = () => {
    return (
      <View className="px-10 py-4 ">
        <Text className="text-slate-900 dark:text-slate-600">Skip</Text>
      </View>
    );
  };

  return (
    <AppIntroSlider
      showSkipButton={true}
      showPrevButton={true}
      renderItem={_renderItem}
      activeDotStyle={active}
      dotStyle={dotStyle}
      data={slides}
      onDone={onDone}
      renderPrevButton={_renderPrevButton}
      renderSkipButton={_renderOnSkip}
      renderDoneButton={_renderDoneButton}
      renderNextButton={_renderNextButton}
    />
  );
};

export default InfoSlider;
