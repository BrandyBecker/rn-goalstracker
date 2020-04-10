import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem.js';
import GoalInput from './components/GoalInput.js';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals([...courseGoals, { id: Math.random().toString(), value: goalTitle }])
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals =>{
      return currentGoals.filter((goal)=> goal.id !== goalId );
    })
  }

  return (
    <View
      style={styles.screen}>
      {/* Main App View */}
      <GoalInput onAddGoal={addGoalHandler}/>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem onDelete={removeGoalHandler.bind(this, itemData.item.id)} title={itemData.item.value} />
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
