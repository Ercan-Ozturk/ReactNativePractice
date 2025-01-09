import { Text, View } from "react-native";
import "../global.css";
import { useStore } from "../stores/store";
import Card from "@/components/Card";
import { useTodoStore } from "@/stores/todoStore";

export default function About() {
  const count = useStore().count;
  const todo = useTodoStore().todo;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
      }}
    >
      <Text>About Page</Text>
      <Card label={"Current count is: " + count}></Card>

      <Card label={"Current todo is: " + todo}></Card>
    </View>
  );
}
