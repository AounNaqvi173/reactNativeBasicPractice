import React from "react";
import {Text , StyleSheet, View} from 'react-native';


const componentsScreen = () => {
  const name = "Aoun Abbas";

  return (
    <View>
  <Text style={ styless.textStyle}> This is the Componets Screen</Text>
   <Text>My Name is {name}</Text> 
  </View>
  );
};
const styless = StyleSheet.create({
  textStyle : {
    textAlign : "center",
    fontStyle : "italic",
    fontSize : 45, 
  },   
  subHeaderStyle :
  {
    fontSize: 20,
    fontStyle: "italic",
  }
});

export default componentsScreen;