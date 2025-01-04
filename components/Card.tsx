import { View, Text } from "react-native";
import React from "react";
import "../global.css";

type Props = {
  label: string;
};

export default function Card({ label }: Props) {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">
      <h5 className="text-white">{label}</h5>
    </div>
  );
}
