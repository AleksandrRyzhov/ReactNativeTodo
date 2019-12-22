import React from 'react';
import {StyleSheet, TextInput, Text, View} from 'react-native';
import TodoListTasks from "./TodolistTasks";
import AddNewItemForm from "./AddNewItemForm";
import TodoListFooter from "./TodolistFooter ";
import TodoListTitle from "./TodoListTitle";
import {addTaskAC, addTodolistAC, changeTaskAC, delTaskAC, delTodolistAC} from "./reducer";
import {connect} from "react-redux";



class TodoList extends React.Component {

    nextTaskId = 0;

    state = {
         filterValue: "All"
    }


    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        })
    }

    addTask = (newText)=>{
        let newTask = {id: this.nextTaskId, title: newText, isDone: false, priority: "high"};
        this.nextTaskId++
        this.props.addTask(this.props.id, newTask)
    }

    changeTask = (taskId, obj)=> {

        this.props.changeTask(taskId, obj, this.props.id)
    };

    changeStatus = (taskId, isDone)=> {
        this.changeTask(taskId, {isDone: isDone})}


    changeTitle = (taskId, title)=> {
        this.changeTask(taskId, {title: title})}

    deleteDodolist = ()=>{
        this.props.delTodolist(this.props.id)
    }

    onDelTask = (taskId)=>{
        this.props.delTask(this.props.id, taskId)
    }

    render = () => {

        return (
            <View style={styles.container}>
                <View >
                    <TodoListTitle title={this.props.title}
                                   deleteDodolist={this.deleteDodolist}/>
                    <AddNewItemForm addItem={this.addTask}/>
                    <TodoListTasks
                        onDelTask={this.onDelTask}
                        changeStatus={this.changeStatus}
                                   changeTitle={this.changeTitle}
                                   tasks={this.props.tasks.filter(t => {
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



const mapDispatchToProps = (dispatch) => {
    return {
        delTodolist: (todolistId) => {
            const action = delTodolistAC(todolistId)
            dispatch(action)
        },
        delTask: (todolistId, taskId) => {
            const action = delTaskAC(todolistId, taskId)
            dispatch(action)
        },
        addTask: (todolistId, newTask) => {
            const action = addTaskAC(todolistId, newTask)
            dispatch(action)
        },
        changeTask: (taskId, obj, todolistId) => {
            const action = changeTaskAC(taskId, obj, todolistId)
            dispatch(action)
        }
    }
}

const ConnectedTodoList = connect(null, mapDispatchToProps)(TodoList);
export default ConnectedTodoList;

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


});
