import React, { useState } from "rect";
import { View, StyleSheet, TextInput, Button } from "react-native";

const TaskInput = ({ onAddText }) => {
  const [taskText, setTaskText] = useState("");

  const handleAddText = () => {
    if (taskText.trim() !== "") {
      onAddText(taskText.trim());
      setTaskText("");
    }
  };

  return (
    <View style={StyleSheet.inputContainer}>
      <TextInput
        style={StyleSheet.input}
        placeholder="Add a task"
        value={taskText}
        onChangeText={(text) => setTaskText(text)}
      />

      <Button title="ADD" onPress={handleAddText} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginRight: 10,
  },
});

export default TaskInput();
