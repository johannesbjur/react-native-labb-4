import React from 'react';
import { Button } from 'react-native';

export const LoadDataBtn = ({hide, setFeedData}) => {

    const url = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key=AIzaSyC0U9QWdWNITVbiO5NrgnkKPqMc1rxt4eI'
    let dataArray = []

    if (hide) return null

    const loadData = () => {
        fetch(url)
        .then(response => response.json())
        .then(json => {
            // console.log(json)
            json.items.forEach( (element, key) => {

                let item = { 
                    id: key, 
                    title: element.snippet.title, 
                    channel: element.snippet.channelTitle, 
                    imageUrl: element.snippet.thumbnails.standard.url 
                }
                dataArray.push(item)
            });
            setFeedData(dataArray)
        })
    }

    return(
        <Button 
            title="Load Data"
            onPress={loadData}
        />
    )
}