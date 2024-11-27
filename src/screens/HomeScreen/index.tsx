import React, { useEffect, useState } from 'react'
import {ActivityIndicator, ScrollView } from "react-native"
import FavoriteProducts from "../../components/FavoriteProducts"
import MessageNotification from "../../components/MessageNotification"
import MainProducts from "../../components/MainProducts"
import CategoryFilter from "../../components/CategoryFilter"
import {Product} from "../../models"
import { DataStore } from '@aws-amplify/datastore';

function index() {

    const [products, setProducts] = useState<Product[]>([])
    useEffect(() => {
        const startSync = async () => {
            await DataStore.start(); // Senkronizasyonu başlat
            const results = await DataStore.query(Product);
            setProducts(results);
        };
    
        startSync();
    }, []);

    if(!products){
        return  <ActivityIndicator/>
        
    }

    return (
        <ScrollView style={{ backgroundColor: 'white', height: '100%' }}>
            <MessageNotification/>
            <CategoryFilter/>
            <FavoriteProducts productArray={products}/>
            <MainProducts mainProducts={products} filtered={false} header={"Pendik"}/>

        </ScrollView>
    )
}

export default index