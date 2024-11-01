import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "../screens/HomeScreen"
import { TouchableOpacity, Image, TextInput, Text,SafeAreaView, View } from 'react-native'
import CategoryFilterScreen from "../screens/CategoryFilterScreen"
import ProductDetailsScreen from "../screens/ProductDetailsScreen"
import {FontAwesome5, Ionicons,Entypo} from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native'

const Stack = createStackNavigator()

const MainHeaderComponent = () => {
  return (
    <SafeAreaView style={{ flexDirection: "row", alignItems: "center", width:"90%",marginHorizontal:"5%",marginBottom:10,marginVertical:50}}>
      <TouchableOpacity>
        <Image style={{ width: 38, height: 38, borderRadius: 19 }} source={require("../../assets/omerbaba2.jpg")} />
      </TouchableOpacity>
      <TextInput
        placeholder='Ara...'
        style={{backgroundColor:"#E5E5E5",flex:1,marginHorizontal:10,height:35,borderRadius:10,paddingLeft:"32%",fontSize:15}}
      />
      <Text style={{ color: "#ff1840", fontSize: 18 }}>Filtrele</Text>
    </SafeAreaView>
  )
}

const CategoryHeaderComponent = () => {
  const navigation=useNavigation()
  return (
    <SafeAreaView style={{ flexDirection: "row", alignItems: "center", width:"90%",marginHorizontal:"5%",marginBottom:10,marginVertical:50}}>
      <TouchableOpacity onPress={()=>navigation.goBack()} >
      <FontAwesome5  name="arrow-left" size={24} color="#989898" />
      </TouchableOpacity>
      <TextInput
        placeholder='Ara...'
        style={{backgroundColor:"#E5E5E5",flex:1,marginHorizontal:10,height:35,borderRadius:10,paddingLeft:"32%",fontSize:15}}
      />
      <Text style={{ color: "#ff1840", fontSize: 18 }}>Filtrele (1)</Text>
    </SafeAreaView>
  )
}
function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{
          header: () => (     
            <MainHeaderComponent />
          ),
     
        }}
      />
    <Stack.Screen
    name="ProductDetails"
    component={ProductDetailsScreen}
    options={{
      headerTransparent:true,
      headerRight:()=>(
        <View style={{marginRight:20,backgroundColor: "rgba(0,0,0,0.5)",height:36,width:36,flexDirection:"row",justifyContent:"center",alignItems:"center",borderRadius:18}}>
          <Ionicons style={{marginRight:-3}} name="arrow-redo-sharp" size={24} color="#FEFDFC" />
        </View>
      ),
      headerLeft:()=>(
        <TouchableOpacity  style={{marginLeft:20,backgroundColor: "rgba(0,0,0,0.5)",height:36,width:36,flexDirection:"row",justifyContent:"center",alignItems:"center",borderRadius:18}}>
          <Entypo name="cross" size={24} color="#FEFDFC" />
        </TouchableOpacity>
      ),
      headerTitle:()=>(null)
    }}
    />
      <Stack.Screen
        name='CategoryFiltering'
        component={CategoryFilterScreen}
        options={{
          header: () => (
            <CategoryHeaderComponent />
          )
     
        }}
      />
    </Stack.Navigator>
  )
}

export default HomeNavigator