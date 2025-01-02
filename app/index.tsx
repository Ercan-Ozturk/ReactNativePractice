import { Pressable, Text, View } from "react-native";
import "../global.css";
import { Counter } from "./store";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
      }}
    >
      <Text>Index Page</Text>

      <Counter></Counter>

      <Link href="/about" asChild>
        <Pressable className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
          <Text>Go to About Page</Text>
        </Pressable>
      </Link>
    </View>
  );
}
