import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import * as FileSystem from "expo-file-system";
import { PieChart } from "react-native-chart-kit";

export default function DiskStorageChart() {
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
					color: "#16A34A"
				},
				{
					name: "Used",
					storage: usedSpace,
					color: "#f97316"
				}
			]);
		};

		getStorageInfo();
	}, []);

	return (
		<View className="flex items-center justify-between text-center">
			<View className="border rounded-lg px-2 py-1 bg-slate-50 dark:bg-neutral-900 w-[130px] flex justify-center items-center border-slate-100 dark:border-neutral-900">
				<Text className="dark:text-neutral-500">📁 Files Storage</Text>
			</View>
			<View>
				{storageData && (
					<PieChart
						data={storageData}
						width={200}
						hasLegend={false}
						height={100}
						chartConfig={{
							color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`
						}}
						accessor="storage"
						backgroundColor="transparent"
						absolute={false}
						center={[50, 0]}
					/>
				)}
			</View>
			<View>
				{storageData && (
					<Text className="text-sm font-semibold opacity-80 text-neutral-950 dark:text-slate-100">{`${(usedStorage / 1024 ** 3).toFixed(2)} GB / ${(
						totalStorage /
						1024 ** 3
					).toFixed(2)} GB`}</Text>
				)}
			</View>
		</View>
	);
}
