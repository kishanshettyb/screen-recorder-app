import { StatusBar } from "expo-status-bar";
import React, { FunctionComponent } from "react";
import { View, Text, Image } from "react-native";
import Feather from "@expo/vector-icons/Feather";
const Profile: FunctionComponent = () => {
  return (
    <View className="flex  bg-slate-50 h-full">
      <StatusBar style="light" />
      <View className="bg-neutral-900 h-[200px] w-full"></View>
      <View className="flex items-center">
        <Image
          source={require("../../../assets/images/profile.jpg")}
          className="w-[150px] h-[150px] rounded-full border-4 shadow-2xl -mt-20  border-slate-50"
        />
        <Text className="text-3xl font-bold mt-4">John Williams</Text>
        <Text className="text-xl opacity-60">
          🪙{" "}
          <Text className="text-xl text-yellow-600  font-bold my-4">
            Gold Member
          </Text>
        </Text>
      </View>
      <View className="px-6 border border-t-0 border-x-0 border-slate-200">
        <View className="flex  flex-row  justify-between items-center mb-4 mt-5 ">
          <View>
            <Text className="text-xl opacity-50 font-semibold">Phone</Text>
          </View>
          <View>
            <Text className="text-xl opacity-50 font-semibold">
              +91 99999 99999
            </Text>
          </View>
        </View>
        <View className="flex flex-row  justify-between items-center mb-4">
          <View>
            <Text className="text-xl opacity-50 font-semibold">Mail</Text>
          </View>
          <View>
            <Text className="text-xl opacity-50 font-semibold">
              contact@example.com
            </Text>
          </View>
        </View>
      </View>
      <View className="p-6">
        <View className="flex justify-between py-4 flex-row border border-x-0 border-t-0 border-slate-200">
          <View className="flex justify-between items-center flex-row">
            <View>
              <Feather name="moon" size={24} color="black" />
            </View>
            <View>
              <Text className="text-xl font-semibold ms-4">Dark Mode</Text>
            </View>
          </View>
          <View>
            <Text>
              <Feather name="chevron-right" size={24} color="black" />
            </Text>
          </View>
        </View>
        <View className="flex justify-between py-4 flex-row border border-x-0 border-t-0 border-slate-200">
          <View className="flex justify-between items-center flex-row">
            <View>
              <Feather name="credit-card" size={24} color="black" />
            </View>
            <View>
              <Text className="text-xl font-semibold ms-4">Cards</Text>
            </View>
          </View>
          <View>
            <Text>
              <Feather name="chevron-right" size={24} color="black" />
            </Text>
          </View>
        </View>
        <View className="flex justify-between py-4 flex-row border border-x-0 border-t-0 border-slate-200">
          <View className="flex justify-between items-center flex-row">
            <View>
              <Feather name="user" size={24} color="black" />
            </View>
            <View>
              <Text className="text-xl font-semibold ms-4">
                Profile Details
              </Text>
            </View>
          </View>
          <View>
            <Text>
              <Feather name="chevron-right" size={24} color="black" />
            </Text>
          </View>
        </View>
        <View className="flex justify-between py-4 flex-row border border-x-0 border-t-0 border-slate-200">
          <View className="flex justify-between items-center flex-row">
            <View>
              <Feather name="settings" size={24} color="black" />
            </View>
            <View>
              <Text className="text-xl font-semibold ms-4">Settings</Text>
            </View>
          </View>
          <View>
            <Text>
              <Feather name="chevron-right" size={24} color="black" />
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;
