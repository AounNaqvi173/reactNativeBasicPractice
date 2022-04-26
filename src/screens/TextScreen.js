import React ,{useState} from 'react';
import {Text ,TextInput, View , StyleSheet} from 'react-native';

const TextScreen = () => {

    const [name , setName] = useState('');
    const [pass , setPass] =useState('');
    return( <View>

        <Text>Enter your name:</Text>
        <TextInput style={ styles.Input}
            autoCapitalize="none"
            autoCorrect={false}
            value={name}
            onChangeText={(NewText) => { setName(NewText)}}

        />

        <Text>Enter Password</Text>
        <TextInput style={ styles.Input}
            autoCapitalize="none"
            autoCorrect={false}
            value={pass}
            onChangeText={(NewPass) => { setPass(NewPass)}}

        />
        {pass.length < 4  ? <Text>Password must be greter then 5 characters</Text> : null }

        <Text>Your Name is {name}</Text>
    </View>)

};

const styles = StyleSheet.create({

    Input: {
        margin: 15 ,
        fontSize: 30,
        borderColor: 'black',
        borderWidth: 2
    }

});


export default TextScreen;