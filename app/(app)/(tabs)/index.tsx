import * as React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSession } from "~/app/cxt";
import Banner from "~/components/Banner";
import VideoListCard from "~/components/VideoListCard";
import WelcomeTitle from "~/components/WelcomeTitle";

export default function Screen() {
  const { signOut } = useSession();
  return (
    <ScrollView className="flex-1 gap-5 p-4 bg-slate-100 dark:bg-neutral-950">
      <WelcomeTitle />
      <Banner />
      <VideoListCard />
      <TouchableOpacity className="mb-10" onPress={() => signOut()}>
        <View className="flex items-center justify-center p-4 border border-slate-100 dark:border-slate-600 rounded-xl">
          <Text className="dark:text-slate-600">Sign Out</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}
