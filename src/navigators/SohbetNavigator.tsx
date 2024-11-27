import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import SohbetScreen from "../screens/SohbetScreen"
import { Text, View, Image } from 'react-native'
import { Fontisto, Entypo } from '@expo/vector-icons';

const Stack = createStackNavigator()

function SohbetNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={SohbetScreen}
                options={{
                    headerStyle: {
                        backgroundColor: "#f1f1f1"
                    },
                    headerTitle: () => (
                        <Text style={{ fontSize: 16 }}>Sohbet - Hepsi</Text>
                    ),
                    headerRight: () => (
                        <View style={{ flexDirection: "row", alignItems: "center",marginRight:18 }}>
                            <Fontisto style={{marginRight:14}} name="fog" size={22} color="#969696" />
                            <Entypo name="dots-three-horizontal" size={24} color="#969696" />
                        </View>
                    )
                }}
            />
        </Stack.Navigator>
    )
}

export default SohbetNavigator