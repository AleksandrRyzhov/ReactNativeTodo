import React from 'react';
import {StyleSheet, TextInput, Text, View} from 'react-native';
import {CheckBox} from 'react-native-elements'
import Button from "react-native-button";



class TodoListTitle extends React.Component {
    onDelTodolist =()=> {
        this.props.deleteDodolist()
    }

      render = () => {
        return (
            <View style={styles.inputSave}>
                <Text style={styles.nameTodo}>{this.props.title}</Text>
                <Button onPress={this.onDelTodolist}>Del</Button>
                    </View>
        );
    }
}

export default TodoListTitle;

const styles = StyleSheet.create({
    nameTodo: {
        alignSelf: 'center',
        // justifyContent: 'center',
        fontSize: 20,
        color: 'black',
        padding: 1,
    },
    inputSave: {
        // width: 300,
        // flex: 1,
        // fontSize: 20,
        // fontWeight: 'bold',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 1,
        padding: 1,
    },
});
