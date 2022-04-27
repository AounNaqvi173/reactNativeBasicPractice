import React from "react";
import {Text,StyleSheet, Button, TouchableOpacity, View} from "react-native";

const HomeScreen = (props) => {

    return ( 
    <View style={styles.PageFormat}> 
    <Text style = {
    styles.text
    }> IoT Based Home Automation over cloud </Text> 
    
   <Button title="Go to Components Screen " onPress={() => props.navigation.navigate('Components')
    }/>  
    
    <TouchableOpacity onPress={() => props.navigation.navigate('List')}> 
    <Text> Go to  List Screen</Text>   
    </TouchableOpacity>
    
    <Button title="Go to Image Screen " onPress={() => props.navigation.navigate('Image')
    }/> 
    
    <Button title="Go to Count Demo Page " onPress={() => props.navigation.navigate('Count')
    }/> 
    <Button title="Go to Add Color Page " onPress={() => props.navigation.navigate('Color')
    }/> 
    
    <Button title="Go to Select Color Page " onPress={() => props.navigation.navigate('ColorSelect')
    }/>

    <Button title="Go to Add Text Page " onPress={() => props.navigation.navigate('Text')
    }/> 
    
    
    <Button title="Go to Box Page " onPress={() => props.navigation.navigate('Box')
    }/> 
     
    </View>
    ); 
};

const styles = StyleSheet.create({
   PageFormat: {
        backgroundColor: '#26292E',
        borderWidth:5 ,
         justifyContent: 'center',
         borderColor: 'black',
        top:0,
        right:0,
        bottom:0,
        left:0,
        position:'absolute'

    }, text: {
        fontSize: 50
    }
});

export default HomeScreen;