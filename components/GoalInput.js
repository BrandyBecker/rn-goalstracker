import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoal(enteredText)
    }

    return (
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
                onPress={props.onAddGoal.bind(this, enteredGoal)} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        width: '80%'
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});


export default GoalInput;