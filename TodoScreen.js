import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TaskItem from "./src/components/TaskItem";
import EmptyList from "./src/components/EmptyList";
import TaskInput from "./src/components/TaskInput";

const TodoScreen = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem("@todo_app_tasks");
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    } catch (error) {
      console.error("Error loading tasks:", error);
    }
  };

  const saveTasks = async (updatedTasks) => {
    try {
      await AsyncStorage.setItem(
        "@todo_app_tasks",
        JSON.stringify(updatedTasks)
      );
      setTasks(updatedTasks);
    } catch (error) {
      console.error("Error saving tasks:", error);
    }
  };

  const handleAddTask = (taskText) => {
    const newTask = {
      id: Date.now().toString(),
      text: taskText,
      completed: false,
    };
    const updatedTasks = [...tasks, newTask];
    saveTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    saveTasks(updatedTasks);
  };

  const handleCompleteTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    saveTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <TaskInput onAddTask={handleAddTask} />
      {tasks.length === 0 ? (
        <EmptyList />
      ) : (
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <TaskItem
              task={item}
              onDelete={handleDeleteTask}
              onComplete={handleCompleteTask}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default TodoScreen;
