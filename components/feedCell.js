import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';

export const FeedCell = ({itemData}) => {


    return(
        <View>
            <Image 
                style={styles.image}
                source={{uri: itemData.imageUrl}}
            />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{itemData.title}</Text>
                <Text style={styles.channelName}>{itemData.channel}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold'
    },
    channelName: {
        color: 'grey'
    },
    textContainer: {
        margin: 10
    }
});