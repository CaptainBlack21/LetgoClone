import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Text, View } from 'react-native'
import MessageItem from "../../components/MessageItem"
import { Message } from "../../models"
import { DataStore } from '@aws-amplify/datastore'
function index() {

    const [messages, setMessages] = useState<Message[]>([])

    useEffect(() => {

        DataStore.query(Message).then(setMessages)
    })
    if(!messages)
        {return <ActivityIndicator/>

        }

    return (

        <FlatList
            data={messages}
            renderItem={({ item }) => <MessageItem item={item} />}

        >

        </FlatList>
    )
}

export default index