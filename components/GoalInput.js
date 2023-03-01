import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal} from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputerHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
  <Modal visible={props.visible} animationType="slide">
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        onChangeText={goalInputerHandler}
        value={enteredGoalText}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
      <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.button}>
      <Button title="Cancel"/>
      </View>
      </View>
    </View>
  </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    padding: 16
  },
  buttonContainer: {
    marginTop: 8,
    flexDirection: "row"
  },
  button: {
    width: 100,
    marginHorizontal: 8
  }
});
