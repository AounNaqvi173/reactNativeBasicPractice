import React from 'react';
import {Text , View , StyleSheet} from 'react-native';

const BoxScreen = () => {

    return (<View style={styles.PageFormat}>
        <Text style={styles.textone} >child 1</Text>
        <Text style={styles.texttwo} > child 2</Text>
        <Text style={styles.textthree} > Child 3</Text>
    </View>)
};

const styles= StyleSheet.create({
    PageFormat: {

        borderWidth:5 ,
        flexDirection:'row',
         justifyContent: 'space-between',
         borderColor: 'black',
         alignItems:'flex-start',
    }
    ,
    textone:
    { borderWidth:3 , borderColor:'red',padding:5, margin: 3, height:100 , width:100 , backgroundColor:'red'}
    , texttwo: {
        borderWidth:3 , borderColor:'red',padding:5, margin: 3
        , height:100 , width: 100 , backgroundColor: 'green', marginTop: 120
    } , 
    textthree: {
        alignItems:'flex-start',backgroundColor:'blue', height:100 , width:100 ,
        borderWidth:3 , borderColor:'red',padding:5, margin: 3
    }
});

export default BoxScreen;