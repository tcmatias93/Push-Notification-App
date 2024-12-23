import { View, Text } from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { useLocalSearchParams } from "expo-router";

const ChatIdScreen = () => {
  const { id } = useLocalSearchParams();
  return (
    <View style={{ marginHorizontal: 10 }}>
      <ThemedText style={{ fontSize: 25, marginBottom: 10 }}>
        Chat Id Screen
      </ThemedText>

      <ThemedText style={{ fontSize: 25, marginBottom: 10 }}>
        Chat Id {id}
      </ThemedText>
    </View>
  );
};

export default ChatIdScreen;
