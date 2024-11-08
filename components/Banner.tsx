import React, { FunctionComponent, useEffect, useState } from "react";
import {
  Alert,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { colorScheme, useColorScheme } from "nativewind";
import { Link } from "expo-router";
import DiskStorageChart from "./DiskStorage";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { PieChart } from "react-native-chart-kit";
import * as FileSystem from "expo-file-system";
import Feather from "@expo/vector-icons/Feather";

const Banner: FunctionComponent = () => {
  const { colorScheme } = useColorScheme();
  const [modalVisible, setModalVisible] = useState(false);
  const [storageData, setStorageData] = useState(null);
  const [usedStorage, setUsedStorage] = useState(0);
  const [totalStorage, setTotalStorage] = useState(0);
  const [bgColor, setBgColor] = useState("#404040");

  useEffect(() => {
    setBgColor(colorScheme === "dark" ? "#404040" : "#fff");

    const getStorageInfo = async () => {
      const freeSpace = await FileSystem.getFreeDiskStorageAsync();
      const totalSpace = await FileSystem.getTotalDiskCapacityAsync();
      const usedSpace = totalSpace - freeSpace;

      setUsedStorage(usedSpace);
      setTotalStorage(totalSpace);

      setStorageData([
        {
          name: "Free",
          storage: freeSpace,
          color: "#16A34A",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15,
        },
        {
          name: "Used",
          storage: usedSpace,
          color: "#f97316",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15,
        },
      ]);
    };

    getStorageInfo();
  }, []);

  return (
    // <Link asChild href={"/storage"}>
    <View className="flex flex-row justify-between w-full p-4 bg-white shadow-xl shadow-neutral-50 dark:shadow-neutral-900 rounded-2xl dark:bg-neutral-900">
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        className="p-4 mr-3 flex-1 h-[190px]  border   border-slate-200 dark:border-neutral-900 bg-white dark:bg-neutral-950  rounded-2xl"
      >
        <DiskStorageChart />
      </TouchableOpacity>
      <View className="flex flex-1 p-4 bg-white border border-slate-200 dark:border-neutral-900 rounded-2xl dark:bg-neutral-950">
        <View className="flex flex-row gap-2 mb-5 ">
          <View className="w-1/2 flex-1 rounded-2xl h-[70px] border shadow-sm shadow-slate-200 dark:shadow-neutral-900 bg-slate-50 dark:bg-neutral-900 border-slate-100 dark:border-neutral-800 p-2 flex justify-center items-center">
            <Feather
              name="camera"
              size={24}
              color={colorScheme === "dark" ? "#fff" : "#000"}
            />
            <Text className="text-[8px] text-neutral-500 mt-2">Camera</Text>
          </View>
          <TouchableOpacity className="w-1/2  flex-1 rounded-2xl h-[70px] border shadow-sm shadow-slate-200 dark:shadow-neutral-900 bg-slate-50 dark:bg-neutral-900 border-slate-100 dark:border-neutral-800 p-2 flex justify-center items-center">
            <Feather
              name="image"
              size={24}
              color={colorScheme === "dark" ? "#fff" : "#000"}
            />
            <Text className="text-[8px] text-neutral-500 mt-2">
              Screenshotz
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row gap-2 ">
          <View className="w-1/2 flex-1 rounded-2xl h-[70px] border shadow-sm  shadow-slate-200 dark:shadow-neutral-900 bg-slate-50 dark:bg-neutral-900 border-slate-100 dark:border-neutral-800 p-2 flex justify-center items-center">
            <Feather
              name="edit"
              size={24}
              color={colorScheme === "dark" ? "#fff" : "#000"}
            />
            <Text className="text-[8px] text-neutral-500 mt-2">Edit</Text>
          </View>
          <View className="w-1/2  flex-1 rounded-2xl h-[70px] border shadow-sm shadow-slate-200 dark:shadow-neutral-900  bg-slate-50 dark:bg-neutral-900 border-slate-100 dark:border-neutral-800 p-2 flex justify-center items-center">
            <Feather
              name="stop-circle"
              size={24}
              color={colorScheme === "dark" ? "#fff" : "#000"}
            />
            <Text className="text-[8px] text-neutral-500 mt-2">Assistive</Text>
          </View>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View className="flex justify-center items-center flex-1">
          <View
            style={[
              styles.modalView,
              {
                backgroundColor: colorScheme === `dark` ? `#404040` : `#fafafa`,
              },
            ]}
          >
            <View className="flex justify-between items-center flex-row w-full border border-neutral-300 dark:border-neutral-600 border-x-0 border-t-0 p-4">
              <View>
                <Text className="text-2xl  dark:text-neutral-50 text-left">
                  Storage Space
                </Text>
              </View>
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Feather
                  name="x"
                  size={24}
                  color={colorScheme === "dark" ? "#fff" : "#000"}
                />
              </Pressable>
            </View>
            {storageData && (
              <PieChart
                data={storageData}
                width={400}
                hasLegend={true}
                height={150}
                chartConfig={{
                  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                }}
                accessor="storage"
                backgroundColor="transparent"
                absolute={false}
                center={[30, 0]}
                style={{}}
              />
            )}
            <View className="mb-4">
              {storageData && (
                <Text className="text-xl font-semibold opacity-80 text-neutral-950 dark:text-slate-100">{`${(
                  usedStorage /
                  1024 ** 3
                ).toFixed(2)} GB / ${(totalStorage / 1024 ** 3).toFixed(
                  2
                )} GB`}</Text>
              )}
            </View>
          </View>
        </View>
      </Modal>
    </View>
    // </Link>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 0,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    width: "90%",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default Banner;
