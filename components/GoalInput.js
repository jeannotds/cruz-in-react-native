import React from "react";
import { StyleSheet } from "react-native";
import { View, TextInput, Button } from "react-native";
import { useState } from "react";

export default function GoalInput({onAddGoals}) {
  const [enteredGoalsText, setEnteredGoalsText] = useState("");

  const goalInputHandle = (entreredText) => {
    setEnteredGoalsText(entreredText);
  };

  const addGoalsHandle = () => {
    onAddGoals(enteredGoalsText);
    setEnteredGoalsText("");
    console.log("'enteredGoalsText' :", enteredGoalsText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.TextInput}
        placeholder="Your course goal!"
        onChangeText={goalInputHandle}
        value={enteredGoalsText}
      />
      <Button title="Add Goal" onPress={addGoalsHandle} required />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 25,
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  TextInput: {
    borderColor: "#cccccc",
    borderWidth: 1,
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
