import React , {useState} from 'react';
import {Text , View, Button, StyleSheet } from 'react-native';

const CounterScreen = () => {

    const [counter , setCounter]= useState(0);

    return ( <View>

        <Button title='increase'  onPress={() => { 
            setCounter(counter + 1);
        }}/>
    
        <Button title='decrease'  onPress={() => { 
            setCounter(counter - 1);
        }}/>
    
        <Text style={styles.Textstyle}>Counter screen: {counter}</Text>
    </View>);
};

const styles = StyleSheet.create(
    {
        Textstyle: {
            fontSize:30,
            color: 'blue',
    }
}
);

export default CounterScreen;