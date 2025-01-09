import { Pressable, Text, TextInput, View } from "react-native";
import "../global.css";
import { Counter, useStore } from "../stores/store";
import { Link } from "expo-router";
import Button from "@/components/Button";
import TODOBox from "@/components/TODOBox";

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
      <TODOBox />
      <Counter />
      <Link href="/about" asChild>
        <Pressable className="bg-blue-500 hover:bg-blue-700  py-2 px-4 border border-blue-700 rounded">
          <Text className="text-white font-bold">Go to About Page</Text>
        </Pressable>
      </Link>
    </View>
  );
}
