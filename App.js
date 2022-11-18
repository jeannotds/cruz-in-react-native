// import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [enteredGoalsText, setEnteredGoalsText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const [count, setCount] = useState(0);

  const goalInputHandle = (entreredText) => {
    setEnteredGoalsText(entreredText);
  };

  console.log(count);

  const addGoalsHandle = () => {
    // setCourseGoals((currentCourseGoals) => [
    //   ...currentCourseGoals,
    //   enteredGoalsText,
    // ]);
    setCourseGoals([...courseGoals, enteredGoalsText]);
    console.log(courseGoals);
    // setEnteredGoalsText("");
  };

  return (
    <View style={styles.appAontainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.TextInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandle}
        />
        <Button title="Add Goal" onPress={addGoalsHandle} required />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goal : {courseGoals.length} </Text>
        {courseGoals.map((goal, index) => (
          <View style={styles.goalItem} key={`${goal}-${index}`}>
            <Text style={styles.colorText}>
              {index + 1} : {goal}
            </Text>
          </View>
          
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appAontainer: {
    flex: 1,
    marginTop: 30,
    paddingTop: 20,
    paddingHorizontal: 16,
  },
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
    // backgroundColor: "#ededed"
  },
  goalsContainer: {
    flex: 3,
  },
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
