import React, {useState} from 'react';
import { Text , Button ,View, StyleSheet,} from 'react-native';
import Colorcomponent from '../components/Colorcomponent';

const CustomColor = () => {
                                                /*Generally we will create the sate variable in
                                                the most parent component that needs to read or change
                                                a state value in this case this screen in which we have
                                                imported the components*/
    
 const [ red , setRed]=useState(0);
 const [ blue , setBlue]=useState(0);
 const [ green , setGreen]=useState(0);

 const COLOR_INCREMENT= 15 ;
 const setcolor=(color,change)=>{
     //color === 'red', 'green', 'blue'
     //change === +15, -15
 
     switch(color) {
         case 'red':
             if(red+change >255 || red + change <0){
                    return;  }
            else {setRed(red +change);}
                break;
        case 'blue':
            if(blue+change >255 || blue + change <0){
                    return;  }
            else {setBlue(blue +change);}
                 break;    
        case 'green':    
             if(green+change >255 || green + change <0){
                     return;  }
            else {setGreen(green +change);}
    default:
                 return;  
    }

 };
                                                 /* If a child needs to change a state value , the parent can 
                                                pass down a callback function to change the state value as a prop.
                                                As in this case we need our child components that is Colorcomponent 
                                                to change the three different state values of red, bue and green */


    return( <View>
     <Colorcomponent  onIncrease={ () => { setcolor('red', COLOR_INCREMENT)} } 
        onDecrease={ () => { setcolor('red' , -1 * COLOR_INCREMENT)}}
        title="Red"  
        />
        
        <Colorcomponent onIncrease={() => { setcolor('blue' ,  COLOR_INCREMENT)}} 
          onDecrease={() => {setcolor('blue' , -1 * COLOR_INCREMENT)}} 
          title="Blue" 
         />
        
        <Colorcomponent onIncrease={() => { setcolor('green' , COLOR_INCREMENT)}} 
         onDecrease={() => {setcolor('green' ,-1 * COLOR_INCREMENT)}} 
             title="Green"  
         />

         <View style={{ height:160 , width: 160 , backgroundColor: `rgb(${red}, ${green} , ${blue})`}} />
    </View>

    );
};


const styles= StyleSheet.create({

    textStyle: {
        fontSize:10,
    }
});

export default CustomColor;