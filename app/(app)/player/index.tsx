import { useState, useRef } from "react";
import { View, StyleSheet, Button } from "react-native";
import { Video, ResizeMode } from "expo-av";

export default function VIdeoPlayer() {
  const video = useRef(null);
  const [status, setStatus] = useState({});
  return (
    <View className="w-full h-full flex-1">
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
        useNativeControls
        resizeMode={ResizeMode.COVER}
        isLooping
        shouldPlay
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  video: {
    width: "100%",
    height: "100%",
  },
});
