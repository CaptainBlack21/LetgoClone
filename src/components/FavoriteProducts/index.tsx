import React , {useEffect,useState} from 'react'
import {View,ScrollView,Text} from "react-native"
import styles from './styles'
import { AntDesign } from '@expo/vector-icons'; 
import productassets from "../../../assets/products"
import {Product} from "../../models"
import FavoriteProductItem from "../../components/FavoriteProductItem"

type favoriteProductsProps = {
    favoriteProducts: Product[]
  
  }


function index({favoriteProducts}:favoriteProductsProps) {

  return (
    <View style={styles.productsContainer}>
        {/* Render header */}
        <View style={styles.titleProducts}>
            <Text style={styles.topicTitle}>
                Vitrin İlanları
            </Text>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text style={styles.detailTitle}>Hepsini gör</Text>
                <AntDesign name="right" size={18} color="#F24E61" />
            </View>
        </View>
        {/* Render favorite products */}
        <ScrollView
        bounces={true}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        >
            {favoriteProducts.map((item) => {
                return <FavoriteProductItem prodType='favorite' key={item.id} product={item}/>
            })}
        </ScrollView>
    </View>
  )
}

export default index