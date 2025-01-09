import { View, Text, TextInput } from "react-native";
import { useState } from "react";
import Button from "./Button";
import { useTodoStore } from "@/stores/todoStore";

export default function TODOBox() {
  const todo = useTodoStore((state) => state.todo);
  const save_todo = useTodoStore((state) => state.save_todo);
  const [inputValue, setInputValue] = useState("");
  return (
    <View>
      <TextInput
        placeholder="To-Do"
        onChangeText={(text) => setInputValue(text)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 
        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      ></TextInput>
      <Button label="Save TODO" onPress={() => save_todo(inputValue)}></Button>
    </View>
  );
}
