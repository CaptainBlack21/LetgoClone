import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "../screens/HomeScreen"
import { TouchableOpacity, Image, TextInput, Text, SafeAreaView, View } from 'react-native'
import CategoryFilterScreen from "../screens/CategoryFilterScreen"
import ProductDetailsScreen from "../screens/ProductDetailsScreen"
import AuthenticationScreen from "../screens/AuthenticationScreen"
import ProfileScreen from "../screens/ProfileScreen"


import { FontAwesome5, Ionicons, Entypo } from "@expo/vector-icons"
import { useNavigation, getFocusedRouteNameFromRoute } from '@react-navigation/native'
import { getAuth } from 'firebase/auth';

const Stack = createStackNavigator()
const MainHeaderComponent = () => {
  const navigation = useNavigation()

  const auth = getAuth();
  const userData = auth.currentUser;

  return (
    <SafeAreaView style={{ flexDirection: "row", alignItems: "center", width: "90%", marginHorizontal: "5%", marginBottom: 10, marginVertical: 50 }}>
      <TouchableOpacity onPress={() => {
        if (userData) {
          // Eğer userData mevcutsa HomeScreen'e git
          navigation.navigate("Profile");
        } else {
          // Eğer userData yoksa AuthenticationScreen'e git
          navigation.navigate("Authentication");
        }
      }}>
        <Image style={{ width: 38, height: 38, borderRadius: 19, borderWidth: 1, borderColor: "gray", padding: 2 }} source={require("../../assets/user.png")} />
      </TouchableOpacity>
      <TextInput
        placeholder='Ara...'
        style={{ backgroundColor: "#E5E5E5", flex: 1, marginHorizontal: 10, height: 35, borderRadius: 10, paddingLeft: "32%", fontSize: 15 }}
      />
      <Text style={{ color: "#ff1840", fontSize: 18 }}>Filtrele</Text>
    </SafeAreaView>
  )
}

const CategoryHeaderComponent = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={{ flexDirection: "row", alignItems: "center", width: "90%", marginHorizontal: "5%", marginBottom: 10, marginVertical: 50 }}>
      <TouchableOpacity onPress={() => navigation.goBack()} >
        <FontAwesome5 name="arrow-left" size={24} color="#989898" />
      </TouchableOpacity>
      <TextInput
        placeholder='Ara...'
        style={{ backgroundColor: "#E5E5E5", flex: 1, marginHorizontal: 10, height: 35, borderRadius: 10, paddingLeft: "32%", fontSize: 15 }}
      />
      <Text style={{ color: "#ff1840", fontSize: 18 }}>Filtrele (1)</Text>
    </SafeAreaView>
  )
}
function MyStack({ navigation, route }) {

  const tabHiddenRoutes = ["ProductDetails"];

  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    console.log("Route Name is ", routeName)
    if (tabHiddenRoutes.includes(routeName)) {
      navigation.setOptions({ tabBarStyle: { display: 'none' } });
    } else {
      console.log("Aç ", routeName)
      navigation.setOptions({ tabBarStyle: { display: 'true' } });
    }
  }, [navigation, route]);

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
          headerTransparent: true,
          headerRight: () => (
            <View style={{ marginRight: 20, backgroundColor: "rgba(0,0,0,0.5)", height: 36, width: 36, flexDirection: "row", justifyContent: "center", alignItems: "center", borderRadius: 18 }}>
              <Ionicons style={{ marginRight: -3 }} name="arrow-redo-sharp" size={24} color="#FEFDFC" />
            </View>
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 20, backgroundColor: "rgba(0,0,0,0.5)", height: 36, width: 36, flexDirection: "row", justifyContent: "center", alignItems: "center", borderRadius: 18 }}>
              <Entypo name="cross" size={24} color="#FEFDFC" />
            </TouchableOpacity>
          ),
          headerTitle: () => (null)
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
      <Stack.Screen
        name='Authentication'
        component={AuthenticationScreen}
        options={{
          headerLeft: () => (
            <TouchableOpacity style={{ marginHorizontal: 10 }} onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Text style={{ color: "black", fontWeight: "bold", fontSize: 15 }}>Kayıt Ol</Text>
          )


        }}
      />
      <Stack.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          headerLeft: () => (
            <TouchableOpacity style={{ marginHorizontal: 10 }} onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Text style={{ color: "black", fontWeight: "bold", fontSize: 15 }}>Profil</Text>
          )


        }}
      />
    </Stack.Navigator>

  )
}

export default function HomeNavigator({ navigation, route }) {
  return <MyStack navigation={navigation} route={route} />
}