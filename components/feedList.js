import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { FeedCell } from './feedCell';

export const FeedList = ({feedData}) => {


    return(
        <View>
            <FlatList 
                data={feedData}
                // renderItem={ ({item}) => <Text>{item.title}</Text>}
                renderItem={ ({item}) => <FeedCell itemData={item} />}
                keyExtractor={(item) => item.id.toString()}
            />

        </View>
    )
}



