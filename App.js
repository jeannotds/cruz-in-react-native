// import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableHighlight,
} from "react-native";

export default function App() {
  const [enteredGoalsText, setEnteredGoalsText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandle = (entreredText) => {
    setEnteredGoalsText(entreredText);
  };

  const addGoalsHandle = () => {
    if (enteredGoalsText !== "") {
      setCourseGoals([...courseGoals, enteredGoalsText]);
      console.log(courseGoals);
      setEnteredGoalsText("");
    } else {
      alert("Veillez entrer une information !");
    }
  };

  const showUserHandle = (goal, index) => {
    let number = "N°" + index;
    let comment = " : ";
    let identite = goal;
    alert(number + comment + identite);
  };

  return (
    <View style={styles.appAontainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.TextInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandle}
          value={enteredGoalsText}
        />
        <Button title="Add Goal" onPress={addGoalsHandle} required />
      </View>
      <Text>List of goal : {courseGoals.length} </Text>
      <View style={styles.goalsContainer}>
        <ScrollView>
          {courseGoals.map((goal, index) => (
            <TouchableHighlight
              style={styles.goalItem}
              key={`${goal}-${index}`}
              onPress={() => showUserHandle(goal, index + 1)}
            >
              <Text style={styles.colorText}>
                {index + 1} : {goal}
              </Text>
            </TouchableHighlight>
          ))}
        </ScrollView>
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
