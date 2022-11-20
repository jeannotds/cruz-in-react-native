import React from "react";
import { TouchableHighlight, Text, Pressable, View } from "react-native";
import { StyleSheet } from "react-native";

export default function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "gray" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.colorText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
    padding: 8,
  },
  colorText: {
    color: "white",
  },
});
