import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as FileSystem from "expo-file-system";
import { PieChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

const Storage = () => {
  const [storageData, setStorageData] = useState(null);
  const [usedStorage, setUsedStorage] = useState(0);
  const [totalStorage, setTotalStorage] = useState(0);

  useEffect(() => {
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
        },
        {
          name: "Used",
          storage: usedSpace,
          color: "#000",
        },
      ]);
    };

    getStorageInfo();
  }, []);

  return (
    <View className="flex justify-start h-full p-4 bg-slate-50 dark:bg-neutral-950">
      <Text className="mb-5 text-2xl font-semibold dark:text-slate-200">
        Storage Space
      </Text>
      <View className="flex items-center justify-center p-5 bg-white border shadow-xl dark:bg-neutral-900 shadow-neutral-50 dark:shadow-neutral-900 border-slate-100 dark:border-slate-800 rounded-2xl">
        {storageData && (
          <PieChart
            data={storageData}
            width={500}
            height={100}
            paddingLeft={20}
            chartConfig={{
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            }}
            accessor="storage"
            backgroundColor="transparent"
            absolute={false}
          />
        )}
        <View className="px-6 border border-1 border-slate-50 dark:border-slate-800 rounded-2xl">
          {storageData && (
            <Text className="my-2 text-lg dark:text-slate-300">{`${(
              usedStorage /
              1024 ** 3
            ).toFixed(2)} GB / ${(totalStorage / 1024 ** 3).toFixed(
              2
            )} GB occupied`}</Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default Storage;
