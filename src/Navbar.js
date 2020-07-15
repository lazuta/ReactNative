import React from 'react';

import { View , Text, StyleSheet} from 'react-native';

export const Navbar = props => {
    return(
        <View style = {styles.navbar}>
            <Text style = {styles.text}>SHAW<Text style = {styles.second}>CountER</Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        backgroundColor: '#222222',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#E87700',
        fontSize: 30,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    second: {
        color: '#E35500'
    }
})