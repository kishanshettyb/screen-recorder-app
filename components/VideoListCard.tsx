import React, { FunctionComponent } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useColorScheme } from "nativewind";
import { Link } from "expo-router";

const VideoListCard: FunctionComponent = () => {
  const { colorScheme } = useColorScheme();

  return (
    <View className="mb-40">
      <View className="flex justify-between items-center flex-row my-5">
        <View>
          <Text className="text-2xl text-neutral-900 dark:text-neutral-300  font-semibold">
            Videos
          </Text>
        </View>
        <View className="px-4 py-2 bg-slate-100 dark:bg-neutral-900 flex justify-center items-center rounded-2xl">
          <Text className="text-xs text-neutral-900 dark:text-neutral-500">
            View All
          </Text>
        </View>
      </View>
      <Text className="text-xs mb-2 text-neutral-900 dark:text-neutral-400 opacity-40">
        Today
      </Text>
      <Link asChild href="/(screens)/player">
        <TouchableOpacity className="mb-3 shadow-xl shadow-neutral-50 dark:shadow-neutral-900  rounded-2xl flex flex-row justify-between items-center gap-x-4 p-4 border-slate-100  dark:border-neutral-800 border bg-white dark:bg-neutral-950  w-full">
          <View className="w-[90px] h-[100px] rounded-xl  relative  ">
            <Image
              className="w-[90px] h-[100px] rounded-xl"
              source={require("../assets/images/video-sample.jpg")}
            />
            <View className="absolute left-0 top-0 w-full h-full flex items-center justify-center">
              <Feather name="play" size={24} color="white" />
            </View>
          </View>
          <View className="flex flex-1">
            <Text numberOfLines={2} className="mb-2  text-neutral-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
              perspiciatis adipisci voluptatibus ex reiciendis maxime provident
              odit. Suscipit tempora iusto natus, odit doloremque similique
              facere facilis aut non, voluptas eos?
            </Text>
            <View className="flex flex-row justify-start items-center gap-x-1 mb-3 opacity-50">
              <View>
                <Feather
                  name="calendar"
                  size={10}
                  color={colorScheme === "dark" ? "#71717a" : "#171717"}
                />
              </View>
              <View>
                <Text className="text-xs text-neutral-900 dark:text-neutral-500">
                  02-11-2024
                </Text>
              </View>
            </View>
            <View className="flex justify-between border rounded-xl p-2 border-slate-100 dark:border-neutral-900 flex-row items-center">
              <View>
                <Text className="text-neutral-900 dark:text-neutral-500 opacity-60">
                  10.02 MB
                </Text>
              </View>
              <View className="flex flex-row  justify-between  gap-x-6 opacity-30">
                <View>
                  <Feather
                    name="edit-2"
                    size={17}
                    color={colorScheme === "dark" ? "#71717a" : "#171717"}
                  />
                </View>
                <View>
                  <Feather
                    name="share-2"
                    size={17}
                    color={colorScheme === "dark" ? "#71717a" : "#171717"}
                  />
                </View>
                <View>
                  <Feather
                    name="more-vertical"
                    size={17}
                    color={colorScheme === "dark" ? "#71717a" : "#171717"}
                  />
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </Link>
      <Text className="text-xs mb-2 text-neutral-900 dark:text-neutral-400 opacity-40">
        Yesterday
      </Text>
      <Link asChild href="/(screens)/player">
        <TouchableOpacity className="mb-3 rounded-2xl shadow-xl shadow-neutral-50 dark:shadow-neutral-900  shadow-xl shadow-neutral-50 dark:shadow-neutral-900  flex flex-row justify-between items-center gap-x-4 p-4 border-slate-100  dark:border-neutral-800 border bg-white dark:bg-neutral-950  w-full">
          <View className="w-[90px] h-[100px] rounded-xl  relative  ">
            <Image
              className="w-[90px] h-[100px] rounded-xl"
              source={require("../assets/images/video-sample-1.jpg")}
            />
            <View className="absolute left-0 top-0 w-full h-full flex items-center justify-center">
              <Feather name="play" size={24} color="white" />
            </View>
          </View>
          <View className="flex flex-1">
            <Text numberOfLines={2} className="mb-2  text-neutral-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
              perspiciatis adipisci voluptatibus ex reiciendis maxime provident
              odit. Suscipit tempora iusto natus, odit doloremque similique
              facere facilis aut non, voluptas eos?
            </Text>
            <View className="flex flex-row justify-start items-center gap-x-1 mb-3 opacity-50">
              <View>
                <Feather
                  name="calendar"
                  size={10}
                  color={colorScheme === "dark" ? "#71717a" : "#171717"}
                />
              </View>
              <View>
                <Text className="text-xs text-neutral-900 dark:text-neutral-500">
                  01-11-2024
                </Text>
              </View>
            </View>
            <View className="flex justify-between border rounded-xl p-2 border-slate-100 dark:border-neutral-900 flex-row items-center">
              <View>
                <Text className="text-neutral-900 dark:text-neutral-500 opacity-60">
                  5.21 MB
                </Text>
              </View>
              <View className="flex flex-row  justify-between  gap-x-6 opacity-30">
                <View>
                  <Feather
                    name="edit-2"
                    size={17}
                    color={colorScheme === "dark" ? "#71717a" : "#171717"}
                  />
                </View>
                <View>
                  <Feather
                    name="share-2"
                    size={17}
                    color={colorScheme === "dark" ? "#71717a" : "#171717"}
                  />
                </View>
                <View>
                  <Feather
                    name="more-vertical"
                    size={17}
                    color={colorScheme === "dark" ? "#71717a" : "#171717"}
                  />
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </Link>
      <View className="mb-3 shadow-xl shadow-neutral-50 dark:shadow-neutral-900  rounded-2xl flex flex-row justify-between items-center gap-x-4 p-4 border-slate-100  dark:border-neutral-800 border bg-white dark:bg-neutral-950 w-full">
        <View className="w-[90px] h-[100px] rounded-xl  relative  ">
          <Image
            className="w-[90px] h-[100px] rounded-xl"
            source={require("../assets/images/video-sample-2.jpg")}
          />
          <View className="absolute left-0 top-0 w-full h-full flex items-center justify-center">
            <Feather name="play" size={24} color="white" />
          </View>
        </View>
        <View className="flex flex-1">
          <Text numberOfLines={2} className="mb-2  text-neutral-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
            perspiciatis adipisci voluptatibus ex reiciendis maxime provident
            odit. Suscipit tempora iusto natus, odit doloremque similique facere
            facilis aut non, voluptas eos?
          </Text>
          <View className="flex flex-row justify-start items-center gap-x-1 mb-3 opacity-50">
            <View>
              <Feather
                name="calendar"
                size={10}
                color={colorScheme === "dark" ? "#71717a" : "#171717"}
              />
            </View>
            <View>
              <Text className="text-xs text-neutral-900 dark:text-neutral-500">
                01-11-2024
              </Text>
            </View>
          </View>
          <View className="flex justify-between border rounded-xl p-2 border-slate-100 dark:border-neutral-900 flex-row items-center">
            <View>
              <Text className="text-neutral-900 dark:text-neutral-500 opacity-60">
                10.02 MB
              </Text>
            </View>
            <View className="flex flex-row  justify-between  gap-x-6 opacity-30">
              <View>
                <Feather
                  name="edit-2"
                  size={17}
                  color={colorScheme === "dark" ? "#71717a" : "#171717"}
                />
              </View>
              <View>
                <Feather
                  name="share-2"
                  size={17}
                  color={colorScheme === "dark" ? "#71717a" : "#171717"}
                />
              </View>
              <View>
                <Feather
                  name="more-vertical"
                  size={17}
                  color={colorScheme === "dark" ? "#71717a" : "#171717"}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View className="mb-3 rounded-2xl shadow-xl shadow-neutral-50 dark:shadow-neutral-900  flex flex-row justify-between items-center gap-x-4 p-4 border-slate-100  dark:border-neutral-800 border bg-white dark:bg-neutral-950 w-full">
        <View className="w-[90px] h-[100px] rounded-xl  relative  ">
          <Image
            className="w-[90px] h-[100px] rounded-xl"
            source={require("../assets/images/video-sample-3.jpg")}
          />
          <View className="absolute left-0 top-0 w-full h-full flex items-center justify-center">
            <Feather name="play" size={24} color="white" />
          </View>
        </View>
        <View className="flex flex-1">
          <Text numberOfLines={2} className="mb-2  text-neutral-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
            perspiciatis adipisci voluptatibus ex reiciendis maxime provident
            odit. Suscipit tempora iusto natus, odit doloremque similique facere
            facilis aut non, voluptas eos?
          </Text>
          <View className="flex flex-row justify-start items-center gap-x-1 mb-3 opacity-50">
            <View>
              <Feather
                name="calendar"
                size={10}
                color={colorScheme === "dark" ? "#71717a" : "#171717"}
              />
            </View>
            <View>
              <Text className="text-xs text-neutral-900 dark:text-neutral-500">
                01-11-2024
              </Text>
            </View>
          </View>
          <View className="flex justify-between border rounded-xl p-2 border-slate-100 dark:border-neutral-900 flex-row items-center">
            <View>
              <Text className="text-neutral-900 dark:text-neutral-500 opacity-60">
                5.21 MB
              </Text>
            </View>
            <View className="flex flex-row  justify-between  gap-x-6 opacity-30">
              <View>
                <Feather
                  name="edit-2"
                  size={17}
                  color={colorScheme === "dark" ? "#71717a" : "#171717"}
                />
              </View>
              <View>
                <Feather
                  name="share-2"
                  size={17}
                  color={colorScheme === "dark" ? "#71717a" : "#171717"}
                />
              </View>
              <View>
                <Feather
                  name="more-vertical"
                  size={17}
                  color={colorScheme === "dark" ? "#71717a" : "#171717"}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View className="mb-3 rounded-2xl shadow-xl shadow-neutral-50 dark:shadow-neutral-900  flex flex-row justify-between items-center gap-x-4 p-4 border-slate-100  dark:border-neutral-800 border bg-white dark:bg-neutral-950 w-full">
        <View className="w-[90px] h-[100px] rounded-xl  relative  ">
          <Image
            className="w-[90px] h-[100px] rounded-xl"
            source={require("../assets/images/video-sample-4.jpg")}
          />
          <View className="absolute left-0 top-0 w-full h-full flex items-center justify-center">
            <Feather name="play" size={24} color="white" />
          </View>
        </View>
        <View className="flex flex-1">
          <Text numberOfLines={2} className="mb-2  text-neutral-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
            perspiciatis adipisci voluptatibus ex reiciendis maxime provident
            odit. Suscipit tempora iusto natus, odit doloremque similique facere
            facilis aut non, voluptas eos?
          </Text>
          <View className="flex flex-row justify-start items-center gap-x-1 mb-3 opacity-50">
            <View>
              <Feather
                name="calendar"
                size={10}
                color={colorScheme === "dark" ? "#71717a" : "#171717"}
              />
            </View>
            <View>
              <Text className="text-xs text-neutral-900 dark:text-neutral-500">
                01-11-2024
              </Text>
            </View>
          </View>
          <View className="flex justify-between border rounded-xl p-2 border-slate-100 dark:border-neutral-900 flex-row items-center">
            <View>
              <Text className="text-neutral-900 dark:text-neutral-500 opacity-60">
                10.02 MB
              </Text>
            </View>
            <View className="flex flex-row  justify-between  gap-x-6 opacity-30">
              <View>
                <Feather
                  name="edit-2"
                  size={17}
                  color={colorScheme === "dark" ? "#71717a" : "#171717"}
                />
              </View>
              <View>
                <Feather
                  name="share-2"
                  size={17}
                  color={colorScheme === "dark" ? "#71717a" : "#171717"}
                />
              </View>
              <View>
                <Feather
                  name="more-vertical"
                  size={17}
                  color={colorScheme === "dark" ? "#71717a" : "#171717"}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View className="mb-3 rounded-2xl shadow-xl shadow-neutral-50 dark:shadow-neutral-900  flex flex-row justify-between items-center gap-x-4 p-4 border-slate-100  dark:border-neutral-800 border bg-white dark:bg-neutral-950 w-full">
        <View className="w-[90px] h-[100px] rounded-xl  relative  ">
          <Image
            className="w-[90px] h-[100px] rounded-xl"
            source={require("../assets/images/video-sample-5.jpg")}
          />
          <View className="absolute left-0 top-0 w-full h-full flex items-center justify-center">
            <Feather name="play" size={24} color="white" />
          </View>
        </View>
        <View className="flex flex-1">
          <Text numberOfLines={2} className="mb-2  text-neutral-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
            perspiciatis adipisci voluptatibus ex reiciendis maxime provident
            odit. Suscipit tempora iusto natus, odit doloremque similique facere
            facilis aut non, voluptas eos?
          </Text>
          <View className="flex flex-row justify-start items-center gap-x-1 mb-3 opacity-50">
            <View>
              <Feather
                name="calendar"
                size={10}
                color={colorScheme === "dark" ? "#71717a" : "#171717"}
              />
            </View>
            <View>
              <Text className="text-xs text-neutral-900 dark:text-neutral-500">
                01-11-2024
              </Text>
            </View>
          </View>
          <View className="flex justify-between border rounded-xl p-2 border-slate-100 dark:border-neutral-900 flex-row items-center">
            <View>
              <Text className="text-neutral-900 dark:text-neutral-500 opacity-60">
                5.21 MB
              </Text>
            </View>
            <View className="flex flex-row  justify-between  gap-x-6 opacity-30">
              <View>
                <Feather
                  name="edit-2"
                  size={17}
                  color={colorScheme === "dark" ? "#71717a" : "#171717"}
                />
              </View>
              <View>
                <Feather
                  name="share-2"
                  size={17}
                  color={colorScheme === "dark" ? "#71717a" : "#171717"}
                />
              </View>
              <View>
                <Feather
                  name="more-vertical"
                  size={17}
                  color={colorScheme === "dark" ? "#71717a" : "#171717"}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View className="mb-3 rounded-2xl shadow-xl shadow-neutral-50 dark:shadow-neutral-900  flex flex-row justify-between items-center gap-x-4 p-4 border-slate-100  dark:border-neutral-800 border bg-white dark:bg-neutral-950 w-full">
        <View className="w-[90px] h-[100px] rounded-xl  relative  ">
          <Image
            className="w-[90px] h-[100px] rounded-xl"
            source={require("../assets/images/video-sample-6.jpg")}
          />
          <View className="absolute left-0 top-0 w-full h-full flex items-center justify-center">
            <Feather name="play" size={24} color="white" />
          </View>
        </View>
        <View className="flex flex-1">
          <Text numberOfLines={2} className="mb-2  text-neutral-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
            perspiciatis adipisci voluptatibus ex reiciendis maxime provident
            odit. Suscipit tempora iusto natus, odit doloremque similique facere
            facilis aut non, voluptas eos?
          </Text>
          <View className="flex flex-row justify-start items-center gap-x-1 mb-3 opacity-50">
            <View>
              <Feather
                name="calendar"
                size={10}
                color={colorScheme === "dark" ? "#71717a" : "#171717"}
              />
            </View>
            <View>
              <Text className="text-xs text-neutral-900 dark:text-neutral-500">
                01-11-2024
              </Text>
            </View>
          </View>
          <View className="flex justify-between border rounded-xl p-2 border-slate-100 dark:border-neutral-900 flex-row items-center">
            <View>
              <Text className="text-neutral-900 dark:text-neutral-500 opacity-60">
                10.02 MB
              </Text>
            </View>
            <View className="flex flex-row  justify-between  gap-x-6 opacity-30">
              <View>
                <Feather
                  name="edit-2"
                  size={17}
                  color={colorScheme === "dark" ? "#71717a" : "#171717"}
                />
              </View>
              <View>
                <Feather
                  name="share-2"
                  size={17}
                  color={colorScheme === "dark" ? "#71717a" : "#171717"}
                />
              </View>
              <View>
                <Feather
                  name="more-vertical"
                  size={17}
                  color={colorScheme === "dark" ? "#71717a" : "#171717"}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default VideoListCard;
