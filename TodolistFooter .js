import React from 'react';
import {StyleSheet, TextInput, Text, View} from 'react-native';
import {CheckBox} from 'react-native-elements'
import Button from "react-native-button";


class TodoListHeader extends React.Component {
    constructor(props) {
        super(props);
        this.newTaskTitleRef = React.createRef();
    }

    onAddTaskClick = () => {
        let newText = this.newTaskTitleRef.current.value;

        this.newTaskTitleRef.current.value = '';
        this.props.onAddTask(newText)
    };

    render = () => {
        return (
            <View>
                <Text>What to Learn</Text>
                            <TextInput ref={this.newTaskTitleRef}  type="text" placeholder="New task name"/>
                            <Button onClick={this.onAddTaskClick}>Add</Button>
                    </View>
        );
    }
}

export default TodoListHeader;

// const styles = StyleSheet.create({
//     tasks: {
//         // flex: 1,
//         backgroundColor: '#fff',
//         // alignItems: 'center',
//         // justifyContent: 'center',
//         flexDirection: 'row'
//     },
//     valueText: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: 'black',
//     },
// });
