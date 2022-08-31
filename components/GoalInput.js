import { useState } from 'react'
import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native';

function GoalInput(props) {

    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(e) {
        setEnteredGoalText(e);
    };

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/todoAdd.png')} />
                <TextInput
                    style={styles.textInput}
                    placeholder='Your course goal!'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="Add goal" onPress={addGoalHandler} /></View>
                    <View style={styles.button}><Button title="Cancel" onPress={props.onCancel} /></View>
                </View>
            </View>
        </Modal>
    )
}
export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        backgroundColor: '#f4c430'
    },
    image: {
        width: 106,
        height: 110,
        marginBottom: 20
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#003F7F',
        width: '100%',
        padding: 8,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row'
    },
    button: {
        width: '40%',
        marginHorizontal: 8
    }
})