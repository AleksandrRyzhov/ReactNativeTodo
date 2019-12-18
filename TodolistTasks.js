import React from 'react';
import {StyleSheet, TextInput, Text, View} from 'react-native';
import {useSelector} from "react-redux";
import TodoListTask from "./TodolistTask";

class TodoListTasks extends React.Component {
    render = () => {

        let taskElement = this.props.tasks
            .map((task, i) => <TodoListTask key={i}
                                            onDelTask={this.props.onDelTask}
                                            changeStatus={this.props.changeStatus}
                                            changeTitle={this.props.changeTitle}
                                            task={task}/>)

        return (
            <View>
                {taskElement}
            </View>

        );
    }
}

export default TodoListTasks;
