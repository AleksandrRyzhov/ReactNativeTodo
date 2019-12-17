import React from 'react';
import {StyleSheet, TextInput, Text, View} from 'react-native';
import TodoListTasks from "./TodolistTasks";
import TodoListHeader from "./TodolistHeader";
import TodoListFooter from "./TodolistFooter ";



class TodoList extends React.Component {

    nextTaskId = 4;

    state = {
        tasks: [
            {id: 0, title: 'JS', isDone: false, priority: "high"},
            {id: 1, title: 'React', isDone: false, priority: "high"},
            {id: 2, title: 'CSS', isDone: true, priority: "low"},
            {id: 3, title: 'HTML', isDone: false, priority: "high"},
        ],
        filterValue: "All"
    }


    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        })
    }

    addTask = (newText)=>{
        let newTask = {id: this.nextTaskId, title: newText, isDone: false, priority: "high"};
        let newTasks = [...this.state.tasks, newTask];
        this.nextTaskId++
        this.setState({tasks: newTasks})
    }

    changeTask = (taskId, obj)=> {
        let newTasks = this.state.tasks.map(t => {
            if (t.id !== taskId) {
                return t
            }
            else {
                return {...t, ...obj}
            }}
        )
        this.setState({
            tasks: newTasks
        })
    };

    changeStatus = (taskId, isDone)=> {
        this.changeTask(taskId, {isDone: isDone})}


    changeTitle = (taskId, title)=> {
        this.changeTask(taskId, {title: title})}

    render = () => {

        return (
            <View style={styles.container}>
                <View >
                    <Text style={styles.nameTodo}>What to Learn</Text>
                    <TodoListHeader  addTask={this.addTask}/>
                    <TodoListTasks changeStatus={this.changeStatus}
                                   changeTitle={this.changeTitle}
                                   tasks={this.state.tasks.filter(t => {
                        if (this.state.filterValue === "All") {
                            return true
                        }
                        if (this.state.filterValue === "Active") {
                            return t.isDone === false
                        }
                        if (this.state.filterValue === "Completed") {
                            return t.isDone === true
                        }
                    })}/>
                    <TodoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue}/>
                </View>
            </View>
        );
    }
}

export default TodoList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fffbff',
        // alignItems: 'center',
        alignSelf: 'center',
        // justifyContent: 'center',
        flexDirection: 'column',
        padding: 25,
    },
    nameTodo: {
        alignSelf: 'center',
        // justifyContent: 'center',
        fontSize: 20,
        color: 'black',
        padding: 1,
    },

});
