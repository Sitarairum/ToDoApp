import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const TaskItem = ({ task, onDelete, onComplete }) => {
  return (
    <View style={styles.taskItem}>
      <TouchableOpacity onPress={() => onComplete(task.id)}>
        <Text
          style={task.completed ? styles.taskTextCompleted : styles.taskText}
        >
          {task.text}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onDelete(task.id)}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  taskText: {
    fontSize: 18,
  },
  taskTextCompleted: {
    fontSize: 18,
    textDecorationLine: "line-through",
    color: "#ccc",
  },
  deleteButtonText: {
    color: "red",
    fontSize: 16,
  },
});

export default TaskItem;
