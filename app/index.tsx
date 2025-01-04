import { Pressable, Text, TextInput, View } from "react-native";
import "../global.css";
import { Counter, useStore } from "./store";
import { Link } from "expo-router";
import Button from "@/components/Button";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Text>Index Page</Text>
      <TextInput
        placeholder="To-Do"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 
        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      ></TextInput>
      <Button label="Save TODO"></Button>
      <Counter></Counter>

      <Link href="/about" asChild>
        <Pressable className="bg-blue-500 hover:bg-blue-700  py-2 px-4 border border-blue-700 rounded">
          <Text className="text-white font-bold">Go to About Page</Text>
        </Pressable>
      </Link>
    </View>
  );
}
