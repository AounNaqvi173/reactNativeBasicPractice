import React , {useReducer} from 'react';
import {Text , View, Button, StyleSheet } from 'react-native';


const reducer=(state , action) =>{ 
    switch(action.operation)
    { 
        case 'increase':
            return {...state , counter: state.counter + action.amount};
        case 'decrease':
            return {...state , counter: state.counter - action.amount};
        default:
            return state;      
    }
};


const CounterScreen = () => {

    const [state , dispatch]= useReducer(reducer , {counter: 0});

    return ( <View>

        <Button title='increase'  onPress={() => { 
            dispatch({operation: 'increase' , amount: 1});
        }}/>
    
        <Button title='decrease'  onPress={() => { 
            dispatch({operation: 'decrease' , amount: -1})
        }}/>
    
        <Text style={styles.Textstyle}>Counter screen: {state.counter}</Text>
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










/* by using useState
const [counter , setCounter]= useState(0);

    return ( <View>

        <Button title='increase'  onPress={() => { 
            setCounter(counter + 1);
        }}/>
    
        <Button title='decrease'  onPress={() => { 
            setCounter(counter - 1);
        }}/>
     */