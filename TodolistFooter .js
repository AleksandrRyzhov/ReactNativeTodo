import React from 'react';
import {StyleSheet, TextInput, Text, View} from 'react-native';
import {CheckBox} from 'react-native-elements'
import Button from "react-native-button";


class TodoListFooter extends React.Component {
    render = () => {
        return (
             <View style={styles.buttonValue}>
                        <Button
                            style={[styles.button, (this.props.filterValue === "All") && styles.activeButton]}
                            onPress={()=> this.props.changeFilter("All")}>All</Button>
                        <Button
                            style={[styles.button, (this.props.filterValue === "Completed") && styles.activeButton]}
                            onPress={()=> this.props.changeFilter("Completed")}>Completed</Button>
                        <Button
                            style={[styles.button, (this.props.filterValue === "Active") && styles.activeButton]}
                            onPress={()=> this.props.changeFilter("Active")} >Active</Button>
                    </View>
                 );
    }
}

export default TodoListFooter;


const styles = StyleSheet.create({

    button: {
        width: 120,
        margin: 2,
        padding: 5,
        borderRadius: 3,
        borderWidth: 0.5,
        borderColor: '#68fdff',

},
activeButton: {
    borderColor: "#0008ff",
        borderWidth: 2,
},
    buttonValue: {
        // alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
},
});
