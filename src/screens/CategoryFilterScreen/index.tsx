import React, { useEffect, useState } from 'react'
import { ScrollView } from "react-native"
import productsassets from '../../../assets/products'
import { Category, Filtering, Product } from "../../models"
import MainProducts from "../../components/MainProducts"
import MessageNotification from "../../components/MessageNotification"
import FilteringCategory from "../../components/FilteringCategory"

function index(props) {
    const [products, setProducts] = useState<Product[]>([])
    const [category,setCategory]=useState<Category>(props.route.params.category)
    useEffect(() => {
        setProducts(productsassets)
    }, [])
    return (
        <ScrollView style={{ backgroundColor: 'white', height: '100%' }}>
            <FilteringCategory category={category}/>
            <MessageNotification />
            <MainProducts mainProducts={products} filtered={true} header={"Arama Sonuçları (1041464)"} />
        </ScrollView>
    )
}

export default index