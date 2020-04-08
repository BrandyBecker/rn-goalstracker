import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText){
    setEnteredGoal(enteredText)
  }

  function addGoalHandler(){
    setCourseGoals([...courseGoals, {key: Math.random().toString()}])
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

      <FlatList
        data={courseGoals}
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text>{itemData.item}</Text>
          </View>
        )}
      />

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
  },
  listItem:{
    padding: '5%',
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: '3%',
    alignItems: 'center'
  }
});
