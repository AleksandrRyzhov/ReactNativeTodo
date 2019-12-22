import React from 'react';
import {StyleSheet, TextInput, Text, View} from 'react-native';
import {CheckBox} from 'react-native-elements'
import Button from "react-native-button";

class TodoListTask extends React.Component {

    state = {
        title: this.props.task.title,
        editMode: false
    }

    activateEditMode = () => {
        this.setState({editMode: true});
    }
    deactivateEditMode = () => {
        this.props.changeTitle(this.props.task.id, this.state.title)
        this.setState({editMode: false});
    }

    onIsDoneChanged = () => {
        this.props.changeStatus(this.props.task.id, !this.props.task.isDone)
    }

    onDelTask=()=> {
        this.props.onDelTask(this.props.task.id)
    }

    render = () => {
        return (

            <View style={styles.tasks}>

                <CheckBox
                    onPress={this.onIsDoneChanged}
                    // title='Click Here'
                    size={16}
                    checked={this.props.task.isDone}/>
                <View>
                    {!this.state.editMode ?
                        <View style={styles.inputSave}>
                        <Text onPress={this.activateEditMode}
                              style={[styles.valueText, (this.props.task.isDone === true) && styles.checkedValueTrue]}>
                        {this.props.task.title}, priority: {this.props.task.priority}
                    </Text>
                        <Button onPress={this.onDelTask}>Del</Button></View>
                        : <View style={styles.inputSave}>
                            <TextInput style={styles.inputTitle} autoFocus={true}
                                       onChangeText={(title)=>this.setState({title})} >
                                {this.props.task.title}</TextInput>
                        <Button onPress={this.deactivateEditMode}>Save</Button></View>}

                </View>

            </View>

        );
    }
}

export default TodoListTask;

const styles = StyleSheet.create({
    tasks: {
        // flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        // alignSelf: 'center',
        flexDirection: 'row',
        margin: 1,
        padding: 1,
        borderRadius: 3,
        borderWidth: 0.5,
        borderColor: '#68fdff',
    },
    valueText: {
        fontSize: 16,
        color: 'black',

    },
    checkedValueTrue: {
        fontSize: 14,
        opacity: 0.5,
        textDecorationLine: "line-through",
    },
    inputSave: {
        width: 300,
        // flex: 1,
        // fontSize: 20,
        // fontWeight: 'bold',
        alignItems: 'center',
        // alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 1,
        padding: 1,

    },
    inputTitle: {

        fontSize: 16,
        margin: 1,
        padding: 1,


    },
});
