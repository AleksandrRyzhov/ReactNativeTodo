import React from 'react';
import {StyleSheet, TextInput, Text, View} from 'react-native';
import {CheckBox} from 'react-native-elements'
import Button from "react-native-button";


class TodoListHeader extends React.Component {

    state = {
        error: false,
        input: ""
    }

    onAddTaskClick = () => {
        let newText = this.state.input;
               this.setState({input: ""});
        if (this.state.input === "") {
            this.setState({error: true})
        } else {
            this.setState({error: false})
            this.props.addTask(newText)
            this.state.input = ''
        }


    };

    render = () => {
        return (
            <View>
                <View style={styles.taskValue}>
                    <TextInput
                        style={[styles.input, (this.state.error === true) && styles.errorInput]}
                        value={this.state.input}
                               onChangeText={(text) => this.setState({input: text, error: false})}
                               type="text" placeholder="New task name"/>
                    <Button style={styles.button} onPress={this.onAddTaskClick}>Add</Button>
                </View>
                    </View>
        );
    }
}

export default TodoListHeader;

const styles = StyleSheet.create({
    taskValue: {
        // flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
                flexDirection: 'row'
    },
    input: {
        width: 250,
        margin: 1,
        padding: 1,
        borderRadius: 3,
        borderWidth: 0.5,
        borderColor: '#68fdff',
    },
    button: {
        width: 120,
        margin: 1,
        padding: 5,
        borderRadius: 3,
        borderWidth: 0.5,
        borderColor: '#68fdff',
    },
    errorInput: {
                borderColor: '#ff1400',
    },
});
