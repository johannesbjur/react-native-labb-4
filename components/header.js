import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Image, Pressable } from 'react-native';

export const Header = ({title, searchPressed, hide}) => {

    if(hide) return null

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Pressable
                onPress={searchPressed}
            >
                <Image
                    style={styles.searchIcon}
                    source={require('../assets/search.png')} 
                />
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 15
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    searchIcon: {
        width: 30,
        height: 30
    }
});