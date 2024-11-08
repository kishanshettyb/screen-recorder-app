import * as React from "react";
import { ScrollView, View } from "react-native";
import Banner from "~/components/Banner";
import VideoListCard from "~/components/VideoListCard";
import WelcomeTitle from "~/components/WelcomeTitle";

export default function Screen() {
  return (
    <ScrollView className="flex-1 gap-5 p-4 bg-slate-100 dark:bg-neutral-950">
      <WelcomeTitle />
      <Banner />
      <VideoListCard />
    </ScrollView>
  );
}
