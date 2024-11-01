import React from 'react';
import { View,Text,Dimensions } from 'react-native';
import {MaterialCommunityIcons,Entypo}from '@expo/vector-icons/';

const {width,height}=Dimensions.get("window");
function index() {
  return (
    <View style={{flexDirection:"row",height:height*0.055,alignItems:"center",justifyContent:"space-between",backgroundColor:"#2C2C2C"}}>
        <View style={{flexDirection:"row",paddingLeft:10,alignItems:"center"}}>
        <MaterialCommunityIcons name="message-processing" size={24} color="#767676" />
        <Text style={{color:"#FDFDFD",paddingLeft:5}}>Mesaj Bildirimlerini Aç</Text>
        </View>
        <Entypo style={{paddingRight:10}} name="chevron-right" size={30} color="#909090" />
    </View>
  )
}

export default index