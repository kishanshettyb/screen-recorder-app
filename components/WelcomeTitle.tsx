import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";

const WelcomeTitle: FunctionComponent = () => {
	return (
		<View className="my-5">
			<Text className="text-4xl font-light dark:text-slate-300">
				Hello <Text className="font-bold">John </Text>👋
			</Text>
		</View>
	);
};

export default WelcomeTitle;
