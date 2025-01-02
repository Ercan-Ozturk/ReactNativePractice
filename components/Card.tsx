import { View, Text } from "react-native";
import React from "react";

type Props = {
  label: string;
};

export default function Card({ label }: Props) {
  return <View className="">{label}</View>;
}
