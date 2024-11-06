import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as FileSystem from "expo-file-system";
import { PieChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

const Storage: FunctionComponent = () => {
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
    <View className="flex justify-start h-full p-4">
      <Text className="text-2xl font-semibold">Storage</Text>
      <View className="flexx justify-center items-center">
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
        {storageData && (
          <Text className="text-xs">
            {`${(usedStorage / 1024 ** 3).toFixed(2)} GB / ${(
              totalStorage /
              1024 ** 3
            ).toFixed(2)} GB`}
            Occupied dd| $(totalSpace)
          </Text>
        )}
      </View>
    </View>
  );
};

export default Storage;
