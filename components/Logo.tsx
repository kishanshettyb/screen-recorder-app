import React, { FunctionComponent } from "react";
import { Image, Text, View } from "react-native";

const Logo: FunctionComponent = () => {
  return (
    <View className="flex justify-start flex-row items-center px-4">
      <Image
        height={100}
        width={100}
        alt="Screen Recorder"
        className="w-[30px] h-[30px] rounded-lg mr-2 shadow-2xl border border-slate-100"
        source={require("../assets/images/logo-icon.png")}
      />
      <Text className="font-bold text-xl text-neutral-950 dark:text-neutral-50">
        Screen Recorder
      </Text>
    </View>
  );
};

export default Logo;
