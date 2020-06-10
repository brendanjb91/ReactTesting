// Part 1 - Import libaries to create component
// Import react libraries for the component
import React from 'react';
//Import only two parts of the "React Native" library instead of the whole lot
// View is used to group elements together
import { Text, StyleSheet, View } from 'react-native';


// Part 2 - Create a component - a function that returns JSX (similar to HTML)
//Can use either a normal function or an arrow function
const ComponentsScreen = () => {
// Can store JSX directly in a variable and then refernece the variable with {} syntax
    const greeting = <Text style={styles.textStyle3}>Hello my name is Brendan!</Text>

    return <View>
        <Text style={styles.textStyle}>This is the components screen!</Text>
        <Text style={styles.textStyle2}>Hi there!</Text>
        <Text style={styles.textStyle}>3rd text field</Text>
        <Text style={styles.textStyle2}>4th text field</Text>
        
        {greeting}
        </View>
    
};


// Part 3 - Create a style sheet for the component
const styles = StyleSheet.create({
    // Name for text style can be anything... textStyle below
    textStyle: {
        fontSize: 30,
        color: 'blue'
        // fontFamily: 'Calibri'
        
    },


    textStyle2: {
        fontSize: 30,
        color: 'red'
    },

    textStyle3: {
        fontSize: 30,
        color: 'pink'
    }
});




// Part 4 - Export the component so that it can 
// be used elsewhere in the project

export default ComponentsScreen;
