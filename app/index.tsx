import * as React from "react";
import Banner from "~/components/Banner";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Screen() {
  return (
    <GestureHandlerRootView className="flex-1 justify-start  gap-5 p-4 bg-secondary/30">
      <Banner />
    </GestureHandlerRootView>
  );
}
