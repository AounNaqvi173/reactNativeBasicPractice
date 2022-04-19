import React from 'react';
import {Text , StyleSheet , View } from 'react-native';
import ImageDetail from '../components/imageDetail' ;

const imageScreen = () => {

    return (
        <View>
            <ImageDetail  title="Forest"/>
            <ImageDetail  title="home" place = "home"/> 
            <ImageDetail  title="work" place= "university"/>

            
                  </View>
    );

};

const styles = StyleSheet.create({
texts:
{
    fontSize: 10,
}
}); 

export default imageScreen; 