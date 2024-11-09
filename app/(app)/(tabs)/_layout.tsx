import { Tabs } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import { View } from "react-native";
import { useColorScheme } from "nativewind";
import Logo from "~/components/Logo";
import { ThemeToggle } from "~/components/ThemeToggle";
export default function TabLayout() {
  const { colorScheme } = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colorScheme === "dark" ? "#fff" : "#000",
        tabBarInactiveTintColor: colorScheme === "dark" ? "#525252" : "#a3a3a3",
        tabBarStyle: { paddingTop: 10, paddingBottom: 10, height: 60 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          headerLeft: () => <Logo />,
          headerRight: () => <ThemeToggle />,
          tabBarIcon: ({ color }) => (
            <Feather size={20} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="video"
        options={{
          title: "Video",
          tabBarIcon: ({ color }) => (
            <Feather name="video" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <View className="w-[60px] shadow-2xl -mt-6 h-[60px] flex justify-center items-center bg-neutral-950 dark:bg-white rounded-full">
              <Feather
                name="plus"
                size={38}
                color={colorScheme === "dark" ? "#000" : "#fff"}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <Feather size={20} name="settings" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerTitle: "",
          headerShown: false,

          tabBarIcon: ({ color }) => (
            <Feather size={20} name="user" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
