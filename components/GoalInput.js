import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoal(enteredText)
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('')
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                {/* Text Input View */}
                <TextInput
                    placeholder="What is your goal ?"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal} />

                {/* Button View */}
                <View style={styles.buttonContainer}>

                    <View style={styles.button}>
                        <Button title="Cancel" color='red' onPress={props.onCancel} />
                    </View>

                    <View style={styles.button}>
                        <Button title="Add" onPress={addGoalHandler} />
                    </View>

                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        width: '80%',
        padding: 10,
        marginBottom: 10
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%'
    },
    button:{
        width: '40%'
    }
});


export default GoalInput;