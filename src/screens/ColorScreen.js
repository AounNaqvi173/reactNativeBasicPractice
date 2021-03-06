import React , {useState} from 'react';
import {Text , View, Button, StyleSheet, FlatList } from 'react-native';

const Colorgenerator = () => {
  
    const [colors , setColors]=useState([]);

    return( <View >
        <Button  title='Add Color' onPress={() =>{
//creating a new array by doing [], (...colors) will copy all the data of colors into new array, new random color will be added by random_Color
            setColors([...colors, random_color()]); 
        }}/>
       <FlatList  
       keyExtractor={(item) => item}
       data={colors}
        renderItem={({item}) =>{
       return <View style={{height:100,width:100, backgroundColor: item}}/>
       }} 
        />
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