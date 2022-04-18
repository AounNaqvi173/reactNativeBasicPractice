import React from 'react';
import {Text , StyleSheet, View , FlatList} from 'react-native';

const ListScreen = () => {

    const friends =[ 
        { name: 'Ali' , age: 27} , 
        {name :'Ahmad', age: 27},
        { name: 'Ali', age: 27} , 
        {name :'Ahmad', age: 27},
        { name : 'Ahsan', age: 27},
        {name : 'Asim', age: 27},
        {name: 'Ali', age: 27}
    ];

    return (
    <FlatList
    showsVerticalScrollIndicator={false}
    keyExtractor={friends => friends.name}
     data={friends} 
     renderItem={({item }) => {
         return <Text style= {styles.Textstyle}>{item.name } - {item.age}</Text>
     }
     }/>
    ); 

}

const styles = StyleSheet.create({
    Textstyle:
    {
        textAlign: "center",
        fontSize: 30,
        marginVertical: 50,
          
    }

    });

export default ListScreen;