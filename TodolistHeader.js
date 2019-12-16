import React from 'react';
import {StyleSheet, TextInput, Text, View} from 'react-native';
import {CheckBox} from 'react-native-elements'

class TodoListTask extends React.Component {

    onIsDoneChanged = (e) => {
        this.props.changeStatus(this.props.task, e.currentTarget.checked)
    }

    render = () => {
        return (
            <View style={styles.tasks}>
                <CheckBox
                    onChange={this.onIsDoneChanged}
                    // title='Click Here'
                    checked={this.props.task.isDone}
                />
                <Text style={styles.valueText}>
                    {this.props.task.title}, priority: {this.props.task.priority}
                </Text>
            </View>

        );
    }
}

export default TodoListTask;

const styles = StyleSheet.create({
    tasks: {
        // flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
        flexDirection: 'row'
    },
    valueText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
});
