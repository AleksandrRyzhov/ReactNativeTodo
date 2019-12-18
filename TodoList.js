import React from 'react';
import {StyleSheet, TextInput, Text, View} from 'react-native';
import TodoListTasks from "./TodolistTasks";
import AddNewItemForm from "./AddNewItemForm";
import TodoListFooter from "./TodolistFooter ";
import TodoListTitle from "./TodoListTitle";
import {addTaskAC, addTodolistAC, delTaskAC, delTodolistAC} from "./reducer";
import {connect} from "react-redux";



class TodoList extends React.Component {

    nextTaskId = 0;

    state = {
        tasks: [
            {id: 0, title: 'JS', isDone: false, priority: "high"},
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
        // let newTasks = [...this.state.tasks, newTask];
        this.nextTaskId++
        this.props.addTask(this.props.id, newTask)
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

const mapStateToProps = (state) => {
    return {
        todolists: state.todolists
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
        }
    }
}

const ConnectedTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);
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
