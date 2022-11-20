// import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalsHandle = (enteredGoalsText) => {
    if (enteredGoalsText !== "") {
      setCourseGoals([
        ...courseGoals,
        { text: enteredGoalsText, id: Math.random().toString() },
      ]);
      console.log(courseGoals);
    } else {
      alert("Veillez entrer une information !");
    }
  };

  const deleteGoalHandle = (id) => {
    setCourseGoals((currentCourse) => {
      return currentCourse.filter((goal) => goal.id != id);
    });
  };

  return (
    <View style={styles.appAontainer}>
      <Text>List of goal : {courseGoals.length} </Text>
      <GoalInput onAddGoals={addGoalsHandle} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandle}
                id={itemData.item.id}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
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
