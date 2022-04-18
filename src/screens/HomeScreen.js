import React from "react";
import {
    Text,
    StyleSheet
} from "react-native";

const HomeScreen = () => {
    return <Text style = {
        styles.text
    } > IoT Based Home Automation over cloud </Text>;
};

const styles = StyleSheet.create({
    text: {
        fontSize: 50
    }
});

export default HomeScreen;