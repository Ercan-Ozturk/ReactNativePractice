import { Text, View } from "react-native";
import "../global.css";
import { useStore } from "./store";

export default function About() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>About Page</Text>

      <Text>Current count is {useStore().count}</Text>
    </View>
  );
}
