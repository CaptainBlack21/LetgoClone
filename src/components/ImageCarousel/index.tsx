import React, { useState } from 'react'
import { View, Image, FlatList, StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get("window")
function index({ images }: { images: string[] }) {
    const [activeIndex, setActiveIndex] = useState(0)

    const onViewRef = React.useRef((viewableItems) => {
        if (viewableItems.viewableItems.length > 0) {
            setActiveIndex(viewableItems.viewableItems[0].index || 0)
        }
    })
    const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })

    return (
        <View>
            <FlatList
                data={images}
                renderItem={({ item }) => (
                    <Image
                        source={{ uri: item }}
                        style={{ width: width, height: height * 0.4, resizeMode: "stretch" }}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={width}
                snapToAlignment={"center"}
                decelerationRate={"fast"}
                viewabilityConfig={viewConfigRef.current}
                onViewableItemsChanged={onViewRef.current}
            />
            <View style={styles.dotsView}>
                {images.map((image,index)=>(
                    <View key={index} style={[styles.dot,{backgroundColor: index===activeIndex ? "#FFFFFD":"#CBCAD0"}]}/>
                ))}
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    dotsView:
    {
        position:"absolute",
        bottom:12,
        right:12,
        borderRadius:15,
        backgroundColor:'rgba(0,0,0,0.5)',
        flexDirection:"row",
        alignItems:"center"
        
    },
    dot:
    {
        width:10,
        height:10,
        borderRadius:5,
        marginVertical:6,
        marginHorizontal:8,
        backgroundColor:"white"
    }
})

export default index