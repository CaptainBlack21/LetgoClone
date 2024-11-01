import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import PostScreen from "../screens/PostScreen"
import { Text } from 'react-native'
import { MaterialCommunityIcons,Ionicons  } from '@expo/vector-icons';

const Stack = createStackNavigator()

function PostNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={PostScreen}
                options={{
                    headerStyle: {
                        backgroundColor: "#f1f1f1"
                    },
                    headerTitle: () => (
                        <Text style={{ fontWeight: "bold", fontSize: 15 }}>İlanlarım</Text>
                    ),
                    headerLeft: () => (
                        <MaterialCommunityIcons style={{marginLeft:15}} name="lightbulb-on" size={30} color="#949494" />
                    ),
                    headerRight:()=>(
                        <Ionicons style={{marginRight:15}} name="arrow-redo-sharp" size={30} color="#949494" />
                    )
                }}
            />
        </Stack.Navigator>
    )
}

export default PostNavigator