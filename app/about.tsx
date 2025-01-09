import { Text, View } from "react-native";
import "../global.css";
import { useStore } from "../stores/store";
import Card from "@/components/Card";
import { useTodoStore } from "@/stores/todoStore";

export default function About() {
  const count = useStore().count;
  const todo = useTodoStore().todo;
  const todo_array = useTodoStore().todo_array;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
      }}
    >
      <div className="flex flex-col gap-4">
        <Text>About Page</Text>
        <Card label={"Current count is: " + count}></Card>

        <Card label={"Current todo is: " + todo}></Card>
        {/* <Card label={"Current todo array is: " + todo_array}></Card> */}
      </div>
    </View>
  );
}
