import React , {useState} from 'react';
import {Text , View, Button, StyleSheet } from 'react-native';
const Colorgenerator = () => {
  
    const [colors , setColors]=useState("");

    return( <View >
        <Button  title='Add Color' />
        <View style={{height:100,width:100, backgroundColor: random_color()}}/>

    </View>

    );
};

const random_color = () =>{
    const red=Math.floor( Math.random()*256) ;
    const blue = Math.floor( Math.random()*256);
    const green = Math.floor( Math.random()*256);
    return `rgb(${red},${green},${blue})`;
};

const styles = StyleSheet.create(
    {
        Textstyle: {
            fontSize:30,
            color: 'blue',
    }
}
);


export default Colorgenerator;