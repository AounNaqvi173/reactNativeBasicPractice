import React from "react";
import {Text,StyleSheet, Button, TouchableOpacity, View} from "react-native";

const HomeScreen = (props) => {

    return ( 
    <View>
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
    </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 50
    }
});

export default HomeScreen;