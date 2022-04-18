import React from 'react';
import {Text , StyleSheet, View , FlatList} from 'react-native';

const ListScreen = () => {

    const friends =[ 
        { name: 'Ali'} , 
        {name :'Ahmad'},
        { name : 'Ahsan'},
        {name : 'Asim'},
        {name: 'Ali'}
    ];

    return (
    <FlatList
    showsVerticalScrollIndicator={false}
    keyExtractor={friends => friends.name}
     data={friends} 
     renderItem={({item }) => {
         return <Text style= {styles.Textstyle}>{item.name }</Text>
     }
     }/>
    ); 

}

const styles = StyleSheet.create({
    Textstyle:
    {
        fontSize: 10,
        marginVertical: 50,
          
    }

    });

export default ListScreen;