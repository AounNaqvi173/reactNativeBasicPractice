import React from 'react';
import {Text,Button,View,StyleSheet} from 'react-native';

const ColorComponent = ({title , onIncrease , onDecrease}) =>{
    return(
    <View>
    <Text>{title}</Text>
    <Button title={`Increase ${title}`}        //used backtick for showing jsx in string
     onPress={() => onIncrease()}
     />  
    <Button title={`Decrease ${ title}`}
        onPress={() => onDecrease() }
    />

    </View>
    );

};




const styles = StyleSheet.create({

});
export default ColorComponent;