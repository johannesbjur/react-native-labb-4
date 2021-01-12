import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FeedList } from './components/feedList';
import { LoadDataBtn } from './components/loadDataBtn';
import { SearchBar } from './components/searchBar';
import { Header } from './components/header';

export default function App() {

    var [feedData, setFeedData] = useState([])
    let hideLoadBtn = false
    let [showSearch, setShowSearch] = useState(false)
    var [array, setArray] = useState([])


    if(feedData.length != 0) hideLoadBtn = true



    const searchPressed = () => {
        console.log('search')
        setShowSearch(true)
    }
    const search = (text) => {
        setArray(feedData)
        setFeedData(feedData.filter(item => item.title.includes(text)))
    }
    const hideSearch = () => {
        console.log('hide')
        setShowSearch(false)
        setFeedData(array)
    }

    return (
        <View style={styles.container}>

            <SearchBar
                hide={showSearch}
                hideSearch={hideSearch}
                search={search}
            />

            <Header 
                title="YouTube"
                searchPressed={searchPressed}
                hide={showSearch}
            />

            <LoadDataBtn
                hide={hideLoadBtn}
                setFeedData={setFeedData}
            />
            <FeedList 
                feedData={feedData}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15
    }
});
