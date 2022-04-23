import React from 'react';
import {Text , StyleSheet , View , Image } from 'react-native';

const ImageDetail = props => {
        
    return (
        <View>
            <Image  source={require('../../assets/wisdom 2.jpg')} />
            <Text style={styles.texts}>{props.title} </Text>
            
        </View>
    );

};

const styles = StyleSheet.create({
    texts :
    {
        fontSize: 30
    }
});

export default ImageDetail;