import React, { useEffect, useState } from 'react'
import {ScrollView } from "react-native"
import FavoriteProducts from "../../components/FavoriteProducts"
import MessageNotification from "../../components/MessageNotification"
import MainProducts from "../../components/MainProducts"
import CategoryFilter from "../../components/CategoryFilter"
import { Product } from "../../models"
import productsassets from '../../../assets/products'


function index() {

    const [products, setProducts] = useState<Product[]>([])
    useEffect(() => {
        setProducts(productsassets)
    }, [])

    return (
        <ScrollView style={{ backgroundColor: 'white', height: '100%' }}>
            <MessageNotification/>
            <CategoryFilter/>
            <FavoriteProducts favoriteProducts={products}/>
            <MainProducts mainProducts={products} filtered={false} header={"Pendik"}/>

        </ScrollView>
    )
}

export default index