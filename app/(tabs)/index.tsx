import * as React from "react";
import { View } from "react-native";
import Banner from "~/components/Banner";
import WelcomeTitle from "~/components/WelcomeTitle";

export default function Screen() {
	return (
		<View className="justify-start flex-1 gap-5 p-4 bg-slate-100 dark:bg-neutral-950">
			<WelcomeTitle />
			<Banner />
		</View>
	);
}
