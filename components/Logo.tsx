import React, { FunctionComponent } from "react";
import { Image, Text, View } from "react-native";

const Logo: FunctionComponent = () => {
	return (
		<View className="flex flex-row items-center justify-start">
			<Image
				height={100}
				width={100}
				alt="Screen Recorder"
				className="w-[30px] h-[30px] rounded-lg mr-2 shadow-2xl border border-slate-100"
				source={require("../assets/images/logo-icon.png")}
			/>
			<Text className="text-xl font-bold text-neutral-950 dark:text-neutral-50">Screen Recorder</Text>
		</View>
	);
};

export default Logo;
