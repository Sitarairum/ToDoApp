import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EmptyList = () => {
  return (
    <View style={styles.emptyList}>
      <Text style={styles.emptyListText}>No tasks available.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  emptyList: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyListText: {
    fontSize: 18,
    color: "#888",
  },
});

export default EmptyList;
