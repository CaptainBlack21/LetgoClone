import React from 'react'
import { View, Dimensions, Platform, Text } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

const { width, height } = Dimensions.get("window")

function index() {
  return (
    <View>
      <MapView
        provider={Platform.OS === 'ios' ? null : PROVIDER_GOOGLE} // iOS için Apple Maps, Android için Google Maps

        initialRegion={{
          latitude: 41.0082,
          longitude: 28.9784,
          latitudeDelta: 0,
          longitudeDelta: 0.5,
        }}
        style={{ height: height * 0.19, marginTop: 12, borderRadius: 18 }}
      />
      <View style={{flexDirection:"row",alignItems:"center", height: height * 0.044, marginTop: -height * 0.04, borderBottomWidth: 0.25, borderRightWidth: 0.25, borderLeftWidth: 0.25, borderColor: "#a6a6a6", borderBottomLeftRadius: 12, borderBottomRightRadius: 12, backgroundColor: "white" }}>
        <Text style={{paddingHorizontal:16}}>34890, Pendik</Text>
      </View>
    </View>
  )
}

export default index