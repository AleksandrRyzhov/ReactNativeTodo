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
            <View>
                <Text style={styles.nameTodo}>{this.props.title}</Text>
                <Button onPress={this.onDelTodolist}>X</Button>
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
});
