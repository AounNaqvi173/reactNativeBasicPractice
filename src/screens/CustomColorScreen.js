import React, {useReducer} from 'react';
import { Text , Button ,View, StyleSheet,} from 'react-native';
import Colorcomponent from '../components/Colorcomponent';


                                                /*Generally we will create the sate variable in
                                                the most parent component that needs to read or change
                                                a state value in this case this screen in which we have
                                                imported the components*/

                                                /*For this app , these three states are extremely related . There is a precise 
                                                set of well-known ways in which we update these values (ie 6 operations 2 for each 
                                                state red,blue,green ). So reducer is a function that manages changes to an object.
                                                it will take two objects as argument . 

                                                 For this app: 
                                                Argument 1 will be an object that haas all the state in it ={ red:0 , green:0 , blue:0 }
                                                Argument 2 will be an object that will define the updates we want to make to Argument 1
                                                {colorTOChange : 'red' , amount :15}

                                                Rules:
                                                1.we never change argument 1 directly (just like in sate).
                                                2.reducer must always return a value that will essentially going to be used as our state 
                                                object or our argument 1.  
                                                  */
    

 const COLOR_INCREMENT= 15 ;

const reducer =( state, action) =>{
    //state(object) ==={red: number, green: number , blue: number}
    //action(object) === { colorToChange: 'red'||'green'||'blue'  , amount: 15 || -15 }

    switch(action.colorToChange){
        case 'red':
        if(state.red + action.amount > 255 ||state.red + action.amount < 0 )
        {
            return state;
        }
        else
           return { ...state, red: state.red + action.amount};
        case 'green':
        if(state.green + action.amount > 255 ||state.green + action.amount < 0 )
        {
            return state;
        }
        else
            return {...state , green: state.green + action.amount};
        case 'blue':
        if(state.blue + action.amount > 255 || state.blue + action.amount < 0 )
        {
            return state;
        }
        else

           return {...state , blue: state.blue + action.amount};
        default:
            return state;    
    }

    
};

const CustomColor = () => {
                        
 const [state , dispatch]= useReducer(reducer, {red:0, green: 0 , blue: 0});

 
    return( <View>
     <Colorcomponent  onIncrease={ () => {dispatch({ colorToChange: 'red' , amount: COLOR_INCREMENT}) } } 
        onDecrease={ () => { dispatch({colorToChange:'red' , amount: -1 * COLOR_INCREMENT})}}
        title="Red"  
        />

        <Colorcomponent onIncrease={() => {dispatch({colorToChange:'blue' , amount: COLOR_INCREMENT})}} 
          onDecrease={() =>{ dispatch({colorToChange:'blue' , amount: -1 * COLOR_INCREMENT})}} 
          title="Blue" 
         />
        
        <Colorcomponent onIncrease={() => { dispatch({colorToChange:'green' , amount: COLOR_INCREMENT})}} 
         onDecrease={() => { dispatch({colorToChange:'green' , amount: -1 * COLOR_INCREMENT})}} 
             title="Green"  
         />

         <View style={{ height:160 , width: 160 , backgroundColor: `rgb(${state.red}, ${state.green} , ${state.blue})`}} />
    </View>

    );
};


const styles= StyleSheet.create({

    textStyle: {
        fontSize:10,
    }
});

export default CustomColor;