import React from 'react'
import { TouchableOpacity, Text, Image, View, StyleSheet } from 'react-native'
import { Message } from '../../models'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

type MessageItemProps = {
    item: Message
}
function index({ item }: MessageItemProps) {
    return (
        <TouchableOpacity style={styles.messageItem}>
            <View>
                <Image
                    source={{ uri: item.image }}
                    style={{ width: 85, height: 85, borderRadius: 12 }}
                />
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", position: "absolute", bottom: 0, right: -16, width: 36, height: 36, borderRadius: 18, backgroundColor: "#A3CE72" }}>
                    <Text style={{ color: "white", fontWeight: "bold" }}>S</Text>

                </View>
            </View>
            <View style={{ flex: 1, marginLeft: 20, flexDirection: "column" }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <Text style={{ fontSize: 16, fontWeight: "600" }}>
                        {item.productName.length > 25 ?
                            item.productName.substring(0, 22) + "..." :
                            item.productName}
                    </Text>
                    <Text style={{ color: "#949494" ,fontWeight:"500"}}>
                        {item.date}
                    </Text>
                </View>
                <Text style={{ fontSize: 15, marginTop: 5 }}>{item.sellerName}</Text>
                {

                    item.situation == "Satıldı" ? (
                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                            <FontAwesome style={{ marginRight: 5 }} name="times-circle" size={16} color="black" />
                            <Text style={{ fontSize: 15, color: "#777777" }}>Artık Mevcut Değil</Text>
                        </View>
                    ) : (
                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                            <MaterialCommunityIcons style={{marginRight: 5,backgroundColor:"#f24e61",borderRadius:9}} name="currency-usd" size={18} color="white" />
                            <Text style={{ fontSize: 15, color: "#f24e61",fontWeight:"500" }}>Satıldı</Text>
                        </View>
                    )

                }
                <View>

                </View>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    messageItem: {
        padding: 15,
        borderBottomWidth: 1.5,
        borderColor: "#e2e2e2",
        flexDirection: "row",
        alignItems: "center"
    }
})


export default index