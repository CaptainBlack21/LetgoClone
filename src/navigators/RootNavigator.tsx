import React from 'react'
import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Foundation, Ionicons, MaterialCommunityIcons, AntDesign, FontAwesome } from "@expo/vector-icons"
import HomeNavigator from './HomeNavigator';
import PostNavigator from './PostNavigator';
import SohbetNavigator from './SohbetNavigator';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children }) => {
  return (
    <TouchableOpacity style={{
      width:70,
      height:70,
      backgroundColor:"#f23f5a",
      borderRadius:35,
      alignItems:"center",
      justifyContent:"center",
      borderWidth:5,
      borderColor:"white",
      marginTop:-15
    }}
    >
      <FontAwesome name="camera" size={20} color="white" />
      <Text style={{color:"#fff",marginTop:2,fontWeight:"600"}}>Sat</Text>
    </TouchableOpacity>
  )
}

function RootNavigator() {
  return (
    <Tab.Navigator
      initialRouteName='Ana Sayfa'
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#F24E61",
        tabBarInactiveTintColor: "#959595",
        headerShown: false,
        tabBarStyle: {
          height: 80,
        }
      }}
    >
      <Tab.Screen
        name="Ana Sayfa"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Foundation name="home" size={24} color={color} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Bildirimler"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <Ionicons name="notifications" size={24} color={color} />
              <View style={{ position: "absolute", right: -8, top: -4, width: 16, height: 16, borderRadius: 8, backgroundColor: "#f24e61", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <Text style={{ fontSize: 12, color: "white" }}>2</Text>
              </View>
            </View>
          )
        }}
      >
      </Tab.Screen>

      <Tab.Screen
        name="Sat"
        component={HomeNavigator}
        options={{
         tabBarButton:(props)=><CustomTabBarButton {...props}/>
        }}
      >
      </Tab.Screen>

      <Tab.Screen
        name="Sohbet"
        component={SohbetNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="message-processing" size={24} color={color} />),
        }}
      >
      </Tab.Screen>

      <Tab.Screen
        name="İlanlarım"
        component={PostNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="appstore1" size={24} color={color} />),
        }}
      >
      </Tab.Screen>


    </Tab.Navigator>
  )
}


export default RootNavigator