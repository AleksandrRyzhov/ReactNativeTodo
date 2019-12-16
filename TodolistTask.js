import React from 'react';
import {StyleSheet,TextInput, Text, View} from 'react-native';
import { useSelector} from "react-redux";

class TodoListTasks extends React.Component {
  render = () => {

    let taskElement =  this.props.tasks.map ((task, i) => <TodoListTask  key = {i} changeStatus={this.props.changeStatus} task={task} />)

    return (


            <View >
              {taskElement}
            </View>

    );
  }
}

export default TodoListTasks;
