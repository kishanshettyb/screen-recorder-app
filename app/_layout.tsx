import { SessionProvider } from "./cxt";
import { Slot } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useState, useRef, useCallback, useEffect } from "react";
import { View, Text, ScrollView, RefreshControl } from "react-native";
import NetInfo from "@react-native-community/netinfo";
// Create a new query client
const queryClient = new QueryClient();

// Custom hook to store the previous state
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export default function Root() {
  const [isConnected, setIsConnected] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const prevIsConnected = usePrevious(isConnected);

  // Pull to refresh handler
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // Simulate a reload by resetting the root component
    setTimeout(() => {
      // Simulate a full app reload by resetting the root state or root component
      resetApp();
      setRefreshing(false);
    }, 1000); // Simulate a network request or some async task
  }, []);

  const resetApp = () => {
    // A simple way to reset the app without `expo-updates` or external libraries
    queryClient.clear(); // Clear react-query cache if necessary
    // Force rerender the root by managing state or reloading the component
    // Optionally navigate to the root screen to simulate an app reload
    // Here we are simply unmounting and remounting the Slot
    setShowMessage(false); // Reset any temporary messages
  };

  // Monitor network connection
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);

      // Check for connection state change
      if (prevIsConnected === true && state.isConnected === false) {
        setMessageText("Please check your connection!");
        setShowMessage(true);
        const timer = setTimeout(() => {
          setShowMessage(false);
        }, 3000);
        return () => clearTimeout(timer);
      } else if (prevIsConnected === false && state.isConnected === true) {
        setMessageText("Back to online");
        setShowMessage(true);
        const timer = setTimeout(() => {
          setShowMessage(false);
        }, 3000);
        return () => clearTimeout(timer);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [isConnected, prevIsConnected]);

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <ScrollView
          className="flex-1"
          contentContainerStyle={{ flex: 1 }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <Slot />
          {showMessage && (
            <View className="absolute z-50 items-center justify-center w-full bottom-20">
              <View
                className={`w-full h-10 justify-center items-center ${
                  isConnected ? "bg-green-500" : "bg-red-500"
                }`}
              >
                <Text className="text-sm text-white">{messageText}</Text>
              </View>
            </View>
          )}
        </ScrollView>
      </SessionProvider>
    </QueryClientProvider>
  );
}
