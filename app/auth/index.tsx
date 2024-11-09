import React, { FunctionComponent } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSession } from "../cxt";

const Index: FunctionComponent = () => {
  const { signIn } = useSession();
  const response = { data: { token: "kkk", userName: "dsds" } };

  return (
    <View className="flex flex-1 justify-center items-center">
      <TouchableOpacity onPress={() => signIn(response)}>
        <Text>Sign in with google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Index;
