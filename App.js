import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');

  function goalInputHandler(enteredText){
    setEnteredGoal(enteredText)
  }

  function addGoalHandler(){
    console.log(enteredGoal)
  }

  return (
    <View 
    style={styles.screen}>
      {/* Main App View */}

      <View 
      style={styles.inputContainer}>
        {/* Text Input View */}
        <TextInput
        placeholder="What is your goal ?" 
        style={styles.input} 
        onChangeText={goalInputHandler}
        value={enteredGoal} />

        {/* Button View */}
        <Button 
        title="Add"
        onPress={addGoalHandler} />
      </View>
      <View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%'
  }
});
