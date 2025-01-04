import { View, Text } from "react-native";
import React from "react";
import "../global.css";

type Props = {
  label: string;
  onPress?: () => void;
};
export default function Button({ label, onPress }: Props) {
  return (
    <View className="max-w-sm p-4 flex">
      <button
        className="bg-blue-500 hover:bg-blue-700  py-2 px-4 border border-blue-700 rounded text-white font-bold"
        onClick={onPress}
      >
        {label}
      </button>
    </View>
  );
}
