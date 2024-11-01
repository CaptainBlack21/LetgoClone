import React, { useState } from 'react'
import { View, ScrollView, Text } from 'react-native'
import ImageCarousel from "../../components/ImageCarousel"
import DetailTextBox from "../../components/DetailTextBox"
import SellerProfile from "../../components/SellerProfile"
import MappingComponent from "../../components/MappingComponent"


import { Product } from '../../models'
function index(props) {
    const [product, setProduct] = useState<Product>(props.route.params.product)
    return (
        <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
            <ImageCarousel images={product.images} />
            <View style={{paddingHorizontal:20,paddingVertical:14}}>
                <DetailTextBox price={product.price} name={product.name} description={product.description} />
                <SellerProfile averageRating={product.rating}/>
                <MappingComponent/>
            </View>
        </ScrollView>
    )
}

export default index