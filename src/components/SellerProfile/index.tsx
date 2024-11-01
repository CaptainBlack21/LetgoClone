import React from 'react'
import { Image, View, Text } from 'react-native'
import { MaterialIcons, FontAwesome, Feather } from '@expo/vector-icons';

function index({ averageRating }: { averageRating: number }) {
    return (
        <View style={{marginTop:22,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View>
                    <Image style={{ height: 46, width: 46, borderRadius: 23 }} source={require("../../../assets/omerbaba2.jpg")} />
                    <MaterialIcons style={{ position: "absolute", bottom: -4, right: 1 }} name="verified" size={14} color="#A5CF74" />
                </View>
                <View style={{ marginLeft: 12 }}>
                    <Text style={{ fontWeight: "600", fontSize: 15 }}>Ömer Taha Yağmur</Text>
                    <View style={{flexDirection:"row",alignItems:"center",paddingTop:3}}>
                        {[0, 0, 0, 0, 0].map((el, i) => (
                            <FontAwesome style={{marginRight:2}} key={i} name="star" size={16} color={i<Math.floor(averageRating) ? "#FFD200":"#E1E1E1" } />
                        ))}
                    </View>
                </View>
            </View>
            {/* symbol */}
            <Feather name="chevron-right" size={28} color="gray" />

        </View>
    )
}

export default index