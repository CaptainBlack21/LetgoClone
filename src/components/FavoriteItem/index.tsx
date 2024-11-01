import React from 'react'
import { View, Image, Text, Dimensions } from 'react-native'
import { Product } from '../../models'
import { FontAwesome, Ionicons } from '@expo/vector-icons/';

type favoriteItemProps = {
    product: Product
}

const { width, height } = Dimensions.get("window")

function index({ product }: favoriteItemProps) {
    return (
        <View style={{padding:14,borderColor:"#EAEAEA",borderWidth:2,borderRadius:10,shadowColor:"gray",shadowOpacity:0.12,marginBottom:15,height:height*0.18}}>
            <View style={{ flexDirection: "row", alignItems: "center",paddingBottom:18,borderBottomColor:"#dcdee0",borderBottomWidth:1.2 }}>
                <Image style={{ width: width * 0.17, height: width * 0.17 ,borderRadius:8}} source={{ uri: product.image }} />
                <View style={{width:"80 %",marginLeft:10}}>
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <FontAwesome name="turkish-lira" size={15} color="black" />
                            <Text style={{ fontWeight: "bold", fontSize: 14, marginLeft: 3 }}>{product.price}</Text>
                        </View>
                        <Ionicons name="trash-sharp" size={22} color="#919191" />
                    </View>
                    <Text style={{fontWeight:"500",color:"#5C5C5C"}}>{product.name}</Text>

                </View>

            </View>

            <View style={{flexDirection:"row",justifyContent:"space-between",width:"74%",marginHorizontal:"13%",marginTop:18,alignItems:"center"}}>
                <Text style={{color:"#7a7a7a",fontWeight:"bold",fontSize:15}}>Paylaş</Text>
                <Text style={{color:"#F64454",fontWeight:"bold",fontSize:15}}>Sohbet Et</Text>
            </View>

        </View>
    )
}

export default index