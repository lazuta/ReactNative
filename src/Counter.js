import React from 'react';

import { View , Text, StyleSheet } from 'react-native';

export const Counter = props => {
    return(
        <View style = {styles.container}>
            <Text style = {styles.text}>x</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center'
    },
    text: {
        width: '100%',
        height: '100%',
        textAlign: 'center'
    }
})