import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';


export const SearchBar = ({hide, hideSearch, search}) => {

    if (!hide) return null

    let text = ""

    return(
        <View style={styles.container}>
            <Pressable
                onPress={hideSearch}
            >
                <Image 
                    style={styles.closeIcon}
                    source={require('../assets/close.png')}
                />
            </Pressable>
            <TextInput
                onChangeText={(value) => text = value}
            />
            <Pressable
                onPress={() => search(text)}
            >
                <Image
                    style={styles.confirmIcon}
                    source={require('../assets/confirm.png')}
                />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15
    },
    closeIcon: {
        height: 15,
        width: 15 
    },
    confirmIcon: {
        height: 25,
        width: 25
    }
});