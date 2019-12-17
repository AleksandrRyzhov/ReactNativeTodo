import React from 'react';
import {StyleSheet, TextInput, Dimensions, Text, View, ScrollView} from 'react-native';
import TodoList from "./TodoList";

const { height } = Dimensions.get('window');

class AppTodo extends React.Component {
    state = {
        // We don't know the size of the content initially, and the probably won't instantly try to scroll, so set the initial content height to 0
        screenHeight: 0,
    };

    onContentSizeChange = (contentWidth, contentHeight) => {
        // Save the content height in state
        this.setState({ screenHeight: contentHeight });
    };



    render = () => {
        const scrollEnabled = this.state.screenHeight > height;
        return (
            <View>
                <ScrollView
                    style={{ flex: 1 }}
                    contentContainerStyle={styles.scrollview}
                    scrollEnabled={scrollEnabled}
                    onContentSizeChange={this.onContentSizeChange}
                >
                    <TodoList />
                    <TodoList />
                </ScrollView>

            </View>
                   )
    }
}

export default AppTodo;

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
