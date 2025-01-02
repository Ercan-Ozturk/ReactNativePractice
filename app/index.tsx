import { Text, View } from "react-native";
import "../global.css";
import { Counter } from "./store";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Index Page</Text>

      <Counter></Counter>
    </View>
  );
}
