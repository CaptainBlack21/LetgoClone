import React, { useState, useEffect } from 'react'
import { Image, ScrollView, Text, View, StyleSheet, Dimensions } from 'react-native'
import filteringsData from '../../../assets/filterings'
import { Category, Filtering } from '../../models'
import { Feather } from "@expo/vector-icons"

const { width, height } = Dimensions.get("window")
function index({category}:{category:Category}) {

    const [filterings, setFilterings] = useState<Filtering[]>([])

    useEffect(() => {
        setFilterings(filteringsData)
        return () => {
            setFilterings([])
        }
    }, [])

    return (
        <ScrollView style={{ marginHorizontal: 10, marginVertical: 12 }} horizontal={true} bounces={true} showsHorizontalScrollIndicator={false}>
            <View  style={[{ backgroundColor: "#616161" }, styles.filteringBadge]}>
                <Image source={category.src} style={{width:32,height:32,borderRadius:16,marginLeft:-3,marginRight:8}}/>
                <Text style={{color:"white",fontWeight:"600",fontSize:14}}>{category.name}</Text>
                <Feather style={{ marginLeft: 4 }} name="chevron-down" size={24} color="#818181" />
            </View>
            {filterings.map((item: Filtering) => (
                <View key={item.id} style={[{ backgroundColor: "#f5f5f5" }, styles.filteringBadge]}>
                    <Text style={{fontWeight:"600",color:"#424242"}}>{item.name}</Text>
                    <Feather style={{ marginLeft: 4 }} name="chevron-down" size={24} color="#818181" />
                </View>
            ))}

        </ScrollView>
    )
}
const styles = StyleSheet.create({
    filteringBadge: {
        flexDirection: "row",
        paddingHorizontal: 6,
        height: height * 0.047,
        marginRight: 7,
        alignItems: "center",
        borderRadius: 18,
        justifyContent: "space-between",
        paddingVertical: 5
    }
})

export default index