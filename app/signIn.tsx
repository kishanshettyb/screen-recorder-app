import { Text, View } from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import InfoSlider from "~/components/InfoSlider";

export default function Page() {
  // To do: Work on async storage to show welcome slide for first time
  const [showInro] = useState(true);

  if (showInro) {
    return (
      <View className="flex-1 flex bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        <InfoSlider />
      </View>
    );
  } else {
    return router.replace("./auth");
  }
}
