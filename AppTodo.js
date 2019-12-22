import React from 'react';
import {StyleSheet, TextInput, Text, View} from 'react-native';
import TodoList from "./TodoList";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";
import {addTodolistAC, setTodolistsAC} from "./reducer";


class AppTodo extends React.Component {

    nextTodolistId = 0;



    addTodolist = (newText)=> {
        let newTodolist = {id: this.nextTodolistId, title: newText, tasks: []};
        this.nextTodolistId++
        this.props.addTodolist(newTodolist)
    }
    render = () => {
        const todolists = this.props.todolists.map(tl => <TodoList id={tl.id} title={tl.title} tasks={tl.tasks}/>)

        return (

                <View style={styles.container}>
                    <View>
                        <AddNewItemForm addItem={this.addTodolist}/>
                    </View>
                    <View>
                        {todolists}
                    </View>
                </View>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        todolists: state.todolists
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodolist: (newTodolist) => {
            const action = addTodolistAC(newTodolist)
            dispatch(action)
        },

    }
}

const ConnectedAppTodo = connect(mapStateToProps, mapDispatchToProps)(AppTodo);
export default ConnectedAppTodo;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fffbff',
        alignItems: 'center',
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
