import { Text, View } from "react-native";
import "../global.css";
import { useStore } from "./store";
import Card from "@/components/Card";

export default function About() {
  const count = useStore().count;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>About Page</Text>
      <Card label={"Current count is: " + count}></Card>
    </View>
  );
}
