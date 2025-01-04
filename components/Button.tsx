import { View, Text } from "react-native";
import React from "react";
import "../global.css";

type Props = {
  label: string;
};
export default function Button({ label }: Props) {
  return (
    <View className="max-w-sm">
      <button className="bg-blue-500 hover:bg-blue-700  py-2 px-4 border border-blue-700 rounded text-white font-bold">
        {label}
      </button>
    </View>
  );
}
